import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Certificates } from "@/components/sections/Certificates";
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

      <About />

      <Section id="projects" eyebrow="02 — Projeler" title="Projeler">
        <ComingSoon>
          Yakında: geliştirdiğim projeler, canlı önizleme ve kullandığım
          teknolojiler.
        </ComingSoon>
      </Section>

      <Certificates />

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
