import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function seedProduct() {
  await prisma.products.createMany({
    data: [
      {
        code: 'RODIM R1',
        thickness: '≥ 7.0 mil',
        gloss: '≥ 93',
        quv: '≥ 2400jam',
        warranty: '7 Tahun',
        created_by: 1,
        updated_by: 1,
        status: 1,
      },
      {
        code: 'RODIM R2 Matter',
        thickness: '≥ 7.5 mil',
        gloss: '20±2',
        quv: '≥ 2800 jam',
        warranty: '10 Tahun',
        created_by: 1,
        updated_by: 1,
        status: 1,
      },
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
      {
        code: 'RODIM R3 PRO',
        thickness: '≥ 8.5 mil',
        gloss: '≥ 93',
        quv: '≥ 3200 jam',
        warranty: '10 Tahun',
        created_by: 1,
        updated_by: 1,
        status: 1,
      },
      {
        code: 'RODIM R4 PRO',
        thickness: '≥ 9.5 mil',
        gloss: '≥ 93',
        quv: '≥ 3200 jam',
        warranty: '10 Tahun',
        created_by: 1,
        updated_by: 1,
        status: 1,
      },
    ],
  });
}
