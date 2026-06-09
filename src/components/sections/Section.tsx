import { type ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title?: string;
  children?: ReactNode;
  className?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`px-6 py-24 sm:py-32 ${className}`}>
      <div className="mx-auto w-full max-w-5xl">
        {(eyebrow || title) && (
          <Reveal className="mb-12">
            {eyebrow && (
              <p className="font-mono text-sm uppercase tracking-widest text-accent">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {title}
              </h2>
            )}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
