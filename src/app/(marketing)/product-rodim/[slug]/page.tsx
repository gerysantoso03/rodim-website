import {
  getAllProductDetailWithCategoriesBySlugAction,
  getProductDetailBySlugAction,
} from '@/features/admin/actions/product/action';
import ProductPageUI from '@/features/marketing/product/ui/ProductPageUI';
import { redirect } from 'next/navigation';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const { slug } = await params;
  const introductionProductData =
    await getAllProductDetailWithCategoriesBySlugAction(slug || '');

  if (introductionProductData?.hasOwnProperty('success')) {
    redirect('/');
  }

  return <ProductPageUI data={introductionProductData} />;
};

export default ProductPage;
