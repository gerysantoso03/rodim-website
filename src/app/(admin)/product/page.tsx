import { getAllProductsAction } from '@/features/admin/actions/product/action';
import ProductPageHeader from '@/features/admin/ui/product/ProductPageHeader';
import ProductPageUI from '@/features/admin/ui/product/ProductPage';

const ProductPage = async () => {
  const result = await getAllProductsAction();

  if (!Array.isArray(result)) {
    throw new Error(result.message || 'Failed to get products');
  }

  const products = result.map((g) => ({
    id: g.id,
    code: g.code,
    description: g.description,
    thickness: g.thickness,
    gloss: g.gloss,
    quv: g.quv,
    warranty: g.warranty,
  }));

  return (
    <>
      <ProductPageHeader />
      <ProductPageUI products={products} />
    </>
  );
};

export default ProductPage;
