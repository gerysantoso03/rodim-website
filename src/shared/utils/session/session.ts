import { cookies } from 'next/headers';
const SESSION_COOKIE_NAME = 'rodim-cookies';
const COOKIE_MAX_AGE = 60 * 60; // 1 hour

export function createSessionValue(userId: number, email: string) {
  const payload = { id: userId, email };
  const json = JSON.stringify(payload);
  return Buffer.from(json).toString('base64');
}

export function getSessionCookieName() {
  return SESSION_COOKIE_NAME;
}

export function getSessionCookieOptions() {
  return {
    httpOnly: true,
    samesSite: 'lex',
    path: '/',
    maxAge: COOKIE_MAX_AGE,
    // secure: !(process.env.NODE_ENV === 'development' || !process.env.NODE_ENV),
    secure: false,
  };
}

export function parseSessionValue(value: string) {
  try {
    const decoded = Buffer.from(value, 'base64').toString('utf-8');
    return JSON.parse(decoded);
  } catch {
    return null;
  }
}

export async function getAuthUser() {
  const cookieStore = cookies();
  const session = (await cookieStore).get(getSessionCookieName());

  if (!session) {
    return null;
  }

  const user = parseSessionValue(session.value);
  if (!user || !user.id || !user.email) {
    return null;
  }

  return user;
}
