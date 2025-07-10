import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import {
  parseSessionValue,
  getSessionCookieName,
} from '@/shared/utils/session/session';

const protectedRoutes = [
  '/auth',
  '/product',
  '/gallery-admin',
  '/unauthorized',
];
const publicRoutes = ['/login'];

function isProtectedPath(pathname: string) {
  if (pathname === '/') return true;
  return protectedRoutes.some((route) => pathname.startsWith(route));
}

function redirectToLogin(request: NextRequest) {
  const response = NextResponse.redirect(new URL('/login', request.url));
  response.cookies.delete(getSessionCookieName());
  return response;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const sessionCookie = request.cookies.get(getSessionCookieName());
  const user = sessionCookie ? parseSessionValue(sessionCookie.value) : null;

  if (isProtectedPath(pathname)) {
    if (!user || !user.id || !user.email) {
      return redirectToLogin(request);
    }
  }

  if (publicRoutes.includes(pathname)) {
    if (user) {
      const response = NextResponse.redirect(new URL('/login', request.url));
      response.cookies.delete(getSessionCookieName());
      return response;
    }
  }

  const response = NextResponse.next();

  if (user) {
    response.cookies.set(getSessionCookieName(), sessionCookie?.value || '', {
      maxAge: 60 * 60,
      httpOnly: true,
      path: '/',
      secure: process.env.NODE_ENV === 'production',
    });
  }

  return response;
}

export const config = {
  matcher: [
    '/login',
    '/product/:path*',
    '/gallery-admin/:path*',
    '/unauthorized/:path*',
  ],
};
