import { getAllProductDetailWithCategoriesBySlugAction } from '@/features/admin/actions/product/action';
import ProductPageUI from '@/features/marketing/product/ui/ProductPageUI';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
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

  // Get server translations
  const messages = await getMessages(); // comes from next-intl/server

  return (
    <NextIntlClientProvider messages={messages}>
      <ProductPageUI data={introductionProductData} />
    </NextIntlClientProvider>
  );
};

export default ProductPage;
