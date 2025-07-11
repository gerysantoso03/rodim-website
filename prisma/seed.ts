import { PrismaClient } from '@/generated/prisma'
import { seedUsers } from './seeders/users'
import { seedCategories } from './seeders/categories'
import { seedSpecCategories } from './seeders/spec_categories'
import { seedProduct } from './seeders/product'
import { seedProductCategories } from './seeders/product_categories'
import { seedGalleryFolder } from './seeders/gallery_folder'

const prisma = new PrismaClient();

async function main() {
    console.log('Running...');
    await seedUsers();
    await seedSpecCategories();
    await seedCategories();
    await seedProduct();
    await seedProductCategories();
    await seedGalleryFolder();
    console.log('✅ All data seeded');
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
