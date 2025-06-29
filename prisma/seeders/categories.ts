import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function seedCategories() {
    await prisma.categories.createMany({
        data: [
            /* 1 */ { code: 'THICKNESS', spec_category_id: 1, description: 'Thickness', created_by: 1, updated_by: 1, status: 1 },
            /* 2 */ { code: 'GLOSS', spec_category_id: 1, description: 'Gloss (60°)', created_by: 1, updated_by: 1, status: 1 },
            /* 3 */ { code: 'HAZE', spec_category_id: 1, description: 'Haze', created_by: 1, updated_by: 1, status: 1 },
            /* 4 */ { code: 'MOE', spec_category_id: 1, description: 'Modulus of elasticity (MOE)', created_by: 1, updated_by: 1, status: 1 },
            /* 5 */ { code: 'ELONGATION', spec_category_id: 1, description: 'Elongation at break of repair layer', created_by: 1, updated_by: 1, status: 1 },
            /* 6 */ { code: 'INITIAL_ADHESIVE', spec_category_id: 2, description: 'Initial adhesive', created_by: 1, updated_by: 1, status: 1 },
            /* 7 */ { code: 'CONTINUOUS_ADHESION', spec_category_id: 2, description: 'Continuous adhesion', created_by: 1, updated_by: 1, status: 1 },
            /* 8 */ { code: 'HYDROPHOBICITY', spec_category_id: 2, description: 'Hydrophobicity', created_by: 1, updated_by: 1, status: 1 },
            /* 9 */ { code: 'UV_BARRIER', spec_category_id: 2, description: 'UV barrier ratio', created_by: 1, updated_by: 1, status: 1 },
            /* 10 */ { code: 'STAIN_RESISTANCE', spec_category_id: 2, description: 'Stain resistance', created_by: 1, updated_by: 1, status: 1 },
            /* 11 */ { code: 'SCRATCH_RESISTANCE', spec_category_id: 3, description: 'Scratch resistance', created_by: 1, updated_by: 1, status: 1 },
            /* 12 */ { code: 'SELF_HEALING', spec_category_id: 3, description: 'Self-healing', created_by: 1, updated_by: 1, status: 1 },
            /* 13 */ { code: 'YELLOW_RESISTANCE_DURABILITY', spec_category_id: 3, description: 'Yellowing resistance and durability', created_by: 1, updated_by: 1, status: 1 },
            /* 14 */ { code: 'CHEMICAL_RESISTANCE', spec_category_id: 3, description: 'Acid and alkali resistance', created_by: 1, updated_by: 1, status: 1 },
            /* 15 */ { code: 'CARBURETOR_RESISTANCE', spec_category_id: 3, description: 'Carburetor detergent resistance', created_by: 1, updated_by: 1, status: 1 },
            /* 16 */ { code: 'RAIN_SPOT_RESISTANCE', spec_category_id: 3, description: 'Rain spot resistance', created_by: 1, updated_by: 1, status: 1 },
            /* 17 */ { code: 'WARRANTY', spec_category_id: 3, description: 'Warranty', created_by: 1, updated_by: 1, status: 1 },
        ]
    });
}
