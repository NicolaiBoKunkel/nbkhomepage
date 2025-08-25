'use client';

import { useLanguage } from './LanguageProvider';

export default function LanguageToggle() {
  const { locale, setLocale } = useLanguage();
  const next = locale === 'da' ? 'en' : 'da';

  return (
    <button
      onClick={() => setLocale(next)}
      className="px-3 py-1 text-sm rounded-md border border-neutral-300 dark:border-neutral-700 hover:opacity-80 transition"
      aria-label="Toggle language"
      title={`Switch to ${next.toUpperCase()}`}
    >
      {locale.toUpperCase()}
    </button>
  );
}
