import prisma from '../../../../../lib/prismaClient';
import bcrypt from 'bcrypt';

// ✅ Fetch specific user with their files (exclude password)
export async function GET(_, { params }) {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
    include: { files: true },
  });

  if (!user) {
    return new Response(JSON.stringify({ message: 'User not found' }), { status: 404 });
  }

  // ✅ Remove password before returning
  const { password, ...userWithoutPassword } = user;
  return Response.json(userWithoutPassword);
}

// ✅ Update user
export async function PUT(req, { params }) {
  const body = await req.json();
  const dataToUpdate = {
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    phone: body.phone,
  };

  // ✅ Hash new password if provided
  if (body.password && body.password.trim() !== '') {
    dataToUpdate.password = await bcrypt.hash(body.password, 10);
  }

  const updated = await prisma.user.update({
    where: { id: parseInt(params.id) },
    data: dataToUpdate,
  });

  // ✅ Remove password from response
  const { password, ...userWithoutPassword } = updated;
  return Response.json(userWithoutPassword);
}

// ✅ Delete user
export async function DELETE(_, { params }) {
  await prisma.user.delete({
    where: { id: parseInt(params.id) },
  });
  return new Response(null, { status: 204 });
}
