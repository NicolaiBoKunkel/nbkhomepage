// lib/github.ts

import { projectTags } from '@/data/projectTags';
import { projectDescription } from '@/data/projectDescription';

const GITHUB_API_URL = 'https://api.github.com';

export async function fetchGitHubRepos() {
  const username = process.env.GITHUB_USERNAME;
  const token = process.env.GITHUB_TOKEN;

  const res = await fetch(`${GITHUB_API_URL}/users/${username}/repos?per_page=100`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
    },
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.statusText}`);
  }

  const repos = await res.json();

  return repos
    .filter((repo: any) => !repo.fork)
    .sort((a: any, b: any) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
    .map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      fullName: repo.full_name,
      htmlUrl: repo.html_url,
      description: projectDescription[repo.name] || repo.description,
      language: repo.language,
      topics: repo.topics,
      updatedAt: repo.updated_at,
      homepage: repo.homepage,
      tags: projectTags[repo.name] || [], // ← Inject custom tags
    }));
}
