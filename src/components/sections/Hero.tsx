"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { profile } from "@/content/profile";

export function Hero() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.12, delayChildren: 0.1 },
    },
  };

  const item: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 py-28"
    >
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-strong/20 blur-[140px]" />
        <div className="absolute bottom-0 left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 translate-y-1/3 rounded-full bg-accent/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_55%,var(--color-background))]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex max-w-3xl flex-col items-center text-center"
      >
        <motion.span
          variants={item}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-sm text-muted backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {profile.status}
        </motion.span>

        <motion.h1
          variants={item}
          className="mt-8 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl"
        >
          <span className="mb-2 block text-2xl font-medium text-foreground/60 sm:text-3xl">
            Merhaba, ben
          </span>
          <span className="text-gradient">{profile.name}</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 text-xl font-medium text-foreground sm:text-2xl"
        >
          {profile.headline}
        </motion.p>

        <motion.p
          variants={item}
          className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
        >
          {profile.intro}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#projects"
            className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-7 font-medium text-[#08090c] transition-colors hover:bg-accent/90"
          >
            Projelerim
          </a>
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-full border border-border px-7 font-medium text-foreground transition-colors hover:bg-surface"
          >
            İletişime geç
          </a>
          <a
            href={profile.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border px-7 font-medium text-muted transition-colors hover:bg-surface hover:text-foreground"
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
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <path d="m7 10 5 5 5-5" />
              <path d="M12 15V3" />
            </svg>
            CV
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#projects"
        aria-label="Aşağı kaydır"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted transition-colors hover:text-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reduce ? 0 : 1, duration: 0.6 }}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={reduce ? undefined : { y: [0, 8, 0] }}
          transition={
            reduce
              ? undefined
              : { duration: 1.6, repeat: Infinity, ease: "easeInOut" }
          }
        >
          <path d="M12 5v14" />
          <path d="m19 12-7 7-7-7" />
        </motion.svg>
      </motion.a>
    </section>
  );
}
