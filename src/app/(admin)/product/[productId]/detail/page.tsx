import { getAllProductDetailWithCategoriesByIdAction } from '@/features/admin/actions/product/action';
import ProductDetailHeader from '@/features/admin/ui/product/ProductDetailHeader';
import ProductDetailUI from '@/features/admin/ui/product/ProductDetail';

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;

  const result = await getAllProductDetailWithCategoriesByIdAction(
    Number(productId)
  );

  if (!result) {
    throw new Error('Product not found');
  }

  return (
    <div className="flex flex-col gap-6">
      <ProductDetailHeader productId={Number(productId)} />
      <ProductDetailUI product={result} />
    </div>
  );
}
