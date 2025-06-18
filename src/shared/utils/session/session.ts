const SESSION_COOKIE_NAME = 'rodim';
const COOKIE_MAX_AGE = 60 * 60; // 1 hour

export function createSessionValue(userId: number, email: string) {
  return `${userId}_${email}`;
}

export function getSessionCookieName() {
  return SESSION_COOKIE_NAME;
}

export function getSessionCookieOptions() {
  return {
    httpOnly: true,
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    maxAge: COOKIE_MAX_AGE,
  };
}
