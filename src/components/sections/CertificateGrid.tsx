"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { certificates, type Certificate } from "@/content/certificates";

export function CertificateGrid() {
  const [active, setActive] = useState<Certificate | null>(null);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Lock body scroll while the lightbox is open
  useEffect(() => {
    if (!active) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [active]);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, i) => (
          <Reveal key={cert.file} delay={Math.min(i * 0.05, 0.3)} className="h-full">
            <button
              type="button"
              onClick={() => setActive(cert)}
              className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-border bg-surface/50 text-left transition-colors hover:border-accent/40 hover:bg-surface"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-border bg-white/[0.02]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cert.image}
                  alt={`${cert.title} sertifikası`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <span className="absolute right-3 top-3 rounded-full bg-background/80 px-2.5 py-1 text-xs text-muted backdrop-blur">
                  {cert.date}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-base font-semibold leading-snug text-foreground">
                  {cert.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
                <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-medium text-accent">
                  Görüntüle
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
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
          >
            <motion.div
              className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-border bg-surface"
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-4 border-b border-border p-4">
                <div className="min-w-0">
                  <h3 className="truncate font-display font-semibold text-foreground">
                    {active.title}
                  </h3>
                  <p className="text-sm text-muted">
                    {active.issuer} · {active.date}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  <a
                    href={active.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-border px-3 py-1.5 text-sm text-muted transition-colors hover:text-foreground"
                  >
                    PDF
                  </a>
                  <button
                    type="button"
                    onClick={() => setActive(null)}
                    aria-label="Kapat"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-muted transition-colors hover:bg-background hover:text-foreground"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="M18 6 6 18M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="overflow-auto bg-background p-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={active.image}
                  alt={`${active.title} sertifikası`}
                  className="mx-auto w-full max-w-3xl rounded-lg"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
