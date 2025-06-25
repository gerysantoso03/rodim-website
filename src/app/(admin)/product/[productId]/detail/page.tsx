import { getAllProductDetailWithCategoriesByIdAction } from '@/features/admin/actions/product/action';
import ProductDetailHeader from '@/features/admin/ui/product/ProductDetailHeader';
import ProductDetailUI from '@/features/admin/ui/product/ProductDetail';

export default async function ProductDetailPage({
  params,
}: {
  params: { productId: string };
}) {
  const productId = parseInt(params.productId, 10);

  const result = await getAllProductDetailWithCategoriesByIdAction(productId);

  if (!result) {
    throw new Error('Product not found');
  }

  return (
    <div className="flex flex-col gap-6 py-5">
      <ProductDetailHeader productId={productId} />
      <ProductDetailUI product={result} />
    </div>
  );
}
