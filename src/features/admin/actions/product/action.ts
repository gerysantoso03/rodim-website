'use server';

import {
  getAllProducts,
  getProductDetailById,
  deleteProduct,
  getAllProductDetailWithCategoriesById,
} from '@/features/admin/services/product/service';

export async function getAllCategoriesAction() {}

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

export async function getProductDetailByIdAction(id: number) {
  try {
    return await getProductDetailById(id);
  } catch (error) {
    return { success: false, message: 'Failed to get product detail', error };
  }
}

export async function createProductAction() {}

export async function editProductAction() {}

export async function deleteProductAction(id: number) {
  try {
    const product = await getProductDetailById(id);
    if (!product) {
      return { success: false, message: 'Product not found' };
    }

    return await deleteProduct(id, 1);
  } catch (error) {
    return {
      success: false,
      message: 'Failed to delete product',
      error,
    };
  }
}
