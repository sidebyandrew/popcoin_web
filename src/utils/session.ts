import { IronSessionOptions, sealData, unsealData } from 'iron-session/edge';
import { cookies } from 'next/headers';

/**
 * Iron session data format to be used
 */
export type SessionUser = {
  ipAddress: string;
  port: string;
  password: string;
};

// This is where we specify the typings of req.session.*
declare module 'iron-session' {
  interface IronSessionData {
    sessionUser: SessionUser;
  }
}

const ironSessionTTL = 30 * 60;

const SESSION_COOKIE_NAME = process.env.SESSION_COOKIE_NAME as string;
const SESSION_COOKIE_PASSWORD = process.env.SESSION_COOKIE_PASSWORD as string;
/**
 * Iron session configs
 */
export const sessionOptions: IronSessionOptions = {
  cookieName: SESSION_COOKIE_NAME,
  password: SESSION_COOKIE_PASSWORD,
  ttl: ironSessionTTL,
  // https://github.com/vvo/iron-session#ironoptions
  cookieOptions: {
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    secure: process.env.NODE_ENV === 'production',
    // https://github.com/vvo/iron-session#session-cookies
    // maxAge: undefined // session expires when closing window/tab.
  },
};

export async function getSession(): Promise<SessionUser | null> {
  const encryptedSession = cookies().get(SESSION_COOKIE_NAME)?.value;

  const session = encryptedSession
    ? ((await unsealData(encryptedSession, {
        password: SESSION_COOKIE_PASSWORD,
      })) as string)
    : null;

  return session ? (JSON.parse(session) as SessionUser) : null;
}

export async function setSession(user: SessionUser): Promise<void> {
  const encryptedSession = await sealData(JSON.stringify(user), {
    password: SESSION_COOKIE_PASSWORD,
  });

  cookies().set(SESSION_COOKIE_NAME, encryptedSession, {
    sameSite: 'strict',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  });
}
