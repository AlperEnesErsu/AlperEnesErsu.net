import { Section } from "@/components/sections/Section";
import { Reveal } from "@/components/motion/Reveal";
import { ChatBox } from "@/components/sections/ChatBox";
import { yapayAlper } from "@/content/yapayAlper";

export function Chat() {
  return (
    <Section id="chat" eyebrow="05 — Yapay Alper" title="Yapay Alper">
      <Reveal className="mb-6 max-w-2xl">
        <p className="text-lg leading-relaxed text-muted">
          Bakış açımı ve projelerimi yansıtan bir sohbet asistanı.{" "}
          <span className="text-foreground">{yapayAlper.disclaimer}</span>
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <ChatBox />
      </Reveal>
    </Section>
  );
}
