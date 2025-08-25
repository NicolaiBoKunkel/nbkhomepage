'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import en from '@/i18n/en';
import da from '@/i18n/da';

export type Locale = 'en' | 'da';
type Dict = typeof en;
const dictionaries: Record<Locale, Dict> = { en, da };

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (path: string) => string;
};

const LanguageContext = createContext<Ctx | null>(null);

// Helper to resolve nested paths like "nav.home"
function get(obj: any, path: string) {
  return path.split('.').reduce((acc, key) => (acc ? acc[key] : undefined), obj);
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('da');
  const router = useRouter();

  // Load preference on first render
  useEffect(() => {
    const saved = (typeof window !== 'undefined' && localStorage.getItem('lang')) as Locale | null;
    if (saved === 'en' || saved === 'da') {
      setLocale(saved);
    } else {
      const guess = navigator.language?.startsWith('da') ? 'da' : 'en';
      setLocale(guess);
    }
  }, []);

  // Save preference + update <html lang=""> + sync cookie + refresh server components
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('lang', locale);
      document.documentElement.lang = locale;

      // Sync a cookie for server components
      document.cookie = `lang=${locale}; path=/; max-age=${60 * 60 * 24 * 365}`;

      // Force server components to re-render with the new dictionary
      router.refresh();
    }
  }, [locale, router]);

  const value = useMemo<Ctx>(() => ({
    locale,
    setLocale,
    t: (path: string) => {
      const result = get(dictionaries[locale], path);
      return typeof result === 'string' ? result : path;
    }
  }), [locale]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
