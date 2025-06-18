'use client';

import { Input } from '@/shared/components/shadcn/ui/input';
import { Label } from '@/shared/components/shadcn/ui/label';
import { Button } from '@/shared/components/shadcn/ui/button';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff } from 'lucide-react';
import { useState, useTransition } from 'react';
import { loginAction } from '../actions/action';

const LoginForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [error, setError] = useState('');
  const [isPending, startTransition] = useTransition();

  const validateEmail = (value: string) => {
    if (value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value);
    } else {
      return true;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    startTransition(() => {
      loginAction(formData).then((res) => {
        if (!res.success) {
          setError(res.message);
          setPassword('');
        } else {
          console.log('Logged in');
          router.push('/product');
        }
      });
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="pb-2">
        <Label
          className="pb-1 text-[#09090B] font-medium text-center text-[14px]/[20px]"
          htmlFor="email"
        >
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="enter your email..."
          required
          className={`text-[14px]/[20px] placeholder:text-[14px]/[20px] focus:text-[14px]/[20px] text-[#09090B] min-h-[40px] max-h-[40px] ${emailError ? 'border-red-500' : ''}`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => {
            if (!validateEmail(email)) {
              setEmailError('Incorrect email. Please try again.');
            } else {
              setEmailError('');
            }
          }}
        />
        {emailError && (
          <p className="mt-1 text-[14px]/[20px] text-red-500">{emailError}</p>
        )}
      </div>

      <div className="pt-2">
        <Label
          className="pb-1 text-[#09090B] font-medium text-[14px]/[20px]"
          htmlFor="password"
        >
          Password
        </Label>
        <div className="relative">
          <Input
            id="password"
            name="password"
            value={password}
            type={showPassword ? 'text' : 'password'}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="enter your password..."
            required
            className="pr-14 text-[14px]/[20px] placeholder:text-[14px]/[20px] focus:text-[14px]/[20px] text-[#09090B] min-h-[40px] max-h-[40px]"
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2.5 cursor-pointer text-[14px]/[20px] text-[#09090B] pt-1"
          >
            {showPassword ? (
              <EyeOff strokeWidth={1.5} size={20} />
            ) : (
              <Eye strokeWidth={1.5} size={20} />
            )}
          </span>
        </div>
      </div>
      {error && <p className="text-[14px]/[20px] text-red-500">{error}</p>}
      <div className="pt-8">
        <Button
          type="submit"
          disabled={isPending}
          className="w-full min-h-[40px] max-h-[40px] text-[14px]/[20px]"
        >
          Sign In
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
