import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function seedProduct() {
  await prisma.products.createMany({
    data: [
      {
        code: 'RODIM R2 PRO',
        thickness: '≥ 7.5 mil',
        gloss: '≥ 93',
        quv: '≥ 2800 jam',
        warranty: '10 Tahun',
        created_by: 1,
        updated_by: 1,
        status: 1,
      },
    ],
  });
}
