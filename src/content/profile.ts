/**
 * Kişisel bilgiler — her şeyi buradan kolayca düzenleyebilirsin.
 * Hero, Hakkımda ve İletişim bu dosyayı kullanır.
 */
export const profile = {
  name: "Alper Enes Ersü",

  /** Hero üstündeki küçük rozet — kısa durum/etiket */
  status: "Staj fırsatlarına açık",

  /** Tek satırlık rol/başlık */
  headline: "Bilgisayar Mühendisliği öğrencisi & yazılım geliştirici",

  /** Kısa tanıtım (1–2 cümle) */
  intro:
    "Türk Hava Kurumu Üniversitesi'nde Bilgisayar Mühendisliği öğrencisiyim. Web ve mobil tarafında, fikirleri uçtan uca çalışan ürünlere dönüştürmeyi seviyorum.",

  /** Özgeçmiş (public/ altında) */
  cv: "/cv/Alper-Enes-Ersu-CV.pdf",

  about: {
    /** Bio paragrafları (istediğin kadar ekle/çıkar) */
    paragraphs: [
      "Türk Hava Kurumu Üniversitesi'nde (Ankara) ikinci sınıf Bilgisayar Mühendisliği öğrencisiyim. Java, Python, Flutter ve modern web teknolojileriyle gerçek projeler geliştiriyor, staj fırsatları arıyorum.",
      "POSINOWA'da 6 ay süren uzaktan, staj benzeri bir yazılım geliştirme deneyimim oldu; burada takımla AISigner adlı full-stack mentörlük platformunu (Next.js + PostgreSQL + Prisma) geliştirdim.",
      "Web (Next.js / React / Node.js) ve mobil (Flutter) tarafında çalışıyorum. Bir problemi tasarımdan koda kadar uçtan uca çözmek beni heyecanlandırıyor; sürekli yeni şeyler öğrenip kendimi geliştiriyorum.",
    ],

    /** Beceriler / teknolojiler (rozet olarak listelenir) */
    skills: [
      "Java",
      "Python",
      "TypeScript",
      "Dart",
      "SQL",
      "React",
      "Next.js",
      "Node.js",
      "Flutter",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "Firebase",
      "Docker",
      "Git & GitHub",
    ],
  },

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
