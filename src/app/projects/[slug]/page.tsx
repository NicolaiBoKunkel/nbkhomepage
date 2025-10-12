import { notFound } from 'next/navigation';
import { fetchGitHubRepos, fetchRepoLanguages } from '@/lib/github';
import ProjectDetailClient from '@/components/ProjectDetailClient';

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
  stars?: number;
  forks?: number;
  openIssues?: number;
};

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const repos: Repo[] = await fetchGitHubRepos();
  const repo = repos.find((r) => r.name === slug);
  if (!repo) return notFound();

  const owner = process.env.GITHUB_USERNAME!;
  const languages = await fetchRepoLanguages(owner, repo.name);

  return <ProjectDetailClient repo={repo} languages={languages} />;
}
