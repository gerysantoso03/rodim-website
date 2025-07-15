import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function getAllGalleryFolderWithImages() {
  return await prisma.gallery_folders.findMany({
    where: { status: 1 },
    orderBy: { created_at: 'desc' },
    include: {
      gallery_images: {
        where: { status: 1 },
        orderBy: { created_at: 'desc' },
      },
    },
  });
}

export async function getAllGalleryFolderWithImagesById(
  galleryFolderId: number
) {
  return await prisma.gallery_folders.findMany({
    where: { id: galleryFolderId, status: 1 },
    orderBy: { created_at: 'desc' },
    include: {
      gallery_images: {
        where: { status: 1 },
        orderBy: { created_at: 'desc' },
      },
    },
  });
}

export async function getAllGalleryFolder() {
  return await prisma.gallery_folders.findMany({
    orderBy: { created_at: 'desc' },
    where: { status: 1 },
    include: {
      _count: {
        select: {
          gallery_images: {
            where: {
              status: 1,
            },
          },
        },
      },
    },
  });
}

export async function getAllGalleryImageByGalleryFolderId(
  galleryFolderId: number
) {
  return await prisma.gallery_images.findMany({
    orderBy: { created_at: 'desc' },
    where: { gallery_folder_id: galleryFolderId, status: 1 },
  });
}

export async function getAllGalleryImageByGalleryFolderSlug(slug: string) {
  return await prisma.gallery_images.findMany({
    orderBy: { created_at: 'desc' },
    where: {
      gallery_folder: {
        slug: slug,
        status: 1,
      },
      status: 1,
    },
    include: {
      gallery_folder: true,
    },
  });
}

export async function getGalleryFolderDetailById(id: number) {
  return await prisma.gallery_folders.findFirst({
    where: { id: id, status: 1 },
  });
}

export async function getGalleryImageDetailById(id: number) {
  return await prisma.gallery_images.findFirst({
    where: { id: id, status: 1 },
  });
}

export async function createGalleryFolder(data: {
  title: string;
  cover_image: string;
  is_visible: boolean;
  created_by: number;
}) {
  const { title, cover_image, is_visible, created_by } = data;

  const slug = title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');

  return await prisma.gallery_folders.create({
    data: {
      title,
      slug,
      cover_image,
      is_visible,
      created_by,
    },
    select: {
      id: true,
    },
  });
}

export async function createGalleryImage(data: {
  gallery_folder_id: number;
  image_url: string;
  is_visible: boolean;
  created_by: number;
}) {
  return await prisma.gallery_images.create({
    data,
    select: {
      id: true,
    },
  });
}

export async function editGalleryFolder(data: {
  id: number;
  title: string;
  is_visible: boolean;
  updated_by: number;
}) {
  const { id, title, ...rest } = data;

  const slug = title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');

  return await prisma.gallery_folders.update({
    where: { id },
    data: {
      ...rest,
      title,
      slug,
    },
    select: {
      id: true,
    },
  });
}

export async function editGalleryImage(
  id: number,
  data: Partial<{
    image_url: string;
    is_visible: boolean;
    updated_by: number;
  }>
) {
  return await prisma.gallery_images.update({
    where: { id: id, status: 1 },
    data,
  });
}

export async function deleteGalleryFolder(id: number, userId: number) {
  return await prisma.gallery_folders.update({
    where: { id: id, status: 1 },
    data: {
      status: 0,
      updated_by: userId,
      updated_at: new Date(),
    },
  });
}

export async function deleteGalleryImage(id: number, userId: number) {
  return await prisma.gallery_images.update({
    where: { id: id, status: 1 },
    data: {
      status: 0,
      updated_by: userId,
      updated_at: new Date(),
    },
  });
}

export async function changeGalleryFolderVisibility(
  id: number,
  is_visible: boolean,
  update_by: number
) {
  return await prisma.gallery_folders.update({
    where: { id: id, status: 1 },
    data: {
      is_visible: !is_visible,
      updated_by: update_by,
      updated_at: new Date(),
    },
  });
}

export async function changeGalleryImageVisibility(
  id: number,
  is_visible: boolean,
  update_by: number
) {
  return await prisma.gallery_images.update({
    where: { id: id, status: 1 },
    data: {
      is_visible: !is_visible,
      updated_by: update_by,
      updated_at: new Date(),
    },
  });
}
