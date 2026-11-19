import { Section } from "@/components/sections/Section";
import { Reveal } from "@/components/motion/Reveal";
import { GameRequestForm } from "@/components/sections/GameRequestForm";
import { FUSE_AND_FALL_URL } from "@/content/projects";

const features = [
  "Dokuz şehir, 90+ görev; her şehrin finalinde bir simge yapı",
  "Her gün yeni bir günlük görev, bazı günler aynalı saha ya da tasarruf kuralı",
  "Kendi görevini kur, kodla ya da bağlantıyla arkadaşına meydan oku",
  "Kurulum yok, hesap yok; ilk açılıştan sonra internetsiz çalışır",
];

const shots = [
  { src: "/projects/fuse-and-fall-menu.jpg", alt: "Fuse & Fall ana menüsü" },
  { src: "/projects/fuse-and-fall-placing.jpg", alt: "Şarj yerleştirme" },
  { src: "/projects/fuse-and-fall-collapse.jpg", alt: "Yapı çöküyor" },
];

export function Games() {
  return (
    <Section id="games" eyebrow="04 — Oyunlar" title="Oyunlar">
      <Reveal>
        <article className="grid items-center gap-8 md:grid-cols-[1fr_1.1fr] md:gap-12">
          <div className="grid grid-cols-3 gap-3">
            {shots.map((shot) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={shot.src}
                src={shot.src}
                alt={shot.alt}
                loading="lazy"
                width={360}
                height={640}
                className="aspect-[9/16] w-full rounded-xl border border-border bg-surface object-cover card-elevated"
              />
            ))}
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-strong/10 px-3 py-1 text-xs font-medium text-[#2a8a70] ring-1 ring-inset ring-accent-strong/40">
                Tarayıcıda oynanır
              </span>
              <span className="rounded-full bg-surface px-3 py-1 text-xs text-muted ring-1 ring-inset ring-border">
                Telefon · Tablet · Bilgisayar
              </span>
            </div>
            <h3 className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Fuse &amp; Fall
            </h3>
            <p className="mt-1 text-base font-medium text-accent">
              Doğru şarj, doğru yer. Gerisini fizik halleder.
            </p>
            <ul className="mt-5 space-y-2">
              {features.map((f) => (
                <li key={f} className="flex gap-2 leading-relaxed text-muted">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-strong" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={FUSE_AND_FALL_URL}
                className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-6 text-sm font-medium text-on-accent transition-colors hover:bg-accent/90"
              >
                Hemen oyna
                <span aria-hidden>▶</span>
              </a>
              <a
                href="https://github.com/AlperEnesErsu/Fuse-Fall"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center rounded-full border border-border px-5 text-sm font-medium text-foreground transition-colors hover:bg-surface"
              >
                Kaynak kodu
              </a>
            </div>
            <p className="mt-3 text-sm text-muted">
              Telefonda “Ana ekrana ekle” ile uygulama gibi açılır.
            </p>
          </div>
        </article>
      </Reveal>

      <Reveal className="mt-16">
        <GameRequestForm />
      </Reveal>
    </Section>
  );
}
