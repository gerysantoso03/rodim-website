'use client';

import { Toast } from '@/shared/components/toast';
import toast from 'react-hot-toast';

export function notify(message: string) {
  toast.custom((t) => (
    <Toast
      message={message}
      onCloseToast={() => toast.dismiss(t.id)}
      visible={t.visible}
    />
  ));
}
