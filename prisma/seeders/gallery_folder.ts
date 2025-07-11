import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function seedGalleryFolder() {
    await prisma.gallery_folders.createMany({
        data: [
            {
                title: 'Interior Design',
                slug: 'interior-design',
                cover_image: null,
                is_visible: true,
                created_by: 1,
                updated_by: 1,
                },
                {
                title: 'Exterior Projects',
                slug: 'exterior-projects',
                cover_image: null,
                is_visible: true,
                created_by: 1,
                updated_by: 1,
            },
        ]
    });
}
