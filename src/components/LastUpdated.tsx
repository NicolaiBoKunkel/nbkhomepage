'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useLanguage } from './LanguageProvider';

  /**
   * 
   * Fetches and displays the last updated date of the GitHub repository.
   */

export default function LastUpdated() {
  const [updatedAt, setUpdatedAt] = useState<string | null>(null);
  const { t, locale } = useLanguage();

  useEffect(() => {
    fetch('https://api.github.com/repos/NicolaiBoKunkel/nbkhomepage')
      .then((res) => res.json())
      .then((data) => {
        if (data.updated_at) {
          const date = new Date(data.updated_at);
          // Format according to current locale
          setUpdatedAt(
            date.toLocaleDateString(locale === 'da' ? 'da-DK' : 'en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })
          );
        }
      })
      .catch((err) => console.error('Failed to fetch GitHub data', err));
  }, [locale]);

  if (!updatedAt) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-gray-100 text-sm text-gray-600 px-4 py-2 rounded-lg shadow-md">
      <Link href="/not-found.tsx">
        <p>{t('lastUpdated.label')} {updatedAt}</p>
      </Link>
    </div>
  );
}
