import { cookies } from 'next/headers';
import en from '@/i18n/en';
import da from '@/i18n/da';

export type Locale = 'en' | 'da';
const dictionaries = { en, da };

export async function getLocaleFromCookies(): Promise<Locale> {
  const cookieStore = await cookies();
  const c = cookieStore.get('lang')?.value as Locale | undefined;
  return c === 'da' || c === 'en' ? c : 'en';
}

export async function getDictionary(locale?: Locale) {
  const l = locale ?? await getLocaleFromCookies();
  return dictionaries[l];
}

export function t(dict: any, path: string): string {
  return path.split('.').reduce((acc: any, key: string) => (acc ? acc[key] : undefined), dict) ?? path;
}
