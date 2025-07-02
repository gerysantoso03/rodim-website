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
  getAllGalleryFolderWithImagesById,
} from '@/features/admin/services/gallery/service';
import fs from 'fs/promises';
import path from 'path';
import { generateSecureRandomString } from '@/shared/helpers/helpers';
import { getAuthUser } from '@/shared/utils/session/session';

export async function getAllGalleryFolderAction() {
  try {
    return await getAllGalleryFolder();
  } catch (error) {
    return { success: false, message: 'Failed to get gallery folders', error };
  }
}

export async function getGalleryFolderWithImagesAction(id: number) {
  try {
    const folders = await getAllGalleryFolderWithImagesById(id);
    if (folders.length === 0) {
      return { success: false, message: 'Folder not found' };
    }

    const folder = folders[0];

    return {
      success: true,
      data: {
        id: folder.id,
        title: folder.title,
        is_visible: folder.is_visible,
        images: folder.gallery_images.map((img) => ({
          id: img.id,
          name: img.image_url.split('/').pop(),
          url: img.image_url,
          is_visible: img.is_visible,
        })),
      },
    };
  } catch (error) {
    return {
      success: false,
      message: 'Failed to get folder with images',
      error,
    };
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

    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      return { success: false, message: 'Invalid file type' };
    }

    const extension = path.extname(file.name);
    const fileName = `${generateSecureRandomString()}${extension}`;
    const imageUrl = fileName;

    const user = await getAuthUser();
    const created_by = user.id;
    const result = await createGalleryFolder({
      title,
      cover_image: imageUrl,
      is_visible,
      created_by,
    });

    const uploadDir = path.join(
      process.cwd(),
      'public',
      'uploads',
      'gallery_folder',
      `${result.id}`
    );

    const filePath = path.join(uploadDir, fileName);

    await fs.mkdir(uploadDir, { recursive: true });
    const buffer = Buffer.from(await file.arrayBuffer());
    await fs.writeFile(filePath, buffer);

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

export async function createGalleryImageAction(formData: FormData) {
  try {
    const file = formData.get('file') as File;
    const is_visible = formData.get('is_visible') === 'true';
    const gallery_folder_id = Number(formData.get('gallery_id'));
    // console.log(is_visible);

    if (!file || file.size === 0 || !gallery_folder_id) {
      return {
        success: false,
        message: 'Image file and gallery ID are required',
      };
    }

    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      return { success: false, message: 'Invalid file type' };
    }

    const extension = path.extname(file.name);
    const fileName = `${generateSecureRandomString()}${extension}`;

    const user = await getAuthUser();
    const created_by = user.id;

    const result = await createGalleryImage({
      gallery_folder_id,
      image_url: fileName,
      is_visible,
      created_by,
    });

    const uploadDir = path.join(
      process.cwd(),
      'public',
      'uploads',
      'gallery_images',
      `${result.id}`
    );
    const filePath = path.join(uploadDir, fileName);
    const imageUrl = `${fileName}`;

    await fs.mkdir(uploadDir, { recursive: true });
    const buffer = Buffer.from(await file.arrayBuffer());
    await fs.writeFile(filePath, buffer);

    return { success: true, data: { id: result.id, image_url: imageUrl } };
  } catch (error) {
    console.error('Failed to create gallery image', error);
    return {
      success: false,
      message: 'Failed to create gallery image',
      error,
    };
  }
}

export async function editGalleryFolderAction(formData: FormData) {
  try {
    const id = parseInt(formData.get('id') as string, 10);
    const title = formData.get('title') as string;
    const is_visible = formData.get('is_visible') === 'true';
    // const file = formData.get('file') as File | null;

    const existingFolder = await getGalleryFolderDetailById(id);
    if (!existingFolder) {
      return { success: false, message: 'Gallery Folder not found' };
    }

    const user = await getAuthUser();
    const updated_by = user.id;
    // let newFileName: string | undefined = undefined;

    // if (file && file.size > 0) {
    //   const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
    //   if (!allowedTypes.includes(file.type)) {
    //     return { success: false, message: 'Invalid file type' };
    //   }

    //   const extension = path.extname(file.name);
    //   newFileName = `${generateSecureRandomString()}${extension}`;

    //   const bytes = await file.arrayBuffer();
    //   const buffer = Buffer.from(bytes);

    //   const uploadDir = path.join(
    //     process.cwd(),
    //     'public',
    //     'uploads',
    //     'gallery_folder',
    //     `${id}`
    //   );
    //   const newFilePath = path.join(uploadDir, newFileName);

    //   try {
    //     await fs.mkdir(uploadDir, { recursive: true });
    //     await fs.writeFile(newFilePath, buffer);

    //     // Hapus file lama jika cover_image lama berbeda dan ada
    //     if (
    //       existingFolder.cover_image &&
    //       existingFolder.cover_image !== newFileName
    //     ) {
    //       const oldFilePath = path.join(uploadDir, existingFolder.cover_image);
    //       await fs
    //         .unlink(oldFilePath)
    //         .catch((err) => console.warn('Failed to delete old image:', err));
    //     }
    //   } catch (err) {
    //     console.error('Failed to upload file:', err);
    //     return {
    //       success: false,
    //       message: 'Failed to upload image file',
    //       error: err,
    //     };
    //   }
    // }

    const updatePayload: any = {
      id,
      title,
      is_visible,
      updated_by,
    };

    // if (newFileName) {
    //   updatePayload.cover_image = newFileName;
    // }

    const result = await editGalleryFolder(updatePayload);

    return { success: true, data: result };
  } catch (error) {
    console.error('Failed to edit gallery folder', error);
    return {
      success: false,
      message: 'Failed to edit gallery folder',
      error,
    };
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

    const user = await getAuthUser();
    const updated_by = user.id;
    return await deleteGalleryFolder(id, updated_by);
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

    const user = await getAuthUser();
    const updated_by = user.id;
    const result = await deleteGalleryImage(id, updated_by);

    return {
      success: true,
      message: `Success to delete galleryy image`,
      data: result,
    };
  } catch (error) {
    return { success: false, message: 'Failed to delete gallery image', error };
  }
}

export async function toggleGalleryFolderVisibilityAction(
  id: number,
  is_visible: boolean
) {
  try {
    const user = await getAuthUser();
    const updated_by = user.id;
    return await changeGalleryFolderVisibility(id, is_visible, updated_by);
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
    const user = await getAuthUser();
    const updated_by = user.id;
    const result = await changeGalleryImageVisibility(
      id,
      !is_visible,
      updated_by
    );

    return {
      success: true,
      message: `Gallery image visibility successfully ${is_visible ? 'enabled' : 'disabled'}`,
      data: result,
    };
  } catch (error) {
    return {
      success: false,
      message: 'Failed to change visibility gallery image',
      error,
    };
  }
}
