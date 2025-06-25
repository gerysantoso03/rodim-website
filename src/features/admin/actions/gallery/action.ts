'use server';

import {
  getAllGalleryFolder,
  getAllGalleryImageByGalleryFolderId,
  createGalleryFolder,
  createGalleryImage,
  getGalleryFolderDetailById,
  deleteGalleryFolder,
  getGalleryImageDetailById,
  deleteGalleryImage,
  editGalleryImage,
  editGalleryFolder,
  changeGalleryFolderVisibility,
  changeGalleryImageVisibility,
} from '@/features/admin/services/gallery/service';
import fs from 'fs/promises';
import path from 'path';
import { generateSecureRandomString } from '@/shared/helpers/helpers';

export async function getAllGalleryFolderAction() {
  try {
    return await getAllGalleryFolder();
  } catch (error) {
    return { success: false, message: 'Failed to get gallery folders', error };
  }
}

export async function getAllGalleryImageAction(id: number) {
  try {
    return await getAllGalleryImageByGalleryFolderId(id);
  } catch (error) {
    return { success: false, message: 'Failed to get gallery images', error };
  }
}

export async function createGalleryFolderAction(formData: FormData) {
  try {
    const title = formData.get('title') as string;
    const is_visible = formData.get('is_visible') === 'true';
    const file = formData.get('file') as File;

    if (!file || file.size === 0) {
      return { success: false, message: 'Image file is required' };
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const fileName = generateSecureRandomString();
    const uploadDir = path.join(
      process.cwd(),
      'public',
      'uploads',
      'gallery_folder'
    );
    const filePath = path.join(uploadDir, fileName);

    try {
      await fs.mkdir(uploadDir, { recursive: true });
    } catch (err) {
      console.error('Failed to create upload directory', err);
    }

    await fs.writeFile(filePath, buffer);

    const imageUrl = `${fileName}`;

    const created_by = 1;
    const result = await createGalleryFolder({
      title,
      cover_image: imageUrl,
      is_visible,
      created_by,
    });

    return { success: true, data: result };
  } catch (error) {
    console.error('Failed to create gallery folder', error);
    return {
      success: false,
      message: 'Failed to create gallery folder',
      error,
    };
  }
}

export async function createGalleryImageAction(data: {
  gallery_folder_id: number;
  image_url: string;
  is_visible: boolean;
}) {
  try {
    const created_by = 1;
    return await createGalleryImage({
      ...data,
      created_by,
    });
  } catch (error) {
    return { success: false, message: 'Failed to create gallery image', error };
  }
}

export async function editGalleryFolderAction(formData: FormData) {
  try {
    const galleryFolder = await getGalleryFolderDetailById(id);
    if (!galleryFolder) {
      return { success: false, message: 'Gallery Folder not found' };
    }

    const updated_by = 1;
    return await editGalleryFolder(id, {
      ...data,
      updated_by,
    });
  } catch (error) {
    return { success: false, message: 'Failed to edit gallery folder', error };
  }
}

export async function editGalleryImageAction(
  id: number,
  data: {
    image_url: string;
    is_visible: boolean;
  }
) {
  try {
    const galleryImage = await getGalleryImageDetailById(id);
    if (!galleryImage) {
      return { success: false, message: 'Gallery Image not found' };
    }

    const updated_by = 1;
    return await editGalleryImage(id, {
      ...data,
      updated_by,
    });
  } catch (error) {
    return { success: false, message: 'Failed to edit gallery image', error };
  }
}

export async function deleteGalleryFolderAction(id: number) {
  try {
    const galleryFolder = await getGalleryFolderDetailById(id);
    if (!galleryFolder) {
      return { success: false, message: 'Gallery Folder not found' };
    }

    return await deleteGalleryFolder(id, 1);
  } catch (error) {
    return {
      success: false,
      message: 'Failed to delete gallery folder',
      error,
    };
  }
}

export async function deleteGalleryImageAction(id: number) {
  try {
    const galleryImage = await getGalleryImageDetailById(id);
    if (!galleryImage) {
      return { success: false, message: 'Gallery Image not found' };
    }

    return await deleteGalleryImage(id, 1);
  } catch (error) {
    return { success: false, message: 'Failed to delete gallery image', error };
  }
}

export async function toggleGalleryFolderVisibilityAction(
  id: number,
  is_visible: boolean
) {
  try {
    return await changeGalleryFolderVisibility(id, is_visible);
  } catch (error) {
    return {
      success: false,
      message: 'Failed to change visibility gallery folder',
      error,
    };
  }
}

export async function toggleGalleryImageVisibilityAction(
  id: number,
  is_visible: boolean
) {
  try {
    return await changeGalleryImageVisibility(id, is_visible);
  } catch (error) {
    return {
      success: false,
      message: 'Failed to change visibility gallery image',
      error,
    };
  }
}
