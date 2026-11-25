import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

/**
 * İçerik Güvenliği Politikası (CSP).
 *
 * - `'unsafe-inline'` script için Next'in hydration/streaming satır içi
 *   script'leri, style için Tailwind/Motion satır içi stilleri yüzünden gerekli.
 * - `'unsafe-eval'` ve `ws:` yalnızca geliştirme sunucusunun (Turbopack HMR)
 *   ihtiyacı; production'a dahil edilmez.
 * - GitHub istatistikleri sunucu tarafında çekildiği için tarayıcıdan dış
 *   bağlantı gerekmez → `connect-src 'self'`.
 */
const csp = [
  `default-src 'self'`,
  `base-uri 'self'`,
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  `style-src 'self' 'unsafe-inline'`,
  `img-src 'self' data: blob:`,
  `font-src 'self'`,
  `connect-src 'self'${isDev ? " ws: wss:" : ""}`,
  `form-action 'self'`,
  `frame-ancestors 'none'`,
  `object-src 'none'`,
  `upgrade-insecure-requests`,
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

/**
 * Oyunlar (`public/oyunlar/`): aynı politikalar, tek fark sitenin kendisinin onları
 * çerçeveye alabilmesi (Projeler'deki "Deneyimle" penceresi oyunu canlı gösterir).
 * Next'te aynı anahtarı ayarlayan sonraki kural öncekini ezer.
 */
const gameCsp = csp.replace(`frame-ancestors 'none'`, `frame-ancestors 'self'`);
const gameHeaders = [
  { key: "Content-Security-Policy", value: gameCsp },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      { source: "/oyunlar/:path*", headers: gameHeaders },
      // SiberOkul (public/siberokul/) da "Deneyimle" penceresinde çerçevelenir.
      { source: "/siberokul/:path*", headers: gameHeaders },
    ];
  },
  /**
   * SiberOkul statik bir site: her sayfa bir klasörün index.html'i (/siberokul/dersler/linux-001/).
   * Netlify bunları CDN'den kendisi sunar; bu kural yalnız `next dev`/`next start` içindir. afterFiles
   * olduğu için önce gerçek dosyalar (CSS/JS) eşleşir, kalan klasör adresleri index.html'e gider.
   */
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [
        { source: "/siberokul", destination: "/siberokul/index.html" },
        { source: "/siberokul/:path*", destination: "/siberokul/:path*/index.html" },
      ],
      fallback: [],
    };
  },
};

export default nextConfig;
