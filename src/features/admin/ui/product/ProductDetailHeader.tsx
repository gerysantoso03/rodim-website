'use client';

import { Button } from '@/shared/components/shadcn/ui/button';
import Link from 'next/link';
import { ChevronLeft, SquarePen, Trash2 } from 'lucide-react';
import AlertDialogComponent from '@/shared/components/admin/AlertDialogComponent';
import { deleteProductAction } from '@/features/admin/actions/product/action';
import { useRouter } from 'next/navigation';

const ProductDetailHeader = ({ productId }: { productId: number }) => {
  const router = useRouter();

  return (
    <div className="w-full px-6 pt-6 pb-4 border-b border-gray-200">
      {/* Baris bawah: Judul dan deskripsi */}
      <div className="mt-4">
        <h1 className="text-[#09090B] font-semibold text-[24px]/[32px]]">
          Product Detail
        </h1>
        <p className="text-[14px]/[20px] text-[#71717A] mt-1">
          Create and manage your product collections
        </p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link
            href="/product"
            className="rounded-lg border border-gray-200 p-1.5 hover:bg-gray-100 inline-flex"
          >
            <ChevronLeft className="w-5 h-5 text-black" />
          </Link>
          <span className="text-[14px]/[20px] text-muted-foreground">
            Product
          </span>
          <span className="text-[14px]/[20px] text-muted-foreground">/</span>
          <span className="text-[14px]/[20px] font-medium text-black">
            Product Detail
          </span>
        </div>

        <div className="flex space-x-2">
          <Link href={`/product/${productId}/edit`}>
            <Button
              variant="outline"
              className="bg-black text-white  text-[12px]/[20px] hover:bg-gray-900 h-14"
            >
              <SquarePen className="w-4 h-4 mr-2" /> Edit Product
            </Button>
          </Link>
          <AlertDialogComponent
            title="Delete Product?"
            triggerLabel={
              <Button
                variant="destructive"
                className="bg-red-500 text-white text-[12px]/[20px] hover:bg-red-600 h-14"
              >
                <Trash2 className="w-4 h-4 mr-2" /> Delete Product
              </Button>
            }
            description="Are you sure you want to delete product? Deleted product cannot be restored."
            itemName="Product"
            onConfirm={async () => {
              await deleteProductAction(Number(productId));
              router.push('/product');
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailHeader;
