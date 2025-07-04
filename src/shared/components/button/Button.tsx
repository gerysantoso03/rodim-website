import React from 'react';
import { ButtonHTMLAttributes, forwardRef } from 'react';

import { cn } from '@/shared/libs/shadcn/utils';
import { ArrowRight } from 'lucide-react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  withIcon?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, disabled, withIcon = true, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'w-fit bg-primary-blue flex justify-center items-center gap-4 rounded-full py-[12px] px-[20px] font-bold text-[18px] leading-[20px] tracking-[-0.37px]  duration-200 transition-all cursor-pointer hover:opacity-80',
          className
        )}
        disabled={disabled}
        type="button"
        {...props}
      >
        {children}
        {withIcon && <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6" />}
      </button>
    );
  }
);

export default Button;
