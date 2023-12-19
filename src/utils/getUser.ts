import { ContextProps } from '@/contexts/TMA';

interface IUser {
  id: number;
  name: string;
}

export async function getUser(
  initDataRaw: string,
  headers?: ContextProps['headers']
) {
  return { id: 1, name: 'fake iser' } as IUser;
}
