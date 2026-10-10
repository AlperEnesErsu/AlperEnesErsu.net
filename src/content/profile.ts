/**
 * Kişisel bilgiler — her şeyi buradan kolayca düzenleyebilirsin.
 * Hero, Hakkımda, Deneyim ve İletişim bu dosyayı kullanır.
 */
export const profile = {
  name: "Alper Enes Ersü",

  /** Hero üstündeki küçük rozet — kısa durum/etiket */
  status: "Yeni projelere ve iş birliklerine açık",

  /** Tek satırlık rol/başlık */
  headline: "Bilgisayar Mühendisliği öğrencisi & yazılım geliştirici",

  /** Kısa tanıtım (1–2 cümle) */
  intro:
    "Türk Hava Kurumu Üniversitesi'nde 3. sınıf Bilgisayar Mühendisliği öğrencisiyim. Fikirleri uçtan uca çalışan ürünlere dönüştürüyor, şirketlerin yapay zekâyı iş süreçlerine güvenle taşımasına yardım etmeyi seviyorum.",

  /** Hero altındaki kısa sayılar — yalnızca doğrulanabilir olanlar */
  highlights: [
    { value: "15+", label: "proje" },
    { value: "2", label: "staj deneyimi" },
    { value: "1", label: "canlıdaki müşteri projesi" },
  ],

  /** Özgeçmiş (public/ altında) */
  cv: "/cv/Alper-Enes-Ersu-CV.pdf",

  about: {
    /** Bio paragrafları (istediğin kadar ekle/çıkar) */
    paragraphs: [
      "Türk Hava Kurumu Üniversitesi'nde (Ankara) 3. sınıf Bilgisayar Mühendisliği öğrencisiyim. Web, mobil, masaüstü ve güvenlik tarafında gerçek kullanıcıya ulaşan projeler geliştiriyorum.",
      "Şu sıralar POSINOWA'daki uzaktan stajıma devam ediyorum. Ekiple birlikte AISigner'ı geliştiriyorum; kodu yazmak kadar, o kodun nasıl gözden geçirilip güvenle yayına çıktığını da önemsiyorum. Zorunlu stajımı YÖK Bilgi İşlem Dairesi Başkanlığı'nda yaptım ve kurumsal ölçekte bir altyapının içeriden nasıl işlediğini orada gördüm. Okul ve staj dışında gerçek müşterilerle de çalışıyorum: son olarak, siparişlerini WhatsApp yazışmalarıyla yürüten bir toptancı firmayı kendi platformuna taşıdık.",
      "En çok keyif aldığım iş: bir şirketin süreçlerini anlayıp yapay zekâyı doğru yere, ölçülebilir ve güvenli biçimde yerleştirmek. Bir problemi tasarımdan koda, testten yayına kadar uçtan uca çözmek beni heyecanlandırıyor.",
    ],

    /** "Odak alanım" kartı */
    focus: {
      title: "Kurumsal yapay zekâ dönüşümü",
      text: "Yapay zekâyı bir oyuncak olarak değil, iş akışının parçası olarak görüyorum: önce süreci ölç, sonra otomasyonu insan onayıyla ekle.",
      points: [
        "Süreç analizi: PDF, WhatsApp ve Excel'e dağılmış işleri tek sisteme toplamak",
        "LLM entegrasyonu: RAG, çok sağlayıcılı modeller, açık izin ve veri gizliliği",
        "İnsan onaylı otomasyon: AI önerir, doğrular, karar insanda kalır",
        "Ölçülebilirlik: Model görüşü ile gerçek ölçümü ayrı tutmak",
      ],
    },

    /** Beceriler / teknolojiler (rozet olarak listelenir) */
    skills: [
      "TypeScript",
      "Python",
      "Java",
      "C# / .NET",
      "Ruby",
      "Dart",
      "SQL",
      "React",
      "Next.js",
      "NestJS",
      "Node.js",
      "Flask",
      "Flutter",
      "React Native",
      "Capacitor",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "Supabase",
      "Firebase",
      "LLM / RAG",
      "Docker",
      "GitHub Actions",
      "Playwright",
    ],
  },

  /** Deneyim — en yeni en üstte */
  experience: [
    {
      role: "Yazılım Geliştirme Stajyeri",
      org: "POSINOWA",
      type: "Uzaktan staj",
      period: "2026 — Devam ediyor",
      current: true,
      points: [
        "AISigner (öğrenci–mentör eşleştirme platformu) üzerinde 290+ commit: rol bazlı paneller, kayıt akışı, güvenlik güncellemeleri",
        "Ekip için issue → branch → PR → CI → merge akışını, ruleset'leri ve şablonları belgeledim (ProjectLead)",
        "Şirket sitesinin hareket odaklı yeniden tasarımı (Posinowa Web Redesign)",
      ],
    },
    {
      role: "Serbest Geliştirici",
      org: "GMS Toptan",
      type: "Müşteri projesi",
      period: "2026",
      current: false,
      link: "https://gmstoptan.com",
      points: [
        "Küçük ev aletleri toptancısı için sipariş + katalog platformu ve yönetim paneli — canlıda",
        "PDF fiyat listesi ve WhatsApp yazışmasıyla yürüyen süreci tek bir sisteme taşıdık",
        "Next.js, NestJS, PostgreSQL (Neon); Playwright uçtan uca ve axe erişilebilirlik testleri",
      ],
    },
    {
      role: "Bilgi İşlem Stajyeri",
      org: "YÖK — Bilgi İşlem Dairesi Başkanlığı",
      type: "Zorunlu staj",
      period: "Yaz 2026",
      current: false,
      points: [
        "Kurumsal ölçekte BT operasyonları ve büyük ölçekli sistem mimarileriyle çalıştım",
        "Ağ, sunucu ve güvenlik altyapısı; Linux, Active Directory ve Jenkins üzerine uygulamalı çalışmalar",
      ],
    },
  ],

  social: {
    github: "https://github.com/AlperEnesErsu",
    linkedin: "https://www.linkedin.com/in/alper-enes-ers%C3%BC-4a0176321/",
    /** Herkese açık iletişim e-postası (GitHub profilinde de açık). */
    email: "alperenesersu.b@gmail.com",
    /** ⚠️ Herkese açık sitede görünür — istemezsen "" yap. */
    phone: "0553 414 0325",
    /** tel: ve wa.me için: ülke kodu + numara, başında + veya 0 olmadan. */
    phoneIntl: "905534140325",
    location: "Ankara, Türkiye",
  },
} as const;
