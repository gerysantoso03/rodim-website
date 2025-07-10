import ProductFeelDifferencePageUI from '@/features/marketing/product/ui/ProductFeelDifferencePageUI';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

interface ProductFeelDifferenceProps {
  params: Promise<{ slug: string }>;
}

const ProductFeelDifferentPage = async ({
  params,
}: ProductFeelDifferenceProps) => {
  const {} = await params;

  // Get server translations
  const messages = await getMessages(); // comes from next-intl/server

  return (
    <NextIntlClientProvider messages={messages}>
      <ProductFeelDifferencePageUI />
    </NextIntlClientProvider>
  );
};

export default ProductFeelDifferentPage;
