export type Certificate = {
  title: string;
  issuer: string;
  /** Kartta görünen tarih */
  date: string;
  /** Sıralama için ISO tarih */
  iso: string;
  /** public/ altındaki PDF yolu */
  file: string;
  /** Varsa doğrulama linki */
  url?: string;
};

/**
 * Sertifikalar — en yeni en üstte. PDF'ler `public/certificates/` altında.
 *
 * ⚠️ TODO: Anthropic Education'daki iki sertifikanın KESİN kurs adını ekle
 * (PDF görsel tabanlı olduğu için başlık metinden okunamadı).
 */
export const certificates: Certificate[] = [
  {
    title: "Anthropic Education Sertifikası",
    issuer: "Anthropic Education",
    date: "27 Nisan 2026",
    iso: "2026-04-27",
    file: "/certificates/anthropic-education-2.pdf",
  },
  {
    title: "Bilgisayar Ağlarına Giriş",
    issuer: "BTK Akademi",
    date: "26 Nisan 2026",
    iso: "2026-04-26",
    file: "/certificates/bilgisayar-aglarina-giris-btk.pdf",
  },
  {
    title: "Etkili İletişim Stratejileri",
    issuer: "BTK Akademi",
    date: "26 Nisan 2026",
    iso: "2026-04-26",
    file: "/certificates/etkili-iletisim-stratejileri-btk.pdf",
  },
  {
    title: "Anthropic Claude",
    issuer: "BTK Akademi",
    date: "18 Nisan 2026",
    iso: "2026-04-18",
    file: "/certificates/anthropic-claude-btk.pdf",
  },
  {
    title: "Ağ Temelleri",
    issuer: "BTK Akademi",
    date: "18 Nisan 2026",
    iso: "2026-04-18",
    file: "/certificates/ag-temelleri-btk.pdf",
  },
  {
    title: "İletişim ve Network Yönetimi",
    issuer: "BTK Akademi",
    date: "18 Nisan 2026",
    iso: "2026-04-18",
    file: "/certificates/iletisim-network-yonetimi-btk.pdf",
  },
  {
    title: "Backend Web Development Path — Beginner Java (Java 101)",
    issuer: "Patika.dev",
    date: "8 Nisan 2026",
    iso: "2026-04-08",
    file: "/certificates/patika-java101.pdf",
    url: "https://academy.patika.dev/certificates/NroKxICs",
  },
  {
    title: "Anthropic Education Sertifikası",
    issuer: "Anthropic Education",
    date: "25 Mart 2026",
    iso: "2026-03-25",
    file: "/certificates/anthropic-education-1.pdf",
  },
];
