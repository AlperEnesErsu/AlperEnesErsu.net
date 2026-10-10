import { Section } from "@/components/sections/Section";
import { projects } from "@/content/projects";
import { getRepoStats } from "@/lib/github";
import { ProjectsClient } from "@/components/sections/ProjectsClient";

export async function Projects() {
  const repoProjects = projects.filter((p) => p.repo);
  const statsEntries = await Promise.all(
    repoProjects.map(async (p) => [p.slug, await getRepoStats(p.repo!)] as const),
  );
  const statsBySlug = Object.fromEntries(statsEntries);

  return (
    <Section id="projects" eyebrow="03 — Projeler" title="Projeler">
      <ProjectsClient statsBySlug={statsBySlug} />
    </Section>
  );
}

