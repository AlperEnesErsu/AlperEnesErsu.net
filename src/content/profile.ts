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
    /** ⚠️ LinkedIn URL'n otomatik bulunamadı — profilini buraya yapıştır, kart otomatik görünür. */
    linkedin: "",
    /** Herkese açık iletişim e-postası (GitHub profilinde de açık). */
    email: "alperenesersu.b@gmail.com",
    /** ⚠️ Herkese açık sitede görünür — istemezsen "" yap. */
    phone: "0553 414 0325",
    /** tel: ve wa.me için: ülke kodu + numara, başında + veya 0 olmadan. */
    phoneIntl: "905534140325",
    location: "Ankara, Türkiye",
  },
} as const;
