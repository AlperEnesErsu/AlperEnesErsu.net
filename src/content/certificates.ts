export type Certificate = {
  title: string;
  issuer: string;
  /** Kartta görünen tarih */
  date: string;
  /** Sıralama için ISO tarih */
  iso: string;
  /** Önizleme görseli (public/ altında) */
  image: string;
  /** Orijinal PDF (public/ altında) */
  file: string;
  /** Varsa doğrulama linki */
  url?: string;
};

/**
 * Sertifikalar — en yeni en üstte.
 * Görseller + PDF'ler `public/certificates/` altında.
 * (Görseller PDF'lerden üretildi: scripts ile pymupdf.)
 */
export const certificates: Certificate[] = [
  {
    title: "Güvenlik Duvarına Giriş",
    issuer: "BTK Akademi",
    date: "3 Ağustos 2026",
    iso: "2026-08-03",
    image: "/certificates/guvenlik-duvarina-giris-btk.jpg",
    file: "/certificates/guvenlik-duvarina-giris-btk.pdf",
  },
  {
    title: "SIEM Temelleri",
    issuer: "BTK Akademi",
    date: "3 Ağustos 2026",
    iso: "2026-08-03",
    image: "/certificates/siem-temelleri-btk.jpg",
    file: "/certificates/siem-temelleri-btk.pdf",
  },
  {
    title: "DevOps Çözümleri (Jenkins)",
    issuer: "BTK Akademi",
    date: "29 Temmuz 2026",
    iso: "2026-07-29",
    image: "/certificates/devops-jenkins-btk.jpg",
    file: "/certificates/devops-jenkins-btk.pdf",
  },
  {
    title: "Prompt Mühendisliği",
    issuer: "BTK Akademi",
    date: "26 Temmuz 2026",
    iso: "2026-07-26",
    image: "/certificates/prompt-muhendisligi-btk.jpg",
    file: "/certificates/prompt-muhendisligi-btk.pdf",
  },
  {
    title: "Bilgi Teknolojilerine Giriş",
    issuer: "BTK Akademi",
    date: "19 Haziran 2026",
    iso: "2026-06-19",
    image: "/certificates/bilgi-teknolojilerine-giris-btk.jpg",
    file: "/certificates/bilgi-teknolojilerine-giris-btk.pdf",
  },
  {
    title: "Claude Code 101",
    issuer: "Anthropic",
    date: "27 Nisan 2026",
    iso: "2026-04-27",
    image: "/certificates/anthropic-education-2.jpg",
    file: "/certificates/anthropic-education-2.pdf",
  },
  {
    title: "Bilgisayar Ağlarına Giriş",
    issuer: "BTK Akademi",
    date: "26 Nisan 2026",
    iso: "2026-04-26",
    image: "/certificates/bilgisayar-aglarina-giris-btk.jpg",
    file: "/certificates/bilgisayar-aglarina-giris-btk.pdf",
  },
  {
    title: "Etkili İletişim Stratejileri",
    issuer: "BTK Akademi",
    date: "26 Nisan 2026",
    iso: "2026-04-26",
    image: "/certificates/etkili-iletisim-stratejileri-btk.jpg",
    file: "/certificates/etkili-iletisim-stratejileri-btk.pdf",
  },
  {
    title: "Anthropic Claude",
    issuer: "BTK Akademi",
    date: "18 Nisan 2026",
    iso: "2026-04-18",
    image: "/certificates/anthropic-claude-btk.jpg",
    file: "/certificates/anthropic-claude-btk.pdf",
  },
  {
    title: "Ağ Temelleri",
    issuer: "BTK Akademi",
    date: "18 Nisan 2026",
    iso: "2026-04-18",
    image: "/certificates/ag-temelleri-btk.jpg",
    file: "/certificates/ag-temelleri-btk.pdf",
  },
  {
    title: "İletişim ve Network Yönetimi",
    issuer: "BTK Akademi",
    date: "18 Nisan 2026",
    iso: "2026-04-18",
    image: "/certificates/iletisim-network-yonetimi-btk.jpg",
    file: "/certificates/iletisim-network-yonetimi-btk.pdf",
  },
  {
    title: "Backend Web Development Path — Beginner Java (Java 101)",
    issuer: "Patika.dev",
    date: "8 Nisan 2026",
    iso: "2026-04-08",
    image: "/certificates/patika-java101.jpg",
    file: "/certificates/patika-java101.pdf",
    url: "https://academy.patika.dev/certificates/NroKxICs",
  },
  {
    title: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic",
    date: "25 Mart 2026",
    iso: "2026-03-25",
    image: "/certificates/anthropic-education-1.jpg",
    file: "/certificates/anthropic-education-1.pdf",
  },
];
