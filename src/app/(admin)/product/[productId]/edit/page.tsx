import ProductForm from '@/features/admin/ui/product/ProductForm';
import { getProductDetailByIdAction } from '@/features/admin/actions/product/action';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { getAllSpecCategoriesAction } from '@/features/admin/actions/product/action';

function mapProductToFormValues(product: any) {
  return {
    id: product.id,
    code: product.code,
    description: product.description,
    thickness: product.thickness,
    gloss: product.gloss,
    quv: product.quv,
    warranty: product.warranty,
    image_url: product.image_url,
    specs: Object.fromEntries(
      (product.product_categories ?? [])
        .filter((cat: any) => !!cat.categories?.code)
        .map((cat: any) => [
          cat.categories.code,
          {
            value_1: cat.value_1 || '',
            value_2: cat.value_2 || '',
          },
        ])
    ),
  };
}

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;

  if (!productId) {
    return <div className="text-red-500">Product ID not provided</div>;
  }

  const numericProductId = Number(productId);

  const product = await getProductDetailByIdAction(numericProductId); // console.log(product);

  if (!product) {
    return <div>Product not found</div>;
  }

  const specSectionsData = await getAllSpecCategoriesAction();
  const specSections = specSectionsData ?? []; // console.log(specSections);

  const defaultValues = mapProductToFormValues(product); // console.log(defaultValues);

  return (
    <div className="flex flex-col gap-6 py-5">
      <div className="border-b-2 border-gray-200">
        <h1 className="text-[#09090B] font-semibold text-[24px]/[32px]">
          Edit Product
        </h1>
        <p className="text-[14px]/[20px] text-[#71717A] mt-1 mb-4">
          Update existing product details
        </p>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <Link
          href="/product"
          className="rounded-lg border border-gray-200 p-1.5 hover:bg-gray-100 inline-flex"
        >
          <ChevronLeft className="w-8 h-8 text-black" />
        </Link>
        <span className="text-gray-400">Product</span>
        <span className="text-black">/</span>
        <span className="text-black font-semibold">Edit Product</span>
      </div>
      <ProductForm
        mode="edit"
        defaultValues={defaultValues}
        specSections={specSections}
      />
    </div>
  );
}
