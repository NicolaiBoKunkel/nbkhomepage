import { fetchGitHubRepos } from '@/lib/github'

global.fetch = jest.fn()

describe('fetchGitHubRepos', () => {

  beforeEach(() => {
    jest.resetAllMocks()
    process.env.GITHUB_USERNAME = 'testuser'
  })

  it('returns empty array if API returns 401', async () => {
    (fetch as jest.Mock).mockResolvedValue({
      status: 401,
      ok: false,
    })

    const repos = await fetchGitHubRepos()

    expect(repos).toEqual([])
  })

  it('filters out forked repositories', async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => [
        { id: 1, name: 'repo1', fork: false, updated_at: '2024-01-01' },
        { id: 2, name: 'repo2', fork: true, updated_at: '2024-01-02' },
      ],
    })

    const repos = await fetchGitHubRepos()

    expect(repos.length).toBe(1)
    expect(repos[0].name).toBe('repo1')
  })

})