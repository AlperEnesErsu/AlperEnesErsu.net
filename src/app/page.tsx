import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Certificates } from "@/components/sections/Certificates";
import { Chat } from "@/components/sections/Chat";
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

      <Projects />

      <Certificates />

      <Section id="contact" eyebrow="04 — İletişim" title="İletişim">
        <ComingSoon>
          Yakında: iletişim bilgilerim ve sosyal medya bağlantılarım.
        </ComingSoon>
      </Section>

      <Chat />
    </main>
  );
}
