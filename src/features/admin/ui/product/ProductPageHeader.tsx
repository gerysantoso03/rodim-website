'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/shared/components/shadcn/ui/button';

const ProductPageHeader = () => {
  const router = useRouter();

  return (
    <div className="w-full h-[80px] border-b-2 border-gray-200 flex items-center justify-between">
      <div>
        <h1 className="text-[#09090B] font-semibold text-[24px]/[32px]">
          Product
        </h1>
        <p className="text-[14px]/[20px] text-[#71717A] mt-1">
          Create and manage your product collections
        </p>
      </div>
      <Button
        onClick={() => router.push('/product/create')}
        className="flex items-center gap-2 bg-black text-white px-4 py-2 w-[151px] h-[40px] rounded-md text-[14px]/[20px] hover:bg-gray-900"
      >
        <span>＋</span> New Product
      </Button>
    </div>
  );
};

export default ProductPageHeader;
