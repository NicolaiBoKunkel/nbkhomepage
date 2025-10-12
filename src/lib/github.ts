import { projectTags } from '@/data/projectTags';
import { projectDescriptions } from '@/data/projectDescription';

const GITHUB_API_URL = 'https://api.github.com';

function ghHeaders() {
  const h: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
  };
  const token = process.env.GITHUB_TOKEN;
  if (token) h.Authorization = `Bearer ${token}`; // only if present
  return h;
}

export async function fetchGitHubRepos() {
  const username = process.env.GITHUB_USERNAME;
  if (!username) {
    console.warn('GITHUB_USERNAME not set; returning empty repo list.');
    return [];
  }

  const res = await fetch(
    `${GITHUB_API_URL}/users/${username}/repos?per_page=100`,
    { headers: ghHeaders(), next: { revalidate: 3600 } }
  );

  if (res.status === 401) {
    console.warn(
      'GitHub API unauthorized — returning empty list (likely missing/invalid GITHUB_TOKEN).'
    );
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
      // expose some extra repo stats if you want them later
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      openIssues: repo.open_issues_count,
    }));
}

/** Return language breakdown as [{ name, percent }] sorted desc */
export async function fetchRepoLanguages(owner: string, repo: string) {
  const res = await fetch(
    `${GITHUB_API_URL}/repos/${owner}/${repo}/languages`,
    { headers: ghHeaders(), next: { revalidate: 3600 } }
  );

  if (res.status === 401) return [];
  if (!res.ok) {
    throw new Error(
      `GitHub languages error: ${res.status} ${res.statusText}`
    );
  }

  const data = (await res.json()) as Record<string, number>;
  const total = Object.values(data).reduce((a, b) => a + b, 0);
  if (!total) return [];

  return Object.entries(data)
    .map(([name, bytes]) => ({ name, percent: (bytes / total) * 100 }))
    .sort((a, b) => b.percent - a.percent);
}
