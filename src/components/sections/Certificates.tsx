import { Section } from "@/components/sections/Section";
import { Reveal } from "@/components/motion/Reveal";
import { certificates } from "@/content/certificates";

function AwardIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

export function Certificates() {
  return (
    <Section id="certificates" eyebrow="03 — Sertifikalar" title="Sertifikalar">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, i) => (
          <Reveal key={cert.file} delay={Math.min(i * 0.05, 0.3)} className="h-full">
            <a
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col rounded-2xl border border-border bg-surface/50 p-5 transition-colors hover:border-accent/40 hover:bg-surface"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-inset ring-accent/20">
                  <AwardIcon />
                </span>
                <time className="text-xs text-muted">{cert.date}</time>
              </div>

              <h3 className="font-display text-base font-semibold leading-snug text-foreground">
                {cert.title}
              </h3>
              <p className="mt-1 text-sm text-muted">{cert.issuer}</p>

              <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-medium text-accent">
                Sertifikayı gör
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                >
                  <path d="M7 17 17 7M7 7h10v10" />
                </svg>
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
