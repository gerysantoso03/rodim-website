import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function getAllProducts() {
  return await prisma.products.findMany({
    orderBy: { created_at: 'desc' },
    where: { status: 1 },
  });
}

export async function getAllProductCategories() {
  return await prisma.product_categories.findMany({
    orderBy: { created_at: 'desc' },
    where: { status: 1 },
  });
}

export async function getProductDetailById(id: number) {
  return await prisma.products.findFirst({
    where: { id: id, status: 1 },
  });
}

export async function getProductDetailByCode(code: string) {
  return await prisma.products.findUnique({
    where: { code: code, status: 1 },
  });
}

export async function createProduct(data: {
  code: string;
  description: string;
  thickness: string;
  gloss: string;
  quv: string;
  warranty: string;
}) {
  return await prisma.products.create({
    data,
  });
}

export async function editProduct(
  id: number,
  data: Partial<{
    name: string;
    description: string;
    thickness: string;
    gloss: string;
    quv: string;
    warranty: string;
  }>
) {
  return await prisma.products.update({
    where: { id: id, status: 1 },
    data,
  });
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
    where: { id },
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
