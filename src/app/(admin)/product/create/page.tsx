import ProductForm from '@/features/admin/ui/product/ProductForm';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function CreateProductPage() {
  return (
    <div className="flex flex-col gap-6 py-5">
      <div className="border-b-2 border-gray-200">
        <h1 className="text-[#09090B] font-semibold text-[24px]/[32px]">
          Create Product
        </h1>
        <p className="text-[14px]/[20px] text-[#71717A] mt-1 mb-4">
          Add a new product by entering its field.
        </p>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <Link
          href="/product"
          className="rounded-lg border border-gray-200 p-1.5 hover:bg-gray-100 inline-flex"
        >
          <ChevronLeft className="w-8 h-8 text-black" />
        </Link>
        <span className="text-gray-400">Product</span>
        <span className="text-black">/</span>
        <span className="text-black font-semibold">Create Product</span>
      </div>
      <ProductForm mode="create" />
    </div>
  );
}
