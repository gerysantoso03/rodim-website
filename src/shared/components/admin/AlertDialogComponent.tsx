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
  triggerLabel?: React.ReactNode;
  type?: 'warning' | ''; // NEW
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
  type = '',
}: AlertDialogProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{triggerLabel}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle
            className={`text-[16px]/[20px] ${
              type === 'warning' ? 'text-red-600' : 'text-gray-900'
            }`}
          >
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
            className={`text-white text-lg ${
              type === 'warning'
                ? 'bg-red-500 hover:bg-red-600'
                : 'bg-black hover:bg-gray-900'
            }`}
            onClick={onConfirm}
          >
            {itemName ? `${itemName}` : `Confirm`}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
