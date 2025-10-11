import { fetchGitHubRepos } from '@/lib/github';
import Link from 'next/link';
import { getDictionary, getLocaleFromCookies, t } from '@/lib/i18n';
import { projectDescriptions_en } from '@/data/projectDescription.en';
import { projectDescriptions as projectDescriptions_da } from '@/data/projectDescription';

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

export default async function ProjectsPage() {
  const repos: Repo[] = await fetchGitHubRepos();
  const locale = await getLocaleFromCookies();
  const dict = await getDictionary(locale);
  const descMap = locale === 'da' ? projectDescriptions_da : projectDescriptions_en;

  return (
    <div className="min-h-screen px-6 py-12 bg-white text-gray-800 dark:bg-black dark:text-white">
      <h1 id="title" className="text-3xl font-bold mb-8 text-center">
        {t(dict, 'projects.title')}
      </h1>

      <p id="info" className="text-center mb-6 text-gray-600 dark:text-gray-300">
        {t(dict, 'projects.intro')}
        <br />
        {t(dict, 'projects.clickHint')}
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {repos.map((repo) => {
          const localizedShort =
            descMap[repo.name]?.short ??
            repo.description ??
            t(dict, 'projects.noDescription');

          return (
            <Link
              key={repo.id}
              href={`/projects/${repo.name}`}
              className="block bg-gray-100 dark:bg-gray-800 rounded-xl shadow hover:shadow-md transition hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <div className="p-4 h-full">
                <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2 underline">
                  {repo.name}
                </h2>

                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  {localizedShort}
                </p>

                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {t(dict, 'projects.updated')}{' '}
                  {new Date(repo.updatedAt).toLocaleDateString(
                    locale === 'da' ? 'da-DK' : 'en-US'
                  )}
                </p>

                {repo.language && (
                  <p className="text-xs mt-1 text-gray-600 dark:text-gray-400">
                    {t(dict, 'projects.language')} {repo.language}
                  </p>
                )}

                {repo.homepage && (
                  <p className="text-xs mt-1 text-blue-500 dark:text-blue-400 underline">
                    {t(dict, 'projects.liveDemo')}
                  </p>
                )}

                {repo.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-3">
                    {repo.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-medium px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
