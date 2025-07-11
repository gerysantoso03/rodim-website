'use server';

import { loginSchema } from '@/entities/auth/schema';
import {
  findUserByEmail,
  validatePassword,
} from '@/features/auth/services/service';
import { redirect } from 'next/navigation';
import {
  createSessionValue,
  getSessionCookieName,
  getSessionCookieOptions,
} from '@/shared/utils/session/session';
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';

export async function loginAction(formData: FormData) {
  const parsed = loginSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!parsed.success) {
    return { success: false, message: 'Invalid input' };
  }

  const { email, password } = parsed.data;

  const user = await findUserByEmail(email);
  if (!user) {
    return { success: false, message: 'User not found' };
  }

  const isValid = await validatePassword(password, user.password);
  if (!isValid) {
    return { success: false, message: 'Invalid password' };
  }

  (await cookies()).set({
    name: getSessionCookieName(),
    value: createSessionValue(user.id, user.email),
    ...getSessionCookieOptions(),
  });

  revalidatePath('/', 'layout');

  redirect('/gallery-admin');
}

export async function logoutAction() {
  (await cookies()).delete(getSessionCookieName());

  revalidatePath('/', 'layout');
  
  redirect('/login');
}
