import { conferencesList } from '@/utils/data';

export async function GET(request: Request) {
  return Response.json(conferencesList);
}
