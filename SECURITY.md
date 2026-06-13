# Güvenlik Politikası / Security Policy

## Güvenlik açığı bildirimi / Reporting a vulnerability

Bir güvenlik açığı bulursan **lütfen herkese açık bir issue açma.**
Bunun yerine GitHub'ın özel bildirim akışını kullan:
**Repo → Security → Report a vulnerability** (GitHub Security Advisories).

Please do **not** open a public issue for security reports — use GitHub's
private "Report a vulnerability" flow instead.

Mümkünse şunları paylaş / Please include where possible:
- Etkilenen bölüm / affected area
- Yeniden üretme adımları / steps to reproduce
- Olası etki / potential impact

## Sırlar / Secrets

- Bu depoda hiçbir API anahtarı, şifre veya gizli değer **bulunmaz** ve
  bulunmamalıdır.
- Tüm sırlar ortam değişkenleriyle tutulur: yerelde `.env.local`, dağıtımda
  Vercel ortam değişkenleri. `.env*` dosyaları git tarafından yok sayılır
  (yalnızca `.env.example` şablonu izlenir).
- "Yapay Alper" sohbet asistanının `ANTHROPIC_API_KEY` değeri **yalnızca
  sunucu tarafında** kullanılır; tarayıcıya asla gönderilmez ve
  `NEXT_PUBLIC_` ön eki ile tanımlanmaz.

## Güvenlik başlıkları / Security headers

Tüm yanıtlar `next.config.ts` üzerinden şu başlıklarla servis edilir:
Content-Security-Policy, X-Content-Type-Options, X-Frame-Options,
Referrer-Policy, Permissions-Policy, Strict-Transport-Security.

## Bilinen, istismar edilemez uyarı / Known non-exploitable advisory

`npm audit`, Next.js'in paketlediği eski bir `postcss` sürümü nedeniyle 2
"moderate" uyarı gösterir (CSS stringify XSS — GHSA-qx2v-qp2m-jg93). Bu açık
yalnızca **güvenilmeyen CSS işlenirken** geçerlidir; bu projede yalnızca
kendi ve Tailwind CSS'i **derleme anında** işlenir, dolayısıyla istismar
edilemez. `npm audit fix --force` Next'i çok eski bir sürüme düşüreceği için
uygulanmaz; uyarı, Next.js güncellemeleriyle kapanacaktır.
