import { type ReactNode } from "react";
import { profile } from "@/content/profile";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4.98 3.5a2.5 2.5 0 1 1-.02 5 2.5 2.5 0 0 1 .02-5zM3 8.98h4V21H3V8.98zM9 8.98h3.8v1.64h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.36c0-1.28-.02-2.92-1.78-2.92-1.78 0-2.05 1.39-2.05 2.83V21H9V8.98z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" {...stroke} aria-hidden>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 6 10-6" />
    </svg>
  );
}

type Social = {
  label: string;
  href: string;
  external: boolean;
  icon: ReactNode;
};

export function Footer() {
  const year = new Date().getFullYear();
  const s = profile.social;

  const socials: Social[] = [];
  if (s.github)
    socials.push({
      label: "GitHub",
      href: s.github,
      external: true,
      icon: <GitHubIcon />,
    });
  if (s.linkedin)
    socials.push({
      label: "LinkedIn",
      href: s.linkedin,
      external: true,
      icon: <LinkedInIcon />,
    });
  if (s.email)
    socials.push({
      label: "E-posta",
      href: `mailto:${s.email}`,
      external: false,
      icon: <MailIcon />,
    });

  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <a
            href="#hero"
            className="font-display text-lg font-bold text-foreground"
          >
            {profile.name}
          </a>
          <p className="mt-1 text-sm text-muted">{profile.headline}</p>
        </div>

        <div className="flex items-center gap-3">
          {socials.map((soc) => (
            <a
              key={soc.label}
              href={soc.href}
              {...(soc.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              aria-label={soc.label}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent/40 hover:text-foreground"
            >
              {soc.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-8 w-full max-w-6xl border-t border-border/50 pt-6 text-center text-sm text-muted">
        © {year} {profile.name} ·{" "}
        <a
          href="https://github.com/AlperEnesErsu/AlperEnesErsu.net/blob/main/LICENSE"
          target="_blank"
          rel="noopener noreferrer"
          className="underline-offset-2 transition-colors hover:text-foreground hover:underline"
        >
          MIT Lisansı
        </a>{" "}
        · Next.js &amp; Tailwind ile yapıldı.
      </div>
    </footer>
  );
}
