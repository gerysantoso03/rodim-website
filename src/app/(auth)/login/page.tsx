import LoginForm from '@/features/auth/ui/LoginForm';
import React from 'react';

const LoginPage = () => {
  return (
    <>
      <div className="w-full max-w-3xl bg-white p-8">
        <h2 className="text-[24px]/[32px] text-[#09090B] font-semibold mb-1 text-center">
          Sign In
        </h2>
        <p className="font-medium text-[#71717A] text-center mb-6">
          Enter your email & password below to sign in
        </p>
        <LoginForm />
      </div>
    </>
  );
};

export default LoginPage;
