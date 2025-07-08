import { getAllProductDetailWithCategoriesBySlugAction } from '@/features/admin/actions/product/action';
import ProductSpecificationPageUI from '@/features/marketing/product/ui/ProductSpecificationPageUI';
import { redirect } from 'next/navigation';

interface ProductSpecificationPageProps {
  params: Promise<{ slug: string }>;
}

const ProductSpecificationPage = async ({
  params,
}: ProductSpecificationPageProps) => {
  const { slug } = await params;
  const productSpecification =
    await getAllProductDetailWithCategoriesBySlugAction(slug || '');

  if (productSpecification?.hasOwnProperty('success')) {
    redirect('/');
  }

  return <ProductSpecificationPageUI data={productSpecification} />;
};

export default ProductSpecificationPage;
