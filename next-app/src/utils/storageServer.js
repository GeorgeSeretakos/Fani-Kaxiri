import { S3Client, PutObjectCommand, DeleteObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3 = new S3Client({
  region: "us-east-1", // dummy, B2 ignores this
  endpoint: process.env.B2_ENDPOINT,
  credentials: {
    accessKeyId: process.env.B2_KEY_ID,
    secretAccessKey: process.env.B2_APP_KEY,
  },
});

const BUCKET = process.env.B2_BUCKET; // e.g. "documents"

// 1. Create signed URL for upload (PUT)
export async function createUploadUrl(filePath, expiresIn = 60) {
  const command = new PutObjectCommand({
    Bucket: BUCKET,
    Key: filePath,
  });
  return await getSignedUrl(s3, command, { expiresIn }); // seconds
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
export async function deleteFromStorage(filePath) {
  const command = new DeleteObjectCommand({
    Bucket: BUCKET,
    Key: filePath,
  });
  await s3.send(command);
  return true;
}

// 4. Alias for download signed URL
export async function getSignedUrlWrapper(filePath, expiresIn = 60) {
  return createDownloadUrl(filePath, expiresIn);
}
