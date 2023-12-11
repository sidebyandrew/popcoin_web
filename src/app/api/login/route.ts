import { conferencesList } from '@/utils/data';
import { getSession, SessionUser, setSession } from '@/utils/session';

export async function GET(request: Request) {
  const session2 = getSession();
  session2.then((o) => console.info(o));

  const sessionUser: SessionUser = {
    ipAddress: 'ipAddress 127',
    port: 'port 8080',
    password: 'password is undefined',
  };

  const session = setSession(sessionUser);

  const session1 = getSession();
  session1.then((o) => console.info(o));
  return Response.json(conferencesList);
}
