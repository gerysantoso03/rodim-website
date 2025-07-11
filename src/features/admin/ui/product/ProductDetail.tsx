'use client';

import Image from 'next/image';
import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/components/shadcn/ui/table';

type ProductCategory = {
  categories_code?: string;
  categories_description?: string;
  value_1?: string;
  value_2?: string;
};

type ProductDetailUIProps = {
  product: {
    id: number;
    code: string;
    description?: string;
    thickness?: string;
    gloss?: string;
    quv?: string;
    warranty?: string;
    image_url?: string;
    // created_at?: string | Date;
    // updated_at?: string | Date;
    status?: number;
    product_categories: ProductCategory[];
  };
};

const ProductDetailUI = ({ product }: ProductDetailUIProps) => {
  const getImageUrl = () => {
    if (!product.image_url) return '/image/placeholder-image.png';
    if (product.image_url.startsWith('http')) return product.image_url;
    if (product.image_url.startsWith('/')) return product.image_url;
    return `/uploads/product_images/${product.id}/${product.image_url}`;
  };

  const [imgSrc, setImgSrc] = useState(getImageUrl);

  return (
    <div className="bg-white rounded-xl space-y-6">
      <div className="flex justify-between">
        <div className="flex gap-6">
          <img
            src={imgSrc}
            alt={product.code}
            width={380}
            height={280}
            className="object-cover rounded-[12px] max-w-[380px] max-h-[280px] border border-[#E4E4E7]"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/image/placeholder-image.png';
            }}
          />
          <div className="flex-col justify-center gap-3">
            <h2 className="text-black text-[30px] font-bold">{product.code}</h2>
            <p className="text-muted-foreground">
              {product.description || '-'}
            </p>
            <div className="grid grid-cols-2 gap-8 mt-4">
              <div className="border border-[#E4E4E7] rounded-md w-[285px] h-[90px] flex flex-col px-6 justify-center">
                <p className="text-xl text-gray-600">Thickness</p>
                <p className="text-3xl font-semibold text-black">
                  {product.thickness || '-'}
                </p>
              </div>
              <div className="border border-[#E4E4E7] rounded-md w-[285px] h-[90px] flex flex-col px-6 justify-center">
                <p className="text-xl text-gray-600">Gloss (60°)</p>
                <p className="text-3xl font-semibold text-black">
                  {product.gloss || '-'}
                </p>
              </div>
              <div className="border border-[#E4E4E7] rounded-md w-[285px] h-[90px] flex flex-col px-6 justify-center">
                <p className="text-xl text-gray-600">QUV</p>
                <p className="text-3xl font-semibold text-black">
                  {product.quv || '-'}
                </p>
              </div>
              <div className="border border-[#E4E4E7] rounded-md w-[285px] h-[90px] flex flex-col px-6 justify-center">
                <p className="text-xl text-gray-600">Warranty</p>
                <p className="text-3xl font-semibold text-black">
                  {product.warranty || '-'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-1 border-[#E4E4E7] gap-3 px-6 py-6 rounded-2xl">
        <h3 className="text-4xl font-semibold text-black pb-4">
          Specifications
        </h3>
        <p className="text-xl text-muted-foreground mb-4">
          Detailed technical specifications and testing methods
        </p>
        <Table>
          <TableHeader>
            <TableRow className="h-24 border-b-1 border-[#E4E4E7] hover:bg-transparent">
              <TableHead></TableHead>
              <TableHead className="text-xl text-muted-foreground mb-4">
                Performance
              </TableHead>
              <TableHead className="text-xl text-muted-foreground mb-4">
                Testing Method
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {product.product_categories.map((spec, index) => (
              <TableRow
                className="h-24 border-b-1 border-[#E4E4E7]"
                key={index}
              >
                <TableCell className="text-black text-[14px]/[20px]">
                  {spec.categories_description || '-'}
                </TableCell>
                <TableCell className="text-black text-[14px]/[20px]">
                  {spec.value_1 || '-'}
                </TableCell>
                <TableCell className="text-black text-[14px]/[20px]">
                  {spec.value_2 || '-'}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ProductDetailUI;
