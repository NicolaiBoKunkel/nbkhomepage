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

export default function ProjectDetailClient({ repo }: { repo: Repo }) {
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
        {new Date(repo.updatedAt).toLocaleDateString(locale === 'da' ? 'da-DK' : 'en-US')}
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
