export type RepoStats = {
  stars: number;
  pushedAt: string;
};

/**
 * Herkese açık bir reponun istatistiklerini çeker (ISR: saatte bir yenilenir).
 * Hata/limit durumunda null döner — arayüz istatistiksiz devam eder.
 */
export async function getRepoStats(repo: string): Promise<RepoStats | null> {
  try {
    const res = await fetch(`https://api.github.com/repos/${repo}`, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as {
      stargazers_count?: number;
      pushed_at?: string;
    };
    return {
      stars: data.stargazers_count ?? 0,
      pushedAt: data.pushed_at ?? "",
    };
  } catch {
    return null;
  }
}
