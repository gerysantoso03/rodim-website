import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function seedCategories() {
    await prisma.categories.createMany({
        data: [
            /* 1 */ { code: 'THICKNESS', description: 'Thickness', created_by: 1, updated_by: 1, status: 1 },
            /* 2 */ { code: 'GLOSS', description: 'Gloss (60°)', created_by: 1, updated_by: 1, status: 1 },
            /* 3 */ { code: 'HAZE', description: 'Haze', created_by: 1, updated_by: 1, status: 1 },
            /* 4 */ { code: 'MOE', description: 'Modulus of elasticity (MOE)', created_by: 1, updated_by: 1, status: 1 },
            /* 5 */ { code: 'ELONGATION', description: 'Elongation at break of repair layer', created_by: 1, updated_by: 1, status: 1 },
            /* 6 */ { code: 'INITIAL_ADHESIVE', description: 'Initial adhesive', created_by: 1, updated_by: 1, status: 1 },
            /* 7 */ { code: 'CONTINUOUS_ADHESION', description: 'Continuous adhesion', created_by: 1, updated_by: 1, status: 1 },
            /* 8 */ { code: 'HYDROPHOBICITY', description: 'Hydrophobicity', created_by: 1, updated_by: 1, status: 1 },
            /* 9 */ { code: 'UV_BARRIER', description: 'UV barrier ratio', created_by: 1, updated_by: 1, status: 1 },
            /* 10 */ { code: 'STAIN_RESISTANCE', description: 'Stain resistance', created_by: 1, updated_by: 1, status: 1 },
            /* 11 */ { code: 'SCRATCH_RESISTANCE', description: 'Scratch resistance', created_by: 1, updated_by: 1, status: 1 },
            /* 12 */ { code: 'SELF_HEALING', description: 'Self-healing', created_by: 1, updated_by: 1, status: 1 },
            /* 13 */ { code: 'DURABILITY', description: 'Yellowing resistance and durability', created_by: 1, updated_by: 1, status: 1 },
            /* 14 */ { code: 'CHEMICAL_RESISTANCE', description: 'Acid and alkali resistance', created_by: 1, updated_by: 1, status: 1 },
            /* 15 */ { code: 'CARBURETOR_RESISTANCE', description: 'Carburetor detergent resistance', created_by: 1, updated_by: 1, status: 1 },
            /* 16 */ { code: 'RAIN_RESISTANCE', description: 'Rain spot resistance', created_by: 1, updated_by: 1, status: 1 },
            /* 17 */ { code: 'WARRANTY', description: 'Warranty', created_by: 1, updated_by: 1, status: 1 },
        ]
    });
}
