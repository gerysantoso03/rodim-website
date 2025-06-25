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
  categories_code: string;
  categories_description: string;
  value_1?: string;
  value_2?: string;
};

type ProductDetailUIProps = {
  product: {
    code: string;
    description?: string;
    thickness?: string;
    gloss?: string;
    quv?: string;
    warranty?: string;
    image_url?: string;
    product_categories: ProductCategory[];
  };
};

const ProductDetailUI = ({ product }: ProductDetailUIProps) => {
  const [imgSrc, setImgSrc] = useState(() => {
    if (!product.image_url) {
      return '/image/placeholder-image.png';
    }

    return `/uploads/gallery_folder/${product.image_url}`;
  });

  return (
    <div className="p-6 bg-white rounded-xl space-y-6">
      <div className="flex justify-between">
        <div className="flex gap-6">
          <Image
            src={
              imgSrc.startsWith('http')
                ? imgSrc
                : imgSrc.startsWith('/')
                  ? imgSrc
                  : `/${imgSrc}`
            }
            alt={product.code}
            width={380}
            height={280}
            className="object-cover rounded-2xl"
            onError={() => setImgSrc('/image/placeholder-image.png')}
          />
          <div className="flex-col justify-center gap-3">
            <h2 className="text-black text-[30px] font-bold">{product.code}</h2>
            <p className="text-muted-foreground">
              {product.description || '-'}
            </p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="border border-[#E4E4E7] rounded-md w-[285px] h-[90px] flex flex-col px-6 justify-center">
                <p className="text-base text-gray-500">Thickness</p>
                <p className="font-semibold text-black">
                  {product.thickness || '-'}
                </p>
              </div>
              <div className="border border-[#E4E4E7] rounded-md w-[285px] h-[90px] flex flex-col px-6 justify-center">
                <p className="text-base text-gray-500">Gloss (60°)</p>
                <p className="font-semibold text-black">
                  {product.gloss || '-'}
                </p>
              </div>
              <div className="border border-[#E4E4E7] rounded-md w-[285px] h-[90px] flex flex-col px-6 justify-center">
                <p className="text-base text-gray-500">QUV</p>
                <p className="font-semibold text-black">{product.quv || '-'}</p>
              </div>
              <div className="border border-[#E4E4E7] rounded-md w-[285px] h-[90px] flex flex-col px-6 justify-center">
                <p className="text-base text-gray-500">Warranty</p>
                <p className="font-semibold text-black">
                  {product.warranty || '-'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="shadow border-[#E4E4E7] gap-3 px-6 py-6 rounded-2xl">
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
