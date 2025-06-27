import { fetchGitHubRepos } from '@/lib/github';
import Link from 'next/link';

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

  return (
    <div className="min-h-screen px-6 py-12 bg-white text-gray-800 dark:bg-black dark:text-white">
      <h1 className="text-3xl font-bold mb-8 text-center">Udvalgte Projekter</h1>

      <p className="text-center mb-6 text-gray-600 dark:text-gray-300">
        Denne side bruges til at dele projekter, som jeg har udvalgt for at fremvise mine færdigheder og erfaringer.
        Projekterne er en blanding af personlige projekter og eksamensprojekter, som både har været implementeret individuelt og i grupper.
        <br />
        Klik på en projekt-titel for at læse mere.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {repos.map((repo) => (
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
                {repo.description || 'Ingen beskrivelse tilgængelig.'}
              </p>

              <p className="text-xs text-gray-500 dark:text-gray-400">
                Opdateret: {new Date(repo.updatedAt).toLocaleDateString('da-DK')}
              </p>

              {repo.language && (
                <p className="text-xs mt-1 text-gray-600 dark:text-gray-400">Sprog: {repo.language}</p>
              )}

              {repo.homepage && (
                <p className="text-xs mt-1 text-blue-500 dark:text-blue-400 underline">
                  Live demo
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
        ))}
      </div>
    </div>
  );
}
