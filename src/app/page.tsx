import { FadeIn } from "@/components/motion/FadeIn";

export default function Home() {
  return (
    <main className="relative flex flex-1 items-center justify-center overflow-hidden px-6 py-24">
      {/* Ambient background glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-strong/20 blur-[130px]" />
        <div className="absolute bottom-0 left-1/2 h-[24rem] w-[24rem] -translate-x-1/2 translate-y-1/3 rounded-full bg-accent/10 blur-[130px]" />
      </div>

      <div className="flex max-w-2xl flex-col items-center text-center">
        <FadeIn delay={0}>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-sm text-muted backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Portfolyo · yapım aşamasında
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="mt-8 font-display text-5xl font-bold tracking-tight sm:text-7xl">
            <span className="text-gradient">Alper Enes Ersü</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            Kişisel portföyüm ve{" "}
            <span className="text-foreground">Yapay Alper</span> sohbet asistanı
            burada hayat buluyor. Projeler, sertifikalar ve dahası çok yakında.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-10 flex items-center gap-3 font-mono text-sm text-muted">
            <span className="h-px w-8 bg-border" />
            AlperEnesErsu.net
            <span className="h-px w-8 bg-border" />
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
