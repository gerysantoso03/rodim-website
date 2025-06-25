import { PrismaClient } from '@/generated/prisma'
import { seedUsers } from './seeders/users'
import { seedCategories } from './seeders/categories'
import { seedProduct } from './seeders/product'

const prisma = new PrismaClient();

async function main() {
    console.log('Running...');
    await seedUsers();
    await seedCategories();
    await seedProduct();
    console.log('✅ All data seeded');
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
