import { PrismaClient } from '@/generated/prisma';
import { generateSecureRandomString } from '@/shared/helpers/helpers';

const prisma = new PrismaClient();

export async function seedProduct() {
  const products = [
    {
      code: 'RODIM R1',
      slug: 'rodim-r1',
      description: 'Brighter than other films at the same level',
      thickness: '≥ 7.0 mil',
      gloss: '≥ 93',
      quv: '≥ 2400',
      warranty: '7',
    },
    {
      code: 'RODIM R2 Matte',
      slug: 'rodim-r2-matte',
      description: 'Outstanding Matte Finish',
      thickness: '≥ 7.5 mil',
      gloss: '≥ 20±2',
      quv: '≥ 2800',
      warranty: '10',
    },
    {
      code: 'RODIM R2 PRO',
      slug: 'rodim-r2-pro',
      description: 'Professional-grade car body shield',
      thickness: '≥ 7.5 mil',
      gloss: '≥ 93',
      quv: '≥ 2800',
      warranty: '10',
    },
    {
      code: 'RODIM R3 PRO',
      slug: 'rodim-r3-pro',
      description: 'Highest quality, professional-grade paint finish protection',
      thickness: '≥ 8.5 mil',
      gloss: '≥ 93',
      quv: '≥ 3200',
      warranty: '10',
    },
    {
      code: 'RODIM R4 PRO',
      slug: 'rodim-r4-pro',
      description: 'Enjoy the ultimate protection',
      thickness: '≥ 9.5 mil',
      gloss: '≥ 93',
      quv: '≥ 3200',
      warranty: '10',
    },
  ];

  for (const p of products) {
    const fileName = `${generateSecureRandomString()}.png`;

    await prisma.products.create({
      data: {
        code: p.code,
        slug: p.slug,
        description: p.description || '',
        thickness: p.thickness,
        gloss: p.gloss,
        quv: p.quv,
        warranty: p.warranty,
        image_url: `${fileName}`,
        created_by: 1,
        updated_by: 1,
        status: 1,
      },
    });
  }
}
