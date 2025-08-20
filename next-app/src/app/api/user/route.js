import prisma from '../../../../lib/prismaClient';
import bcrypt from 'bcrypt';
import { verifyToken } from '../../../../lib/auth';

export async function GET(req) {
  // ✅ Verify admin access
  const { error } = verifyToken(req, 'ADMIN');
  if (error) {
    return new Response(JSON.stringify({ message: error }), { status: 401 });
  }

  try {
    const users = await prisma.user.findMany({
      include: { files: true },
      orderBy: { lastName: 'asc' },
    });

    const safeUsers = users.map(({ password, ...u }) => u);

    return new Response(JSON.stringify(safeUsers), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ message: 'Error fetching users', error: err.message }), { status: 500 });
  }
}

export async function POST(req) {
  // ✅ Verify admin access
  const { error } = verifyToken(req, 'ADMIN');
  if (error) {
    return new Response(JSON.stringify({ message: error }), { status: 401 });
  }

  try {
    const body = await req.json();

    // ✅ Hash password
    const hashedPassword = await bcrypt.hash(body.password, 10);

    // ✅ Create user
    const newUser = await prisma.user.create({
      data: {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        phone: body.phone,
        password: hashedPassword,
        role: body.role || 'CLIENT', // Default to CLIENT
      },
    });

    // ✅ Return user without the password
    const { password, ...userWithoutPassword } = newUser;
    return new Response(JSON.stringify(userWithoutPassword), { status: 201 });
  } catch (err) {
    return new Response(JSON.stringify({ message: 'Error creating user', error: err.message }), { status: 500 });
  }
}