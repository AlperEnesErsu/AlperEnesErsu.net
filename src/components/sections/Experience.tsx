import { Section } from "@/components/sections/Section";
import { Reveal } from "@/components/motion/Reveal";
import { profile } from "@/content/profile";

export function Experience() {
  return (
    <Section id="experience" eyebrow="02 — Deneyim" title="Deneyim">
      <ol className="relative space-y-6 border-l border-border pl-6 sm:pl-8">
        {profile.experience.map((item, i) => (
          <li key={item.org} className="relative">
            <Reveal delay={Math.min(i * 0.08, 0.24)}>
            {/* Zaman çizelgesi noktası */}
            <span
              aria-hidden
              className="absolute -left-[31px] top-6 flex h-3.5 w-3.5 sm:-left-[39px]"
            >
              {item.current && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-strong opacity-60 motion-reduce:animate-none" />
              )}
              <span
                className={`relative inline-flex h-3.5 w-3.5 rounded-full ring-4 ring-background ${
                  item.current ? "bg-accent-strong" : "bg-border"
                }`}
              />
            </span>

            <article className="rounded-2xl border border-border bg-surface p-6 card-elevated">
              <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {item.role}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-accent">
                    {"link" in item && item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline-offset-4 hover:underline"
                      >
                        {item.org} ↗
                      </a>
                    ) : (
                      item.org
                    )}
                    <span className="text-muted"> · {item.type}</span>
                  </p>
                </div>
                <span
                  className={`rounded-full px-3 py-1 font-mono text-xs ring-1 ring-inset ${
                    item.current
                      ? "bg-accent-strong/10 text-[#2a8a70] ring-accent-strong/30"
                      : "bg-background text-muted ring-border"
                  }`}
                >
                  {item.period}
                </span>
              </div>

              <ul className="mt-4 space-y-2">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/50" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
