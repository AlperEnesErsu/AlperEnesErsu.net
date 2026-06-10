/**
 * Kişisel bilgiler — her şeyi buradan kolayca düzenleyebilirsin.
 * Hero, Hakkımda (ve ileride İletişim) bu dosyayı kullanır.
 */
export const profile = {
  name: "Alper Enes Ersü",

  /** Hero üstündeki küçük rozet — kısa durum/etiket */
  status: "Yazılım & Yapay Zeka",

  /** Tek satırlık rol/başlık */
  headline: "Yazılım geliştirici & yapay zeka meraklısı",

  /** Kısa tanıtım (1–2 cümle) */
  intro:
    "Fikirleri çalışan ürünlere dönüştürmeyi seviyorum; web ile yapay zekânın kesiştiği yerde projeler geliştiriyorum.",

  /**
   * Hakkımda bölümü.
   * ⚠️ Aşağıdaki metinler PLACEHOLDER — lütfen kendine göre düzenle.
   */
  about: {
    /** Bio paragrafları (istediğin kadar ekle/çıkar) */
    paragraphs: [
      "Merhaba! Ben Alper — yazılım geliştirmeye ve yapay zekâya tutkuyla bağlı biriyim. Yeni teknolojiler öğrenmeyi ve öğrendiklerimi gerçek projelere dönüştürmeyi seviyorum.",
      "Özellikle web geliştirme ve yapay zekâ uygulamaları üzerine çalışıyorum. Bir problemi tasarımdan koda kadar uçtan uca çözüp ortaya çalışan bir ürün koymak beni heyecanlandırıyor.",
      "Boş zamanlarımda yeni araçlar deniyor, açık kaynak projeleri inceliyor ve kendimi sürekli geliştirmeye çalışıyorum.",
    ],

    /** Beceriler / teknolojiler (rozet olarak listelenir) */
    skills: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "Java",
      "Tailwind CSS",
      "Yapay Zeka / LLM",
      "Git & GitHub",
    ],
  },

  social: {
    github: "https://github.com/AlperEnesErsu",
    // linkedin: "https://www.linkedin.com/in/...",
    // email: "alperenesersu@gmail.com",
  },
} as const;
