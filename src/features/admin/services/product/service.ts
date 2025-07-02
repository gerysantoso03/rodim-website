import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

type SpecInput = {
  value_1?: string;
  value_2?: string;
};

type CreateProductInput = {
  code: string;
  description: string;
  thickness: string;
  gloss: string;
  quv: string;
  warranty: string;
  image_url: string;
  created_by: number;
  specs?: {
    [category_code: string]: SpecInput;
  };
};

type EditProductInput = {
  code: string;
  description: string;
  thickness: string;
  gloss: string;
  quv: string;
  warranty: string;
  image_url: string;
  updated_by: number;
  specs?: {
    [category_code: string]: SpecInput;
  };
};

export const getAllSpecCategories = async () => {
  const specCategories = await prisma.spec_categories.findMany({
    where: { status: 1 },
    orderBy: { order: 'asc' },
    include: {
      categories: {
        where: { status: 1 },
        orderBy: { id: 'asc' },
        select: {
          code: true,
          description: true,
        },
      },
    },
  });

  return specCategories.map((cat) => ({
    title: cat.description,
    items: cat.categories.map((field) => ({
      code: field.code, // e.g. 'WARRANTY'
      label: field.description, // e.g. 'Warranty'
    })),
  }));
};

export async function getAllProducts() {
  return await prisma.products.findMany({
    orderBy: { created_at: 'desc' },
    where: { status: 1 },
  });
}

export async function getProductDetailById(id: number) {
  return await prisma.products.findFirst({
    where: { id: id, status: 1 },
    include: {
      product_categories: {
        where: { status: 1 },
        include: {
          categories: {
            select: {
              code: true,
              description: true,
            },
          },
        },
      },
    },
  });
}

export async function getProductDetailByCode(code: string) {
  return await prisma.products.findUnique({
    where: { code: code, status: 1 },
  });
}

export async function createProduct(data: CreateProductInput) {
  const {
    code,
    description,
    thickness,
    gloss,
    quv,
    warranty,
    image_url,
    created_by,
    specs,
  } = data;

  // Step 1: Simpan ke tabel `products`
  const product = await prisma.products.create({
    data: {
      code,
      description,
      thickness,
      gloss,
      quv,
      warranty,
      image_url,
      created_by,
    },
  });

  // Step 2: Simpan specs ke tabel `product_categories`
  if (specs && Object.keys(specs).length > 0) {
    for (const [
      category_code,
      { value_1 = '', value_2 = '' },
    ] of Object.entries(specs)) {
      // console.log(category_code);
      const category = await prisma.categories.findFirst({
        where: { status: 1, code: category_code },
      });

      if (!category) continue;

      await prisma.product_categories.create({
        data: {
          product_id: product.id,
          category_id: category.id,
          value_1,
          value_2,
        },
      });
    }
  }

  return product;
}

export async function editProduct(id: number, data: EditProductInput) {
  const {
    code,
    description,
    thickness,
    gloss,
    quv,
    warranty,
    image_url,
    updated_by,
    specs,
  } = data;

  // Step 1: Update data utama di tabel `products`
  const updatedProduct = await prisma.products.update({
    where: { id: id, status: 1 },
    data: {
      code,
      description,
      thickness,
      gloss,
      quv,
      warranty,
      ...(image_url ? { image_url } : {}), // hanya masukkan jika ada
      updated_by,
    },
  });

  // Step 2: Hapus semua specs lama di `product_categories` lalu insert ulang
  await prisma.product_categories.deleteMany({
    where: { product_id: id, status: 1 },
  });

  if (specs && Object.keys(specs).length > 0) {
    for (const [
      category_code,
      { value_1 = '', value_2 = '' },
    ] of Object.entries(specs)) {
      const category = await prisma.categories.findFirst({
        where: { status: 1, code: category_code },
      });

      if (!category) continue;

      await prisma.product_categories.create({
        data: {
          product_id: id,
          category_id: category.id,
          value_1,
          value_2,
        },
      });
    }
  }

  return updatedProduct;
}

export async function deleteProduct(id: number, userId: number) {
  return await prisma.products.update({
    where: { id: id, status: 1 },
    data: {
      status: 0,
      updated_by: userId,
      updated_at: new Date(),
    },
  });
}

export async function getAllProductDetailWithCategoriesById(id: number) {
  const product = await prisma.products.findUnique({
    where: { id: id, status: 1 },
    include: {
      product_categories: {
        where: { status: 1 },
        include: {
          categories: true,
        },
      },
    },
  });

  if (!product) {
    return null;
  }

  return {
    id: product.id,
    code: product.code,
    description: product.description,
    thickness: product.thickness,
    gloss: product.gloss,
    quv: product.quv,
    warranty: product.warranty,
    image_url: product.image_url,
    created_at: product.created_at,
    updated_at: product.updated_at,
    status: product.status,
    product_categories: product.product_categories.map((pc) => ({
      categories_code: pc.categories.code,
      categories_description: pc.categories.description,
      value_1: pc.value_1,
      value_2: pc.value_2,
    })),
  };
}
