import { useState, useEffect } from 'react'

interface GitHubStats {
  public_repos: number
  followers: number
  following: number
  name: string
  bio: string
  avatar_url: string
  totalStars: number
  topLanguages: string[]
}

const MOCK_STATS: GitHubStats = {
  public_repos: 24,
  followers: 47,
  following: 38,
  name: 'Muhamad Fajar Ramdani',
  bio: 'Junior Fullstack Developer — Laravel, React, JavaScript, PHP, MySQL. Passionate about building clean, performant web applications that solve real problems.',
  avatar_url: '/headshot-on-white.jpg',
  totalStars: 142,
  topLanguages: ['Laravel', 'JavaScript', 'Dart', 'HTML'],
}

export function useGitHub() {
  const [stats, setStats] = useState<GitHubStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const username = import.meta.env.VITE_GITHUB_USERNAME as string | undefined
    if (!username) {
      setStats(MOCK_STATS)
      setLoading(false)
      return
    }

    const controller = new AbortController()
    const token = import.meta.env.VITE_GITHUB_TOKEN as string | undefined

    async function fetchStats() {
      try {
        const headers: Record<string, string> = {}
        if (token) {
          headers['Authorization'] = `Bearer ${token}`
        }

        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`, { 
            signal: controller.signal,
            headers,
          }),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100`, { 
            signal: controller.signal,
            headers,
          }),
        ])

        if (!userRes.ok) {
          console.warn(`GitHub API error: ${userRes.status}. Using mock data.`)
          throw new Error('GitHub API error')
        }
        const user = await userRes.json() as GitHubStats
        const repos = await reposRes.json() as Array<{ stargazers_count: number; language: string | null }>

        const totalStars = repos.reduce((acc, r) => acc + (r.stargazers_count || 0), 0)
        const langCount: Record<string, number> = {}
        repos.forEach(r => { if (r.language) langCount[r.language] = (langCount[r.language] || 0) + 1 })
        const topLanguages = Object.entries(langCount)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 4)
          .map(([lang]) => lang)

        setStats({ ...user, totalStars, topLanguages })
      } catch (error) {
        console.warn('Failed to fetch GitHub stats, using mock data:', error)
        setStats(MOCK_STATS)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
    return () => controller.abort()
  }, [])

  return { stats, loading }
}
