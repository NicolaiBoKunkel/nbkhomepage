import Image from 'next/image';
import { fetchGitHubRepos } from '@/lib/github';
import { projectImages } from '@/data/projectImages';
import { projectDescriptions } from '@/data/projectDescription';
import Link from 'next/link';
import { notFound } from 'next/navigation';

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

export default async function ProjectDetailPage({ params }: any) {
  const repos: Repo[] = await fetchGitHubRepos();
  const repo = repos.find((r) => r.name === params.slug);

  if (!repo) return notFound();

  const images = projectImages[repo.name] || [];
  const longDescription = projectDescriptions[repo.name]?.long;

  return (
    <div className="min-h-screen px-6 py-12 bg-white text-gray-800 dark:bg-black dark:text-white max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-4">{repo.name}</h1>

      <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
        Opdateret: {new Date(repo.updatedAt).toLocaleDateString('da-DK')}
      </p>

      <p className="mb-4 text-gray-700 dark:text-gray-300">
        {longDescription || repo.description || 'Ingen beskrivelse.'}
      </p>

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
            <strong>Sprog:</strong>{' '}
            <span className="dark:text-gray-300">{repo.language}</span>
          </p>
        )}
        {repo.topics.length > 0 && (
          <p>
            <strong>GitHub Topics:</strong>{' '}
            <span className="dark:text-gray-300">{repo.topics.join(', ')}</span>
          </p>
        )}
        {repo.homepage && (
          <p>
            <strong>Live:</strong>{' '}
            <Link href={repo.homepage} target="_blank" className="underline text-blue-600 dark:text-blue-400">
              {repo.homepage}
            </Link>
          </p>
        )}
        <p>
          <strong>GitHub:</strong>{' '}
          <Link href={repo.htmlUrl} target="_blank" className="underline text-blue-600 dark:text-blue-400">
            {repo.htmlUrl}
          </Link>
        </p>
      </div>

      {/* Screenshots / diagrams section */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Screenshots / Diagrammer</h2>
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
          <p className="text-sm text-gray-500 dark:text-gray-400">Ingen billeder tilgængelige.</p>
        )}
      </div>
    </div>
  );
}
