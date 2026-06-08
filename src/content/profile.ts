/**
 * Kişisel bilgiler — her şeyi buradan kolayca düzenleyebilirsin.
 * Hero (ve ileride Hakkımda / İletişim) bu dosyayı kullanır.
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

  social: {
    github: "https://github.com/AlperEnesErsu",
    // linkedin: "https://www.linkedin.com/in/...",
    // email: "alperenesersu@gmail.com",
  },
} as const;
