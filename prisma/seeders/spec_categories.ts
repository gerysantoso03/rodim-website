import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function seedSpecCategories() {
    await prisma.spec_categories.createMany({
        data: [
            /* 1 */ { code: 'PYHSICAL_PROPERTIES', description: 'Physical Properties', order: 1, created_by: 1, updated_by: 1, status: 1 },
            /* 2 */ { code: 'ADHESTION_PROTECTION', description: 'Adhesion & Protection', order: 2, created_by: 1, updated_by: 1, status: 1 },
            /* 3 */ { code: 'DURABILITY_RESISTANCE', description: 'Durability & Resistance', order: 3, created_by: 1, updated_by: 1, status: 1 },
        ]
    });
}
