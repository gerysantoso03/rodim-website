'use client';

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from '@/shared/components/shadcn/ui/alert-dialog';

import { Button } from '@/shared/components/shadcn/ui/button';
import { Trash2 } from 'lucide-react';

type AlertDialogProps = {
  title?: string;
  description?: string;
  itemName?: string;
  onConfirm: () => void | Promise<void>;
  triggerLabel?: React.ReactNode; // default: trash icon
};

export default function AlertDialogComponent({
  title = '?',
  description = '',
  itemName = '',
  onConfirm,
  triggerLabel = (
    <Button
      size="icon"
      variant="outline"
      className="border-red-300 text-red-500 w-14 h-14"
    >
      <Trash2 size={16} />
    </Button>
  ),
}: AlertDialogProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{triggerLabel}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-red-600 text-[16px]/[20px]">
            {title}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-[12px]/[16px]">
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="text-black text-lg">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-500 hover:bg-red-600 text-white text-lg"
            onClick={onConfirm}
          >
            {itemName ? `Delete ${itemName}` : `Delete`}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
