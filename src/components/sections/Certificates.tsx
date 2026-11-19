import { Section } from "@/components/sections/Section";
import { CertificateGrid } from "@/components/sections/CertificateGrid";

export function Certificates() {
  return (
    <Section id="certificates" eyebrow="05 — Sertifikalar" title="Sertifikalar">
      <CertificateGrid />
    </Section>
  );
}
