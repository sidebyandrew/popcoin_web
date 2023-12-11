import { peopleList } from '@/utils/data';

export async function GET(request: Request) {
  return Response.json(peopleList);
}
