import { fetchGitHubRepos } from '@/lib/github';
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

type Props = {
  params: { slug: string };
};

export default async function ProjectDetailPage({ params }: Props) {
  const repos: Repo[] = await fetchGitHubRepos();
  const repo = repos.find((r) => r.name === params.slug);

  if (!repo) return notFound();

  return (
    <div className="min-h-screen px-6 py-12 bg-white text-gray-800 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">{repo.name}</h1>

      <p className="mb-4 text-sm text-gray-600">
        Opdateret: {new Date(repo.updatedAt).toLocaleDateString('da-DK')}
      </p>

      <p className="mb-4 text-gray-700">{repo.description || 'Ingen beskrivelse.'}</p>

      {repo.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {repo.tags.map((tag) => (
            <span
              key={tag}
              className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="space-y-2">
        {repo.language && <p><strong>Sprog:</strong> {repo.language}</p>}
        {repo.topics.length > 0 && (
          <p>
            <strong>GitHub Topics:</strong> {repo.topics.join(', ')}
          </p>
        )}
        {repo.homepage && (
          <p>
            <strong>Live:</strong>{' '}
            <Link href={repo.homepage} target="_blank" className="underline text-blue-600">
              {repo.homepage}
            </Link>
          </p>
        )}
        <p>
          <strong>GitHub:</strong>{' '}
          <Link href={repo.htmlUrl} target="_blank" className="underline text-blue-600">
            {repo.htmlUrl}
          </Link>
        </p>
      </div>

      {/* Future area for images, diagrams, etc. */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Screenshots / Diagrammer</h2>
        <p className="text-sm text-gray-500">(Kommer snart…)</p>
      </div>
    </div>
  );
}
