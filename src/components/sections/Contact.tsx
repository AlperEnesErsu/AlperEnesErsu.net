import { type ReactNode } from "react";
import { Section } from "@/components/sections/Section";
import { Reveal } from "@/components/motion/Reveal";
import { profile } from "@/content/profile";

type Method = {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  icon: ReactNode;
};

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" {...stroke} aria-hidden>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 6 10-6" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" {...stroke} aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.09 4.18 2 2 0 0 1 4.08 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.6 6.32A8.07 8.07 0 0 0 12 4a8 8 0 0 0-6.9 12L4 20l4.1-1.07A8 8 0 1 0 17.6 6.32zM12 18.5a6.46 6.46 0 0 1-3.3-.9l-.24-.14-2.43.64.65-2.37-.16-.25A6.5 6.5 0 1 1 12 18.5zm3.6-4.87c-.2-.1-1.17-.58-1.35-.64s-.31-.1-.44.1-.5.63-.62.76-.23.15-.43.05a5.3 5.3 0 0 1-1.56-.96 5.9 5.9 0 0 1-1.08-1.35c-.11-.2 0-.3.09-.4l.3-.35c.1-.12.13-.2.2-.34a.37.37 0 0 0-.02-.35c-.05-.1-.44-1.06-.6-1.45s-.32-.33-.44-.34h-.38a.73.73 0 0 0-.53.25 2.23 2.23 0 0 0-.69 1.65 3.87 3.87 0 0 0 .81 2.06 8.85 8.85 0 0 0 3.39 3c.47.2.84.32 1.13.42a2.72 2.72 0 0 0 1.25.08c.38-.06 1.17-.48 1.34-.94s.17-.86.12-.94-.18-.13-.38-.23z" />
    </svg>
  );
}
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
function CvIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" {...stroke} aria-hidden>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M12 18v-6" />
      <path d="m9 15 3 3 3-3" />
    </svg>
  );
}
function MapPinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" {...stroke} aria-hidden>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      {...stroke}
      className="ml-auto shrink-0 text-muted transition-all group-hover:translate-x-0.5 group-hover:text-accent"
      aria-hidden
    >
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
}

function buildMethods(): Method[] {
  const s = profile.social;
  const methods: Method[] = [];
  if (s.email)
    methods.push({
      label: "E-posta",
      value: s.email,
      href: `mailto:${s.email}`,
      icon: <MailIcon />,
    });
  if (s.phone && s.phoneIntl)
    methods.push({
      label: "Telefon",
      value: s.phone,
      href: `tel:+${s.phoneIntl}`,
      icon: <PhoneIcon />,
    });
  if (s.phoneIntl)
    methods.push({
      label: "WhatsApp",
      value: "Mesaj gönder",
      href: `https://wa.me/${s.phoneIntl}`,
      external: true,
      icon: <WhatsAppIcon />,
    });
  if (s.github)
    methods.push({
      label: "GitHub",
      value: "@AlperEnesErsu",
      href: s.github,
      external: true,
      icon: <GitHubIcon />,
    });
  if (s.linkedin)
    methods.push({
      label: "LinkedIn",
      value: "Profilime git",
      href: s.linkedin,
      external: true,
      icon: <LinkedInIcon />,
    });
  if (profile.cv)
    methods.push({
      label: "Özgeçmiş",
      value: "CV'yi indir (PDF)",
      href: profile.cv,
      external: true,
      icon: <CvIcon />,
    });
  if (s.location)
    methods.push({
      label: "Konum",
      value: s.location,
      icon: <MapPinIcon />,
    });
  return methods;
}

const cardClass =
  "group flex h-full items-center gap-4 rounded-2xl border border-border bg-surface/50 p-5 transition-colors";
const linkClass = `${cardClass} hover:border-accent/40 hover:bg-surface`;

function CardBody({ method }: { method: Method }) {
  return (
    <>
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-inset ring-accent/20">
        {method.icon}
      </span>
      <span className="min-w-0">
        <span className="block text-xs text-muted">{method.label}</span>
        <span className="block truncate text-sm font-medium text-foreground">
          {method.value}
        </span>
      </span>
      {method.href && <ArrowIcon />}
    </>
  );
}

export function Contact() {
  const methods = buildMethods();

  return (
    <Section id="contact" eyebrow="04 — İletişim" title="İletişim">
      <Reveal className="mb-8 max-w-2xl">
        <p className="text-lg leading-relaxed text-muted">
          Bir projede birlikte çalışmak, bir soru sormak ya da sadece merhaba
          demek için — aşağıdaki kanallardan bana en kolay şekilde ulaşabilirsin.
        </p>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {methods.map((method, i) => (
          <Reveal
            key={method.label}
            delay={Math.min(i * 0.05, 0.25)}
            className="h-full"
          >
            {method.href ? (
              <a
                href={method.href}
                {...(method.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className={linkClass}
              >
                <CardBody method={method} />
              </a>
            ) : (
              <div className={cardClass}>
                <CardBody method={method} />
              </div>
            )}
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
