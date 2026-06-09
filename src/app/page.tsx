import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/sections/Section";
import { Reveal } from "@/components/motion/Reveal";

function ComingSoon({ children }: { children: React.ReactNode }) {
  return (
    <Reveal>
      <p className="max-w-2xl text-lg leading-relaxed text-muted">{children}</p>
    </Reveal>
  );
}

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />

      <Section id="about" eyebrow="01 — Hakkımda" title="Hakkımda">
        <ComingSoon>Yakında: kısa biyografim, ilgi alanlarım ve hikâyem.</ComingSoon>
      </Section>

      <Section id="projects" eyebrow="02 — Projeler" title="Projeler">
        <ComingSoon>
          Yakında: geliştirdiğim projeler, canlı önizleme ve kullandığım
          teknolojiler.
        </ComingSoon>
      </Section>

      <Section id="certificates" eyebrow="03 — Sertifikalar" title="Sertifikalar">
        <ComingSoon>Yakında: aldığım sertifikalar ve eğitimler.</ComingSoon>
      </Section>

      <Section id="contact" eyebrow="04 — İletişim" title="İletişim">
        <ComingSoon>
          Yakında: iletişim bilgilerim ve sosyal medya bağlantılarım.
        </ComingSoon>
      </Section>

      <Section id="chat" eyebrow="05 — Yapay Alper" title="Yapay Alper">
        <ComingSoon>
          Yakında: bakış açımı yansıtan yapay zeka sohbet asistanı.
        </ComingSoon>
      </Section>
    </main>
  );
}
