'use server';

import {
  getAllProducts,
  getProductDetailById,
  deleteProduct,
  getAllProductDetailWithCategoriesById,
  getAllProductDetailWithCategoriesBySlug,
  getAllSpecCategories,
  createProduct,
  getProductDetailByCode,
  editProduct,
  getProductDetailBySlug,
} from '@/features/admin/services/product/service';
import fs from 'fs/promises';
import path from 'path';
import { generateSecureRandomString } from '@/shared/helpers/helpers';
import { getAuthUser } from '@/shared/utils/session/session';
import { revalidatePath } from 'next/cache';

export async function getAllSpecCategoriesAction() {
  try {
    return await getAllSpecCategories();
  } catch (error) {
    return { success: false, message: 'Failed to get spec categories', error };
  }
}

export async function getAllProductsAction() {
  try {
    return await getAllProducts();
  } catch (error) {
    return { success: false, message: 'Failed to get products', error };
  }
}

export async function getAllProductDetailWithCategoriesByIdAction(id: number) {
  try {
    return await getAllProductDetailWithCategoriesById(id);
  } catch (error) {
    return { success: false, message: 'Failed to get product detail', error };
  }
}

export async function getAllProductDetailWithCategoriesBySlugAction(
  slug: string
) {
  try {
    return await getAllProductDetailWithCategoriesBySlug(slug);
  } catch (error) {
    return { success: false, message: 'Failed to get product detail', error };
  }
}

export async function getProductDetailByIdAction(id: number) {
  try {
    return await getProductDetailById(id);
  } catch (error) {
    return { success: false, message: 'Failed to get product detail', error };
  }
}

export async function getProductDetailBySlugAction(slug: string) {
  try {
    return await getProductDetailBySlug(slug);
  } catch (error) {
    return { success: false, message: 'Failed to get product detail', error };
  }
}

export async function createProductAction(formData: FormData) {
  try {
    const code = formData.get('code')?.toString() || '';
    const description = formData.get('description')?.toString() || '';
    const thickness = formData.get('thickness')?.toString() || '';
    const gloss = formData.get('gloss')?.toString() || '';
    const quv = formData.get('quv')?.toString() || '';
    const warranty = formData.get('warranty')?.toString() || '';
    const file = formData.get('image') as File;

    if (!file || file.size === 0) {
      return { success: false, message: 'Image is required' };
    }

    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      return { success: false, message: 'Invalid file type' };
    }

    const extension = path.extname(file.name);
    const fileName = `${generateSecureRandomString()}${extension}`;
    const buffer = Buffer.from(await file.arrayBuffer());

    const user = await getAuthUser();
    const created_by = user.id;

    // console.log(formData);
    const specs: Record<string, { value_1?: string; value_2?: string }> = {};
    for (const [key, value] of formData.entries()) {
      if (key.startsWith('specs.') && typeof value === 'string') {
        const [, code, field] = key.split('.');
        if (!specs[code]) specs[code] = {};
        specs[code][field === 'value_1' ? 'value_1' : 'value_2'] = value;
      }
    }

    const product = await createProduct({
      code,
      description,
      thickness,
      gloss,
      quv,
      warranty,
      image_url: fileName,
      created_by,
      specs,
    });

    const uploadDir = path.join(
      process.cwd(),
      'public',
      'uploads',
      'product_images',
      `${product.id}`
    );
    const filePath = path.join(uploadDir, fileName);

    await fs.mkdir(uploadDir, { recursive: true });
    await fs.writeFile(filePath, buffer);

    revalidatePath('/layout');
    
    return {
      success: true,
      data: {
        id: product.id,
        image_url: `/uploads/product_images/${product.id}/${fileName}`,
      },
    };
  } catch (error) {
    console.error('Failed to create product:', error);
    return {
      success: false,
      message: 'Failed to create product',
      error,
    };
  }
}

export async function editProductAction(formData: FormData) {
  try {
    const code = formData.get('code')?.toString() || '';
    const description = formData.get('description')?.toString() || '';
    const thickness = formData.get('thickness')?.toString() || '';
    const gloss = formData.get('gloss')?.toString() || '';
    const quv = formData.get('quv')?.toString() || '';
    const warranty = formData.get('warranty')?.toString() || '';
    const file = formData.get('image') as File | null;

    const user = await getAuthUser();
    const updated_by = user.id;

    // Ambil data produk berdasarkan kode unik (atau bisa pakai ID jika ada)
    const existingProduct = await getProductDetailByCode(code);
    if (!existingProduct) {
      return { success: false, message: 'Product not found' };
    }

    let image_url = existingProduct.image_url;

    // Jika ada file baru di-upload, validasi dan simpan
    if (file && file.size > 0) {
      const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
      if (!allowedTypes.includes(file.type)) {
        return { success: false, message: 'Invalid file type' };
      }

      const extension = path.extname(file.name);
      const fileName = `${generateSecureRandomString()}${extension}`;
      const buffer = Buffer.from(await file.arrayBuffer());

      const uploadDir = path.join(
        process.cwd(),
        'public',
        'uploads',
        'product_images',
        `${existingProduct.id}`
      );
      const filePath = path.join(uploadDir, fileName);

      await fs.mkdir(uploadDir, { recursive: true });
      await fs.writeFile(filePath, buffer);

      image_url = `${fileName}`;
    }

    const specs: Record<string, { value_1?: string; value_2?: string }> = {};
    for (const [key, value] of formData.entries()) {
      if (key.startsWith('specs.') && typeof value === 'string') {
        const [, code, field] = key.split('.');
        if (!specs[code]) specs[code] = {};
        specs[code][field === 'value_1' ? 'value_1' : 'value_2'] = value;
      }
    }

    await editProduct(existingProduct.id, {
      code,
      description,
      thickness,
      gloss,
      quv,
      warranty,
      image_url: image_url ?? '',
      updated_by,
      specs,
    });

    revalidatePath('/layout');

    return {
      success: true,
      data: {
        id: existingProduct.id,
        image_url,
      },
    };
  } catch (error) {
    console.error('Failed to edit product:', error);
    return {
      success: false,
      message: 'Failed to edit product',
      error,
    };
  }
}

export async function deleteProductAction(id: number) {
  try {
    const product = await getProductDetailById(id);
    if (!product) {
      return { success: false, message: 'Product not found' };
    }

    const user = await getAuthUser();
    const updated_by = user.id;

    revalidatePath('/layout');
    
    return await deleteProduct(id, updated_by);
  } catch (error) {
    return {
      success: false,
      message: 'Failed to delete product',
      error,
    };
  }
}
