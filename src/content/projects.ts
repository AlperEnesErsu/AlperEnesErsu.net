export type ProjectStatus =
  | "live"
  | "demo-soon"
  | "open-source"
  | "private"
  | "in-dev"
  | "concept";

/** Projeler bölümündeki filtre çipleri */
export type ProjectCategory = "Yapay Zekâ" | "Web" | "Mobil" | "Güvenlik" | "Masaüstü";

export const projectCategories: ProjectCategory[] = [
  "Yapay Zekâ",
  "Web",
  "Mobil",
  "Güvenlik",
  "Masaüstü",
];

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
  categories: ProjectCategory[];
};

export const projects: Project[] = [
  {
    slug: "gms-toptan",
    title: "GMS Toptan",
    tagline: "Toptancı firma için sipariş, katalog ve yönetim platformu",
    description: [
      "Firma toptan satışı herkesin bildiği düzenle yürütüyordu: fiyat listesi PDF olarak gidiyor, sipariş WhatsApp'ta yazışılarak alınıyor, stok bir yerde, fiyat başka bir yerde duruyordu. Müşterinin kendi başına inceleyip sipariş verebileceği, firmanın da her şeyi kendisi yönetebileceği tek bir yer kurduk — bugün canlıda.",
      "Hızlı sipariş tablosu, adet aralığına göre kademeli fiyat, faturalı/faturasız KDV hesabı, tek dokunuşla WhatsApp sipariş özeti ve her indirmede güncel Excel fiyat listesi var. Yönetim panelinden ürün, kategori, vitrin, stok, müşteri hesapları ve pazarlamacı takibi yapılıyor. Mobil öncelikli; her değişiklikte Playwright uçtan uca ve axe erişilebilirlik testleri çalışıyor.",
    ],
    tech: ["Next.js", "NestJS", "PostgreSQL (Neon)", "Prisma", "Cloudinary", "Playwright"],
    image: "/projects/gms-toptan.png",
    demo: "https://gmstoptan.com",
    status: "live",
    featured: true,
    platforms: ["Web"],
    categories: ["Web"],
  },
  {
    slug: "gitshield",
    title: "GitShield",
    tagline: "AI destekli PR güvenlik denetçisi ve otomatik düzeltme motoru",
    description: [
      "Klasik statik analiz araçları geliştiricinin önüne yüzlerce uyarı yığar, çoğu da kapatılıp geçilir. GitShield yalnızca PR'daki değişen satırları tarar: regex + Shannon entropisiyle sızdırılmış anahtarları, OWASP kurallarıyla SQL injection, eval ve komut enjeksiyonu gibi açıkları yakalar ve LLM ile uygulanabilir bir düzeltme diff'i üretir.",
      "Terminalde, GitHub Action olarak ya da web panelinde çalışıyor. Panel, erişimin olan tüm repolardaki PR'ları AI ile inceliyor, review'u ikinci bir LLM geçişiyle doğruluyor ve yalnızca senin onayınla PR'a gönderiyor. Bekleyenler kutusu, açıklamalı risk skoru, klavyeyle hızlı onay modu ve SARIF çıktısı var.",
    ],
    tech: ["Python", "Typer", "Pydantic", "FastAPI", "React", "LLM", "GitHub API", "SARIF"],
    image: "/projects/gitshield.png",
    repo: "AlperEnesErsu/GitShield",
    github: "https://github.com/AlperEnesErsu/GitShield",
    status: "open-source",
    featured: true,
    platforms: ["CLI", "Web"],
    categories: ["Yapay Zekâ", "Güvenlik"],
  },
  {
    slug: "aetheria-ai",
    title: "Aetheria.ai",
    tagline: "Proje fikri üreten ve fikrini ölçerek değerlendiren AI aracı",
    description: [
      "Seçtiğin alanda sıfırdan yazılım proje fikri üretiyor; beğendiğin fikrin Clean Architecture sistem mimarisini ve güvenlik tasarımını çıkarıp Markdown rapor olarak veriyor. İlk sürüm hep aynı beş fikrin etrafında dönüyordu; üretimi iki aşamaya bölüp her isteğe farklı bir kısıt kombinasyonu (625 bileşim) vererek 24 üretimde 24 farklı başlık elde ettim.",
      "Yeni “Fikrimi Değerlendir” modu, senin fikrini değiştirmeden dört kriterle inceliyor. Kanıt ve uygulanabilirlik OpenAlex, Wikidata ve GitHub'a giden gerçek sorgularla ölçülüyor; pazar ve zamanlama ise açıkça “model görüşü” olarak etiketleniyor — yanıltıcı bir birleşik puan yok. Sunucu yok, anahtarın tarayıcından çıkmıyor; 289 test bu kuralları zorluyor.",
    ],
    tech: ["JavaScript", "Gemini API", "Claude API", "OpenAlex", "Wikidata", "node:test"],
    image: "/projects/aetheria.png",
    repo: "AlperEnesErsu/Aetheria.ai",
    github: "https://github.com/AlperEnesErsu/Aetheria.ai",
    status: "open-source",
    featured: true,
    platforms: ["Web"],
    categories: ["Yapay Zekâ", "Web"],
  },
  {
    slug: "flow",
    title: "Flow",
    tagline: "Hedef, alışkanlık ve odak takibini birleştiren verimlilik uygulaması",
    description: [
      "Hedeflerim bir uygulamada, alışkanlıklarım başka birinde, notlarım üçüncüsündeydi. Flow hepsini tek yerde topluyor: hedef → alt görev akışı, alışkanlık serileri, Pomodoro odak oturumları, günlük, YKS ve sporcu modları, ısı haritası ve eğilimlerle gerçek istatistikler, arkadaşlarla meydan okumalar.",
      "Flow AI ile sohbet ederek plan çıkarabiliyorsun; veriler modele gönderilmeden önce açık izin isteniyor. Offline-first ve iki dilli; Capacitor ile iOS ve Android'e paketlendi, şu an mağaza yayınına hazırlanıyor.",
    ],
    tech: ["React", "TypeScript", "Capacitor", "Supabase", "Dexie (IndexedDB)", "Gemini"],
    image: "/projects/flow.png",
    status: "demo-soon",
    featured: true,
    platforms: ["iOS", "Android", "Web"],
    categories: ["Mobil", "Yapay Zekâ"],
  },
  {
    slug: "scrapemind",
    title: "ScrapeMind",
    tagline: "Makale, haber, video ve patentlerden AI destekli kişisel bilgi özeti",
    description: [
      "Anlamlı bilgiye ulaşmak her gün zorlaşıyor. ScrapeMind ilgi alanlarına göre arXiv, Semantic Scholar, PubMed, OpenAlex ve Crossref'ten makaleleri; RSS ve Bluesky'den haberleri; takip ettiğin YouTube kanallarının videolarını (transkript özetiyle) ve EPO/USPTO patentlerini topluyor, özetliyor ve günlük bir bilgi özeti olarak sunuyor.",
      "pgvector ile gerçek RAG ve semantik arama, atıf grafiği, dergi kalite katmanı ve yazar takibi var. Celery + Redis arka plan işleri, çok sağlayıcılı LLM (OpenRouter, Ollama, Anthropic) ve Auth / RBAC / 2FA / i18n içeren kendi Flask çekirdeğim üzerinde; 100+ PR'la geliştirildi.",
    ],
    tech: ["Python", "Flask 3", "PostgreSQL + pgvector", "Celery", "Redis", "HTMX", "pytest"],
    image: "/projects/scrapemind.png",
    repo: "AlperEnesErsu/ScrapeMind",
    github: "https://github.com/AlperEnesErsu/ScrapeMind",
    status: "open-source",
    featured: true,
    platforms: ["Web"],
    categories: ["Yapay Zekâ", "Web"],
  },
  {
    slug: "sweeply",
    title: "Sweeply",
    tagline: "Tek tıkla, güvenli ve şeffaf Windows temizliği",
    description: [
      "Laptopum yavaşladığında 40 GB Docker build cache, 10 GB unutulmuş geçici dosya ve 2 GB npm önbelleği buldum. “PC optimizer” kurmak yerine kendi aracımı yazdım: neyi sileceğini önceden gösteren, tarayıcı geçmişine, çerezlere ve şifrelere dokunmayan, geliştirici önbelleklerini (npm, pnpm, pip, NuGet, Docker) de temizleyen bir uygulama.",
      "RAM'i kimin kullandığını gösteriyor ama kapatma kararını sana bırakıyor. Tek .exe: kurulum, arka plan servisi, telemetri ve reklam yok. Her silme kuralı sahte bir kullanıcı klasörü üzerinde 69 birim testiyle doğrulanıyor.",
    ],
    tech: ["C#", ".NET 8", "WPF", "xUnit"],
    image: "/projects/sweeply.png",
    repo: "AlperEnesErsu/Sweeply",
    github: "https://github.com/AlperEnesErsu/Sweeply",
    status: "open-source",
    featured: false,
    platforms: ["Windows"],
    categories: ["Masaüstü"],
  },
  {
    slug: "logsentry",
    title: "LogSentry",
    tagline: "Ruby ile sıfırdan yazılmış mini SIEM",
    description: [
      "Splunk veya Wazuh gibi sistemlerin kaputunun altındaki mantığı elle kurarak öğrenmek için yazdım. Web sunucusu loglarını canlı izliyor; brute force, credential stuffing, flood, dizin taraması, SQLi, XSS ve tarama araçlarını kayan zaman pencereleriyle tespit edip kanıtıyla uyarı üretiyor.",
      "Uyarılar ekrana, JSONL'e ve Telegram'a gidiyor; arşiv hash zinciriyle kurcalamaya karşı korunuyor. SSE destekli web paneli, MITRE ATT&CK eşlemesi, Syslog/CEF yönlendirme ve 236 test var.",
    ],
    tech: ["Ruby", "Sinatra", "SQLite", "SSE", "MITRE ATT&CK"],
    image: "/projects/logsentry.png",
    repo: "AlperEnesErsu/LogSentry",
    github: "https://github.com/AlperEnesErsu/LogSentry",
    status: "open-source",
    featured: false,
    platforms: ["Sunucu", "Web"],
    categories: ["Güvenlik"],
  },
  {
    slug: "posinowa-redesign",
    title: "Posinowa Web Redesign",
    tagline: "posinowa.com kurumsal sitesinin hareket odaklı yeniden tasarımı",
    description: [
      "Staj yaptığım POSINOWA'nın kurumsal sitesini, mevcut içeriği koruyarak hareket odaklı yeniden tasarladım. Metinler, projeler ve görseller posinowa.com'dan alındı; uydurma içerik yok.",
      "Hero'daki küre d3'ün ortografik projeksiyonuyla canvas'a gerçek dünya çiziyor ve tek bir easeOutExpo eğrisiyle Ankara'da duruyor. Lenis ile yumuşak kaydırma, Reveal / SplitText / Magnetic / TiltCard gibi kendi hareket primitifleri ve derleme anında statik üretilen proje detay sayfaları var.",
    ],
    tech: ["Next.js 16", "TypeScript", "Tailwind v4", "Motion", "Lenis", "d3-geo"],
    image: "/projects/posinowa.png",
    status: "private",
    featured: false,
    platforms: ["Web"],
    categories: ["Web"],
  },
  {
    slug: "aisigner",
    title: "AISigner",
    tagline: "Öğrenci–mentör eşleştirme ve öğrenme yol haritası platformu",
    description: [
      "POSINOWA'da sürmekte olan stajım sırasında ekiple geliştirdiğim full-stack platform. Öğrencileri mentörlerle eşleştiriyor; rol bazlı paneller (Admin / Mentör / Öğrenci), NextAuth ile kimlik doğrulama, çok adımlı öğrenci kayıt akışı ve yol haritası adımları içeriyor.",
      "Prisma + PostgreSQL, Docker Compose ile dağıtım, Dependabot ve CI ile güncel tutulan bağımlılıklar. Projeye 290+ commit ile katkı verdim.",
    ],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "NextAuth", "Docker"],
    image: "/projects/aisigner.png",
    repo: "AlperEnesErsu/AISigner",
    github: "https://github.com/AlperEnesErsu/AISigner",
    status: "open-source",
    featured: false,
    platforms: ["Web"],
    categories: ["Web"],
  },
  {
    slug: "sezai",
    title: "SezAI",
    tagline: "Yapay zekâ destekli bitki hastalığı teşhisi",
    description: [
      "Çiftçinin tarlada uzmana erişimi yok; hastalığı geç fark etmek mahsulü götürüyor. SezAI bu problemi tek fotoğrafa indiriyor: yaprağın fotoğrafını çek, ~10 saniyede teşhisi al.",
      "Teşhisle birlikte doğru ilacı öneriyor ve en yakın bayiyi gösteriyor. Son sürümde kullanılmayan bileşen kütüphanesini ve 43 yetim bağımlılığı temizledim, animasyonlar için regresyon testleri ekledim.",
    ],
    tech: ["React", "TypeScript", "Tailwind v4", "Supabase", "React Query"],
    image: "/projects/sezai.png",
    status: "demo-soon",
    featured: false,
    platforms: ["Web", "Mobil"],
    categories: ["Yapay Zekâ", "Web"],
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
    categories: ["Mobil", "Yapay Zekâ"],
  },
  {
    slug: "aloah",
    title: "Aloah",
    tagline: "Toplulukları ve yerel esnafı buluşturan mobil uygulama",
    description: [
      "Yerel işletmeleri ve toplulukları; etkileşim ve karşılıklı destek için bir araya getiren bir mobil uygulama. Flutter ile iOS ve Android için arayüzü geliştirdim, gerçek zamanlı veri yönetimi için Firebase backend'ini entegre ettim.",
      "Takımla iteratif geliştirme döngülerinde çalıştım.",
    ],
    tech: ["Flutter", "Dart", "Firebase"],
    image: "/projects/aloah.png",
    status: "in-dev",
    featured: false,
    platforms: ["Mobil"],
    categories: ["Mobil"],
  },
  {
    slug: "kitapyurdu-redesign",
    title: "KitapYurdu Redesign",
    tagline: "AI kitap uyum analizli hi-fi interaktif prototip",
    description: [
      "Türkiye'nin köklü online kitapçısının arayüzünü “bugün nasıl görünürdü?” sorusuyla yeniden tasarladım: sıcak, editoryal bir tasarım dili ve 6 tam tıklanabilir sayfa (Ana Sayfa, Detay, Sepet, Ödeme, Profil, Keşfet).",
      "Öne çıkan özellik: okuma geçmişine ve favorilerine bakarak her kitabın sana ne kadar uyduğunu söyleyen AI destekli kitap uyum analizi.",
    ],
    tech: ["React", "HTML/CSS", "UI/UX"],
    image: "/projects/kitapyurdu.png",
    repo: "AlperEnesErsu/Web-Design",
    github: "https://github.com/AlperEnesErsu/Web-Design",
    status: "open-source",
    featured: false,
    platforms: ["Web"],
    categories: ["Web"],
  },
  {
    slug: "nekibuki",
    title: "NeKiBuKi",
    tagline: "Zor bulunan ürünler için masaüstü fiyat & stok takibi",
    description: [
      "Piyasada zor bulunan ürünleri CarrefourSA, Akakçe ve Trendyol gibi sitelerde periyodik tarayan bir masaüstü uygulaması. Hedef fiyatın altına düşen ya da stoğa geri gelen ürünler için bildirim gönderiyor; Tkinter arayüzüyle ürün yönetimi ve fiyat geçmişi grafiği sunuyor.",
      "Birçok sitenin bot koruması 403 döndürünce hibrit bir yapı kurdum: erişilebilen kaynaklardan doğrudan veri çekiliyor, erişilemeyenlerde kullanıcı doğru arama sayfasına yönlendiriliyor.",
    ],
    tech: ["Python", "Tkinter", "Web Scraping", "Veri Analizi"],
    image: "/projects/nekibuki.png",
    repo: "AlperEnesErsu/NeKiBuKi",
    github: "https://github.com/AlperEnesErsu/NeKiBuKi",
    status: "open-source",
    featured: false,
    platforms: ["Masaüstü"],
    categories: ["Masaüstü"],
  },
  {
    slug: "hospital-system",
    title: "Hospital Management System",
    tagline: "Hasta kayıt, randevu ve idari süreç yönetimi (üniversite projesi)",
    description: [
      "Hasta bakımı, tıbbi kayıtlar, randevular ve idari iş akışlarını ele alan kapsamlı bir hastane yönetim sistemi tasarımı ve uygulaması. Nesne yönelimli programlama ilkeleri ve veritabanı tasarımı iyi uygulamalarıyla, üniversite dersi kapsamında geliştirdim.",
    ],
    tech: ["Java", "OOP", "HTML", "UI Tasarımı"],
    image: "/projects/hospital-system.png",
    github: "https://github.com/AlperEnesErsu/Ceng201_HW_Assignment",
    status: "open-source",
    featured: false,
    categories: ["Masaüstü"],
  },
  {
    slug: "alperenesersu-net",
    title: "AlperEnesErsu.net",
    tagline: "Bu site — animasyonlu kişisel portföy",
    description: [
      "Şu an gezdiğin site. Her bölümü ayrı PR'larla geliştirdim: interaktif proje simülatörleri, canlı GitHub istatistikleri, sertifika galerisi ve sıkı güvenlik başlıkları (CSP, HSTS).",
    ],
    tech: ["Next.js 16", "TypeScript", "Tailwind v4", "Motion"],
    image: "/projects/site.png",
    repo: "AlperEnesErsu/AlperEnesErsu.net",
    github: "https://github.com/AlperEnesErsu/AlperEnesErsu.net",
    status: "open-source",
    featured: false,
    platforms: ["Web"],
    categories: ["Web"],
  },
];
