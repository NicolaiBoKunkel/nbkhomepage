import { projectTags } from '@/data/projectTags';
import { projectDescriptions } from '@/data/projectDescription';

const GITHUB_API_URL = 'https://api.github.com';

export async function fetchGitHubRepos() {
  const username = process.env.GITHUB_USERNAME;
  const token = process.env.GITHUB_TOKEN;

  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(`${GITHUB_API_URL}/users/${username}/repos?per_page=100`, {
    headers,
    next: { revalidate: 3600 },
  });

  if (res.status === 401) {
    console.warn('GitHub API unauthorized — returning empty list (likely missing GITHUB_TOKEN).');
    return [];
  }

  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status} ${res.statusText}`);
  }

  const repos = await res.json();

  return repos
    .filter((repo: any) => !repo.fork)
    .sort(
      (a: any, b: any) =>
        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
    )
    .map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      fullName: repo.full_name,
      htmlUrl: repo.html_url,
      description: projectDescriptions[repo.name]?.short || repo.description,
      language: repo.language,
      topics: repo.topics,
      updatedAt: repo.updated_at,
      homepage: repo.homepage,
      tags: projectTags[repo.name] || [],
    }));
}
