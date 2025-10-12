'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

import { projectDescriptions as projectDescriptions_da } from '@/data/projectDescription';
import { projectDescriptions_en } from '@/data/projectDescription.en';

import { projectImages as images_da } from '@/data/projectImages';
import { projectImages_en } from '@/data/projectImages.en';

type Repo = {
  id: number;
  name: string;
  fullName: string;
  htmlUrl: string;
  description: string;
  language: string;
  topics: string[];
  updatedAt: string;
  homepage: string;
  tags: string[];
};

type LanguageSlice = { name: string; percent: number };

// Colorlist for common languages, update later if needed
const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: 'bg-blue-600',
  JavaScript: 'bg-yellow-400',
  Python: 'bg-green-600',
  Java: 'bg-orange-600',
  'C#': 'bg-purple-600',
  'C++': 'bg-indigo-600',
  C: 'bg-slate-600',
  Go: 'bg-cyan-600',
  Rust: 'bg-orange-700',
  PHP: 'bg-indigo-500',
  Ruby: 'bg-red-500',
  Swift: 'bg-orange-500',
  Kotlin: 'bg-violet-600',
  Shell: 'bg-emerald-600',
  HTML: 'bg-red-400',
  CSS: 'bg-blue-400',
  SCSS: 'bg-pink-400',
  Vue: 'bg-emerald-500',
  Svelte: 'bg-orange-500',
  'Jupyter Notebook': 'bg-amber-500',
  TeX: 'bg-lime-600',
  Elixir: 'bg-fuchsia-600',
  Haskell: 'bg-purple-700',
  Dart: 'bg-sky-600',
  Scala: 'bg-red-700',
};

const FALLBACKS = [
  'bg-rose-500',
  'bg-teal-500',
  'bg-sky-500',
  'bg-amber-600',
  'bg-lime-600',
  'bg-pink-500',
  'bg-slate-500',
];

function colorForLanguage(name: string, i: number) {
  return LANGUAGE_COLORS[name] || FALLBACKS[i % FALLBACKS.length];
}

export default function ProjectDetailClient({
  repo,
  languages = [],
}: {
  repo: Repo;
  languages?: LanguageSlice[];
}) {
  const { locale, t } = useLanguage();

  const descMap = locale === 'da' ? projectDescriptions_da : projectDescriptions_en;
  const imagesMap = locale === 'da' ? images_da : projectImages_en;

  const images = imagesMap[repo.name] || [];
  const longDescription =
    descMap[repo.name]?.long ?? repo.description ?? t('projects.noDescription');

  return (
    <div className="min-h-screen px-6 py-12 bg-white text-gray-800 dark:bg-black dark:text-white max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-4">
        {repo.name}
      </h1>

      <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
        {t('projects.updated')}{' '}
        {new Date(repo.updatedAt).toLocaleDateString(
          locale === 'da' ? 'da-DK' : 'en-US'
        )}
      </p>

      <p className="mb-4 text-gray-700 dark:text-gray-300">{longDescription}</p>

      {repo.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {repo.tags.map((tag) => (
            <span
              key={tag}
              className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 text-xs font-medium px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="space-y-2">
        {repo.language && (
          <p>
            <strong>{t('projects.language')}</strong>{' '}
            <span className="dark:text-gray-300">{repo.language}</span>
          </p>
        )}

        {/* Language breakdown (GitHub-style) */}
        {languages.length > 0 && (
          <section className="mt-2" aria-label={`${t('projects.language')} breakdown`}>
            {/* Stacked bar */}
            <div className="w-full h-3 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
              <div className="flex h-full">
                {languages.map((l, i) => (
                  <div
                    key={l.name}
                    className={`${colorForLanguage(l.name, i)} h-full`}
                    style={{ width: `${l.percent}%` }}
                    title={`${l.name} ${l.percent.toFixed(1)}%`}
                    aria-label={`${l.name} ${l.percent.toFixed(1)}%`}
                  />
                ))}
              </div>
            </div>

            {/* Legend */}
            <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-1 text-sm text-gray-700 dark:text-gray-300">
              {languages.map((l, i) => (
                <li key={l.name} className="flex items-center gap-2">
                  <span
                    className={`inline-block w-3 h-3 rounded-sm ${colorForLanguage(
                      l.name,
                      i
                    )}`}
                    aria-hidden="true"
                  />
                  <span className="tabular-nums">
                    {l.name} — {l.percent.toFixed(1)}%
                  </span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {repo.topics.length > 0 && (
          <p>
            <strong>{t('projects.githubTopics')}</strong>{' '}
            <span className="dark:text-gray-300">{repo.topics.join(', ')}</span>
          </p>
        )}

        {repo.homepage && (
          <p>
            <strong>{t('projects.live')}</strong>{' '}
            <Link
              href={repo.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600 dark:text-blue-400"
            >
              {repo.homepage}
            </Link>
          </p>
        )}

        <p>
          <strong>{t('projects.github')}</strong>{' '}
          <Link
            href={repo.htmlUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600 dark:text-blue-400"
          >
            {repo.htmlUrl}
          </Link>
        </p>
      </div>

      {/* Screenshots / diagrams section */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">{t('projects.screenshots')}</h2>
        {images.length > 0 ? (
          <div className="grid gap-4">
            {images.map(({ src, caption }, index) => (
              <div
                key={index}
                className="border dark:border-gray-700 rounded overflow-hidden mb-6 max-w-xl mx-auto"
              >
                <Image
                  src={src}
                  alt={`Screenshot ${index + 1} of ${repo.name}`}
                  width={640}
                  height={480}
                  className="w-full h-auto"
                />
                {caption && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 italic mt-1 px-2 pb-2 text-center">
                    {caption}
                  </p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {t('projects.noImages')}
          </p>
        )}
      </div>
    </div>
  );
}
