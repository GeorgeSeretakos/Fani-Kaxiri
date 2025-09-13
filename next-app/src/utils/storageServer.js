import {S3Client, PutObjectCommand, DeleteObjectCommand, GetObjectCommand, HeadObjectCommand} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3 = new S3Client({
  region: "us-east-1", // dummy, B2 ignores this
  endpoint: process.env.B2_ENDPOINT,
  credentials: {
    accessKeyId: process.env.B2_KEY_ID,
    secretAccessKey: process.env.B2_APP_KEY,
  },
});

const BUCKET = process.env.B2_BUCKET;

// 1. Create signed URL for upload (PUT)
export async function createUploadUrl(filePath, expiresIn = 60) {
  const command = new PutObjectCommand({
    Bucket: BUCKET,
    Key: filePath,
  });
  return await getSignedUrl(s3, command, { expiresIn });
}

// 2. Create signed URL for download (GET)
export async function createDownloadUrl(filePath, expiresIn = 60) {
  const command = new GetObjectCommand({
    Bucket: BUCKET,
    Key: filePath,
    ResponseContentDisposition: `attachment; filename="${filePath.split("/").pop()}"`
  });
  return await getSignedUrl(s3, command, { expiresIn });
}


// 3. Delete file
// export async function deleteFromStorage(filePath) {
//   const command = new DeleteObjectCommand({
//     Bucket: BUCKET,
//     Key: filePath,
//   });
//   await s3.send(command);
//   return true;
// }

export async function deleteFromStorage(filePath) {
  if (!filePath) throw new Error("deleteFromStorage: missing filePath");

  // 1) Check existence first
  try {
    await s3.send(new HeadObjectCommand({ Bucket: BUCKET, Key: filePath }));
    console.info(JSON.stringify({
      level: "info",
      msg: "storage:head_found",
      bucket: BUCKET,
      key: filePath
    }));
  } catch (err) {
    // If it’s a 404, the object doesn’t exist; S3 delete would be a no-op
    if (err?.$metadata?.httpStatusCode === 404) {
      console.warn(JSON.stringify({
        level: "warn",
        msg: "storage:head_not_found",
        bucket: BUCKET,
        key: filePath
      }));
      return true; // idempotent: nothing to delete
    }
    console.error("storage:head_error", err);
    throw err;
  }

  // 2) Delete
  try {
    await s3.send(new DeleteObjectCommand({ Bucket: BUCKET, Key: filePath }));
    console.info(JSON.stringify({
      level: "info",
      msg: "storage:deleted_attempted",
      bucket: BUCKET,
      key: filePath
    }));
  } catch (err) {
    console.error("storage:delete_error", err);
    throw err;
  }

  // 3) Verify deletion
  try {
    await s3.send(new HeadObjectCommand({ Bucket: BUCKET, Key: filePath }));
    console.error(JSON.stringify({
      level: "error",
      msg: "storage:still_exists_after_delete",
      bucket: BUCKET,
      key: filePath
    }));
    return false; // unexpected: still present
  } catch (err) {
    if (err?.$metadata?.httpStatusCode === 404) {
      console.info(JSON.stringify({
        level: "info",
        msg: "storage:confirmed_deleted",
        bucket: BUCKET,
        key: filePath
      }));
      return true;
    }
    console.error("storage:post_head_error", err);
    throw err;
  }
}

// 4. Alias for download signed URL
export async function getSignedUrlWrapper(filePath, expiresIn = 60) {
  return createDownloadUrl(filePath, expiresIn);
}