import { getAllProductsAction } from '@/features/admin/actions/product/action';
import type { MetadataRoute } from 'next';

export const revalidate = 3600;
type ProductProps = {
  id: number;
  code: string;
  slug: string | null;
  warranty?: string | null;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const data = (await getAllProductsAction()) as ProductProps[];

  const products = data.map((item) => ({
    url: `https://basfrodim.id/product-rodim/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: 'https://basfrodim.id/',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://basfrodim.id/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://basfrodim.id/gallery',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://basfrodim.id/warranty',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://basfrodim.id/faq',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://basfrodim.id/care-instruction',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...products,
  ];
}
