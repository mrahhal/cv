import { config as configObject } from '@/config';

export function config(key: string) {
  // eslint-disable-next-line
  return (configObject as any)[key];
}
