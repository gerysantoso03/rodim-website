import { PrismaClient } from '@/generated/prisma';
import bcrypt from 'bcryptjs';

export async function findUserByEmail(email: string) {
  const prisma = new PrismaClient();
  return await prisma.users.findFirst({
    where: {
      email,
      status: 1,
    },
  });
}

export async function validatePassword(
  inputPassword: string,
  hashedPassword: string
): Promise<boolean> {
  return await bcrypt.compare(inputPassword, hashedPassword);
}
