import { Section } from "@/components/sections/Section";
import { Reveal } from "@/components/motion/Reveal";
import { projects, type Project, type ProjectStatus } from "@/content/projects";
import { getRepoStats, type RepoStats } from "@/lib/github";

const statusLabel: Record<ProjectStatus, string> = {
  "demo-soon": "Canlı demo yakında",
  "open-source": "Açık kaynak",
  private: "Özel proje",
  "in-dev": "Geliştiriliyor",
  concept: "Fikir aşaması",
};

function formatDate(iso: string) {
  if (!iso) return null;
  return new Date(iso).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset ${
        status === "demo-soon"
          ? "bg-accent/10 text-accent ring-accent/30"
          : "bg-surface text-muted ring-border"
      }`}
    >
      {status === "demo-soon" && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
        </span>
      )}
      {statusLabel[status]}
    </span>
  );
}

function Stats({ stats }: { stats: RepoStats | null }) {
  if (!stats) return null;
  const updated = formatDate(stats.pushedAt);
  return (
    <span className="inline-flex items-center gap-3 text-xs text-muted">
      <span className="inline-flex items-center gap-1">
        <StarIcon />
        {stats.stars}
      </span>
      {updated && <span>Güncellendi: {updated}</span>}
    </span>
  );
}

function ProjectImage({ project }: { project: Project }) {
  if (project.image) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={project.image}
        alt={`${project.title} ekran görüntüsü`}
        loading="lazy"
        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
      />
    );
  }
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/15 via-surface to-accent-strong/15">
      <span className="font-display text-6xl font-bold text-foreground/15">
        {project.title.charAt(0)}
      </span>
    </div>
  );
}

function FeaturedProject({
  project,
  stats,
  flip,
}: {
  project: Project;
  stats: RepoStats | null;
  flip: boolean;
}) {
  return (
    <Reveal>
      <article className="group grid items-center gap-8 md:grid-cols-2 md:gap-12">
        <div
          className={`relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-surface/50 ${
            flip ? "md:order-2" : ""
          }`}
        >
          <ProjectImage project={project} />
        </div>

        <div className={flip ? "md:order-1" : ""}>
          <div className="flex flex-wrap items-center gap-2">
            <StatusBadge status={project.status} />
            {project.platforms?.map((p) => (
              <span
                key={p}
                className="rounded-full bg-surface px-3 py-1 text-xs text-muted ring-1 ring-inset ring-border"
              >
                {p}
              </span>
            ))}
          </div>

          <h3 className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-1 text-base font-medium text-accent">{project.tagline}</p>

          <div className="mt-4 space-y-3">
            {project.description.map((paragraph, i) => (
              <p key={i} className="leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </div>

          <ul className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <li
                key={t}
                className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted"
              >
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center rounded-full bg-accent px-5 text-sm font-medium text-[#08090c] transition-colors hover:bg-accent/90"
              >
                Canlı dene
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center gap-2 rounded-full border border-border px-5 text-sm font-medium text-foreground transition-colors hover:bg-surface"
              >
                <GitHubIcon />
                GitHub
              </a>
            )}
            <Stats stats={stats} />
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function ArchiveCard({
  project,
  stats,
}: {
  project: Project;
  stats: RepoStats | null;
}) {
  const inner = (
    <>
      {project.image && (
        <div className="relative -mx-5 -mt-5 mb-4 aspect-video overflow-hidden rounded-t-2xl border-b border-border bg-white/[0.02]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={`${project.title} görseli`}
            loading="lazy"
            className="h-full w-full object-cover object-top"
          />
          <span className="absolute right-3 top-3 rounded-full bg-background/80 px-2.5 py-1 text-xs text-muted backdrop-blur">
            {statusLabel[project.status]}
          </span>
        </div>
      )}
      <div className="flex items-center justify-between gap-3">
        <h4 className="font-display text-base font-semibold text-foreground">
          {project.title}
        </h4>
        {project.github && <GitHubIcon />}
      </div>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {project.tagline}
      </p>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
        <ul className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 3).map((t) => (
            <li
              key={t}
              className="rounded-full border border-border bg-background px-2.5 py-0.5 text-xs text-muted"
            >
              {t}
            </li>
          ))}
        </ul>
        <Stats stats={stats} />
      </div>
    </>
  );

  const className =
    "flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface/50 p-5 transition-colors hover:border-accent/40 hover:bg-surface";

  return project.github ? (
    <a href={project.github} target="_blank" rel="noopener noreferrer" className={className}>
      {inner}
    </a>
  ) : (
    <div className={className}>{inner}</div>
  );
}

export async function Projects() {
  const repoProjects = projects.filter((p) => p.repo);
  const statsEntries = await Promise.all(
    repoProjects.map(async (p) => [p.slug, await getRepoStats(p.repo!)] as const),
  );
  const statsBySlug = Object.fromEntries(statsEntries);

  const featured = projects.filter((p) => p.featured);
  const archive = projects.filter((p) => !p.featured);

  return (
    <Section id="projects" eyebrow="02 — Projeler" title="Projeler">
      <div className="space-y-20">
        {featured.map((project, i) => (
          <FeaturedProject
            key={project.slug}
            project={project}
            stats={statsBySlug[project.slug] ?? null}
            flip={i % 2 === 1}
          />
        ))}
      </div>

      {archive.length > 0 && (
        <>
          <Reveal className="mb-6 mt-20">
            <h3 className="font-display text-xl font-semibold text-foreground">
              Diğer projeler
            </h3>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {archive.map((project, i) => (
              <Reveal key={project.slug} delay={Math.min(i * 0.05, 0.2)} className="h-full">
                <ArchiveCard
                  project={project}
                  stats={statsBySlug[project.slug] ?? null}
                />
              </Reveal>
            ))}
          </div>
        </>
      )}
    </Section>
  );
}
