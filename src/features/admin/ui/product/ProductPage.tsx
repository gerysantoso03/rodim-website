'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/components/shadcn/ui/table';
import { Button } from '@/shared/components/shadcn/ui/button';
import AlertDialogComponent from '@/shared/components/admin/AlertDialogComponent';
import { SquarePen } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { deleteProductAction } from '@/features/admin/actions/product/action';

type Product = {
  id: string;
  code: string;
  description?: string;
  thickness?: string;
  gloss?: string;
  quv?: string;
  warranty?: string;
};

const ProductPage = ({ products }: { products: Product[] }) => {
  const router = useRouter();
  const isEmpty = products.length === 0;

  return (
    <div className="w-full mt-6">
      {isEmpty ? (
        <div className="flex flex-col items-center justify-center h-[400px] pt-70">
          <p className="text-black text-[14px]/[20px]">
            No data available in the product yet.
          </p>
          <Button
            onClick={() => router.push('/product/create')}
            className="flex items-center gap-2 bg-black text-white px-4 py-2 w-[151px] h-[40px] rounded-md text-[14px]/[20px] hover:bg-gray-900"
          >
            <span className="text-lg">＋</span> New Product
          </Button>
        </div>
      ) : (
        <div className="bg-white rounded-xl overflow-auto border-2 border-gray-200 px-8 py-8">
          <Table>
            <TableHeader>
              <TableRow className="border-b-2 border-gray-200">
                <TableHead className="px-8 pt-10 pb-4 text-[14px]/[20px] text-[#71717A]">
                  Product
                </TableHead>
                <TableHead className="px-8 pt-10 pb-4 text-[14px]/[20px] text-[#71717A]">
                  Description
                </TableHead>
                <TableHead className="px-8 pt-10 pb-4 text-[14px]/[20px] text-[#71717A]">
                  Thickness
                </TableHead>
                <TableHead className="px-8 pt-10 pb-4 text-[14px]/[20px] text-[#71717A]">
                  Gloss
                </TableHead>
                <TableHead className="px-8 pt-10 pb-4 text-[14px]/[20px] text-[#71717A]">
                  QUV
                </TableHead>
                <TableHead className="px-8 pt-10 pb-4 text-[14px]/[20px] text-[#71717A]">
                  Warranty
                </TableHead>
                <TableHead className="text-center px-8 pt-10 pb-4 text-[14px]/[20px] text-[#71717A]">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="border-b-2 border-gray-200">
              {products.map((product, index) => (
                <TableRow
                  className="border-b-2 border-gray-200"
                  onDoubleClick={() =>
                    router.push(`/product/${product.id}/detail`)
                  }
                  key={index}
                >
                  <TableCell className="px-8 py-8 text-[14px]/[20px] text-[#09090B]">
                    {product.code}
                  </TableCell>
                  <TableCell className="px-8 py-8 text-[14px]/[20px] text-[#09090B]">
                    {product.description || '-'}
                  </TableCell>
                  <TableCell className="px-8 py-8 text-[14px]/[20px] text-[#09090B]">
                    {product.thickness || '-'}
                  </TableCell>
                  <TableCell className="px-8 py-8 text-[14px]/[20px] text-[#09090B]">
                    {product.gloss || '-'}
                  </TableCell>
                  <TableCell className="px-8 py-8 text-[14px]/[20px] text-[#09090B]">
                    {product.quv || '-'}
                  </TableCell>
                  <TableCell className="px-8 py-8 text-[14px]/[20px] text-[#09090B]">
                    {product.warranty || '-'}
                  </TableCell>
                  <TableCell
                    onClick={(e) => e.stopPropagation()}
                    className="px-8 py-8 text-center space-x-2"
                  >
                    <AlertDialogComponent
                      type="warning"
                      title="Delete Product?"
                      description="Are you sure you want to delete product? Deleted product cannot be restored."
                      itemName="Delete"
                      onConfirm={async () => {
                        await deleteProductAction(Number(product.id));
                        router.refresh();
                      }}
                    />
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => router.push(`/product/${product.id}/edit`)}
                      className="border-gray-200 w-14 h-14 text-black scale-x-[-1]"
                    >
                      <SquarePen size={16} />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
