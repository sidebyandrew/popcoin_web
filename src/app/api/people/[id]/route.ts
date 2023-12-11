import { peopleList } from '@/utils/data';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  // let url = new URL(request.url);
  // let { searchParams } = new URL(request.url);
  const id = params['id'];
  const person = peopleList.find((p) => p.id === id);
  return Response.json(person);
}
