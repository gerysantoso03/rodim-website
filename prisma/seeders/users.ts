import { PrismaClient } from '@/generated/prisma'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient();

export async function seedUsers() {
  const hashedPasswords = await Promise.all([
    bcrypt.hash('@1-admin12345', 10),
    bcrypt.hash('@2-admin12345', 10),
  ])

  await prisma.users.createMany({
    data: [
      {
        email: 'superadmin1@admin.com',
        password: hashedPasswords[0],
        created_by: 1,
        updated_by: 1,
        status: 1,
      },
      {
        email: 'superadmin2@admin.com',
        password: hashedPasswords[1],
        created_by: 1,
        updated_by: 1,
        status: 1,
      },
    ],
  });
}
