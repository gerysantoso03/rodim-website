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

type FailedAlertDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  message: string;
  autoCloseMs?: number;
};

const FailedAlertDialog = ({
  open,
  onOpenChange,
  message,
  autoCloseMs = 3000,
}: FailedAlertDialogProps) => {
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
          <DialogTitle className="text-red-600 text-lg">Failed</DialogTitle>
        </DialogHeader>
        <p className="text-sm text-gray-700">{message}</p>
        <DialogFooter className="justify-center">
          <Button
            onClick={() => onOpenChange(false)}
            className="bg-red-600 text-white hover:bg-red-700"
          >
            OK
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FailedAlertDialog;
