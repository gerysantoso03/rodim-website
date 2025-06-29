'use client';

import { useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/shared/components/shadcn/ui/dialog';
import { Button } from '@/shared/components/shadcn/ui/button';

type SuccessAlertDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  message: string;
  autoCloseMs?: number; // default timeout ms
};

const SuccessAlertDialog = ({
  open,
  onOpenChange,
  message,
  autoCloseMs = 2000,
}: SuccessAlertDialogProps) => {
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        onOpenChange(false);
      }, autoCloseMs);
      return () => clearTimeout(timer);
    }
  }, [open, autoCloseMs, onOpenChange]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[400px] text-center">
        <DialogHeader>
          <DialogTitle className="text-green-600 text-[16px]">
            Success
          </DialogTitle>
        </DialogHeader>
        <p className="text-[12px] text-gray-700">{message}</p>
        <DialogFooter className="justify-center">
          <Button
            onClick={() => onOpenChange(false)}
            className="bg-green-600 text-white hover:bg-green-700"
          >
            OK
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessAlertDialog;
