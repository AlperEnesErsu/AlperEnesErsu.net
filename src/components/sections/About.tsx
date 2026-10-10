import { Section } from "@/components/sections/Section";
import { Reveal } from "@/components/motion/Reveal";
import { profile } from "@/content/profile";

export function About() {
  const { focus } = profile.about;

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
          <div className="rounded-2xl border border-border bg-surface card-elevated p-6">
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

      {/* Odak alanı: diğer kartlarla aynı açık yüzey; vurguyu üst çizgi ve numaralar taşır. */}
      <Reveal delay={0.15} className="mt-12">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-surface card-elevated">
          <div
            aria-hidden
            className="h-1 w-full bg-gradient-to-r from-accent via-accent to-accent-strong"
          />
          <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-5 md:gap-12">
            <div className="md:col-span-2">
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                Odak alanım
              </p>
              <h3 className="mt-3 font-display text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
                <span className="text-gradient">{focus.title}</span>
              </h3>
              <p className="mt-4 leading-relaxed text-muted">{focus.text}</p>
            </div>
            <ol className="grid gap-x-8 sm:grid-cols-2 md:col-span-3">
              {focus.points.map((point, i) => {
                const [head, ...rest] = point.split(": ");
                return (
                  <li key={point} className="flex gap-4 border-t border-border-soft py-5">
                    <span className="font-mono text-sm font-medium text-accent-strong">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <span className="block font-display font-semibold text-foreground">
                        {head}
                      </span>
                      <span className="mt-1 block text-sm leading-relaxed text-muted">
                        {rest.join(": ")}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
