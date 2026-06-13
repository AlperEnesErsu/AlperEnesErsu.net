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

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
