import { PrismaClient } from '@/generated/prisma'
import { seedCategories } from './seeders/categories'

const prisma = new PrismaClient();

async function main() {
    console.log('Running...');
    await seedCategories();
    console.log('✅ All data seeded');
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
