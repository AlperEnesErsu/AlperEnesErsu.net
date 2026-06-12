export type ProjectStatus =
  | "demo-soon"
  | "open-source"
  | "private"
  | "in-dev"
  | "concept";

export type Project = {
  slug: string;
  title: string;
  /** Tek satırlık özet */
  tagline: string;
  /** Tanıtım paragrafları (problem → çözüm) */
  description: string[];
  tech: string[];
  /** public/ altındaki görsel */
  image?: string;
  /** "owner/name" — herkese açık repolarda canlı GitHub istatistiği çekilir */
  repo?: string;
  github?: string;
  /** Canlı demo linki (deploy edilince dolacak) */
  demo?: string;
  status: ProjectStatus;
  featured: boolean;
  platforms?: string[];
};

export const projects: Project[] = [
  {
    slug: "sezai",
    title: "SezAI",
    tagline: "Yapay zekâ destekli bitki hastalığı teşhisi",
    description: [
      "Çiftçinin tarlada uzmana erişimi yok; hastalığı geç fark etmek mahsulü götürüyor. SezAI bu problemi tek fotoğrafa indiriyor: yaprağın fotoğrafını çek, ~10 saniyede teşhisi al.",
      "Teşhisle birlikte doğru ilacı öneriyor ve en yakın bayiyi gösteriyor. Web sürümünün yanında React Native ile mobil sürümü de geliştiriyorum.",
    ],
    tech: ["React", "TypeScript", "Tailwind v4", "Supabase", "React Query", "React Native"],
    image: "/projects/sezai.png",
    status: "demo-soon",
    featured: true,
    platforms: ["Web", "Mobil"],
  },
  {
    slug: "scrapemind",
    title: "ScrapeMind",
    tagline: "Akademik makale ve haberlerden AI destekli günlük bilgi özeti",
    description: [
      "İnternet her gün milyonlarca içerikle büyüyor; anlamlı bilgiye ulaşmak giderek zorlaşıyor. ScrapeMind, ilgi alanlarına göre güncel haberleri ve akademik makaleleri (arXiv, Semantic Scholar, PubMed…) otomatik topluyor.",
      "Topladıklarını özetleyip sınıflandırıyor ve kullanıcıya günlük bir “bilgi özeti” olarak sunuyor. Auth, RBAC, i18n (TR/EN) ve denetim kaydı içeren kendi Flask çekirdeğimin üzerine inşa ettim.",
    ],
    tech: ["Python", "Flask 3", "SQLAlchemy 2", "Alembic", "pytest", "Flask-Babel"],
    image: "/projects/scrapemind.png",
    repo: "AlperEnesErsu/ScrapeMind",
    github: "https://github.com/AlperEnesErsu/ScrapeMind",
    status: "open-source",
    featured: true,
  },
  {
    slug: "flow",
    title: "Flow",
    tagline: "Çevrimdışı çalışan kişisel verimlilik PWA'sı",
    description: [
      "Günlük planlama, hedef takibi, tamamlananlar arşivi ve sağlık/ekran süresi istatistikleri — hepsi tek uygulamada.",
      "Veriler tamamen cihazda tutuluyor (IndexedDB): internetsiz çalışıyor, hesap istemiyor. iPad'de “Ana Ekrana Ekle” ile native uygulama gibi davranıyor.",
    ],
    tech: ["React 18", "TypeScript", "Vite", "Tailwind", "Dexie (IndexedDB)", "Recharts", "PWA"],
    image: "/projects/flow.png",
    status: "demo-soon",
    featured: true,
  },
  {
    slug: "sezai-mobile",
    title: "SezAI Mobile",
    tagline: "SezAI'nin React Native mobil uygulaması",
    description: [
      "SezAI'yi tarlada en çok kullanılacağı yere, telefona taşıyorum: fotoğraf çek, teşhisi ve ilaç önerisini cebinden al. Expo ile geliştiriliyor; yeni özellikler eklendikçe burası da güncellenecek.",
    ],
    tech: ["React Native", "Expo", "TypeScript"],
    image: "/projects/sezai-mobile.png",
    status: "in-dev",
    featured: false,
    platforms: ["Mobil"],
  },
  {
    slug: "aloah",
    title: "Aloah.co",
    tagline: "Yaşlılar, gezginler ve esnafı buluşturan AI destekli yerel keşif fikri",
    description: [
      "Yaşlıların telefon rehberinden tek dokunuşla yakınındaki güvenilir esnafa ulaşması, şehre yeni gelenlerin çevreye hızla adapte olması ve küçük esnafın komisyonsuz görünürlük kazanması için tasarladığım uygulama konsepti. Şimdilik fikir aşamasında.",
    ],
    tech: ["Ürün tasarımı", "Yapay zekâ"],
    image: "/projects/aloah.jpg",
    status: "concept",
    featured: false,
  },
  {
    slug: "aisigner",
    title: "AISigner",
    tagline: "Stajyer–mentör eşleştirme ve AI destekli öğrenme yol haritası",
    description: [
      "Öğrencileri kısa bir anketle analiz edip uygun mentörle eşleştiren, ardından AI ile kişisel öğrenme yol haritası üreten açık kaynak platform. Katkıda bulunduğum bir takım projesi.",
    ],
    tech: ["React", "TypeScript", "Docker", "PostgreSQL"],
    image: "/projects/aisigner.png",
    github: "https://github.com/AlperEnesErsu/AISigner",
    status: "open-source",
    featured: false,
  },
  {
    slug: "kitapyurdu-redesign",
    title: "KitapYurdu Redesign",
    tagline: "Mevcut sitelerin arayüzünü modernize etme denemeleri",
    description: [
      "Tasarımı eskimiş siteleri ele alıp daha modern ve kullanışlı arayüzlerle yeniden tasarladığım deneme serisi. İlk konuk: KitapYurdu.",
    ],
    tech: ["React", "UI/UX"],
    image: "/projects/kitapyurdu.png",
    repo: "AlperEnesErsu/Web-Design",
    github: "https://github.com/AlperEnesErsu/Web-Design",
    status: "open-source",
    featured: false,
  },
  {
    slug: "alperenesersu-net",
    title: "AlperEnesErsu.net",
    tagline: "Bu site — animasyonlu portföy + Yapay Alper",
    description: [
      "Şu an gezdiğin site. Günlük PR'larla, her gün bir bölüm ekleyerek geliştiriyorum; yakında Claude destekli “Yapay Alper” sohbet asistanı eklenecek.",
    ],
    tech: ["Next.js 16", "TypeScript", "Tailwind v4", "Motion", "Claude API"],
    image: "/projects/site.png",
    repo: "AlperEnesErsu/AlperEnesErsu.net",
    github: "https://github.com/AlperEnesErsu/AlperEnesErsu.net",
    status: "open-source",
    featured: false,
  },
];
