import { Section } from "@/components/sections/Section";
import { Reveal } from "@/components/motion/Reveal";
import { profile } from "@/content/profile";

export function About() {
  return (
    <Section id="about" eyebrow="01 — Hakkımda" title="Hakkımda">
      <div className="grid gap-10 md:grid-cols-5 md:gap-12">
        <Reveal className="space-y-5 md:col-span-3">
          {profile.about.paragraphs.map((paragraph, i) => (
            <p key={i} className="text-lg leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-2">
          <div className="rounded-2xl border border-border bg-surface/50 p-6 backdrop-blur">
            <h3 className="font-display text-lg font-semibold text-foreground">
              Teknolojiler &amp; Beceriler
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {profile.about.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-border bg-background px-3 py-1 text-sm text-muted transition-colors hover:border-accent/40 hover:text-foreground"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
