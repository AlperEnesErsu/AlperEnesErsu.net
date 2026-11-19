"use client";

import { useState, type FormEvent } from "react";

/**
 * Oyuncu istekleri: öneri, hata, görev fikri. Netlify Forms'a gider (sunucu kodu yok,
 * çerez yok, hesap yok). Netlify formu derlemede `public/__forms.html` içindeki kopyadan
 * tanır; alan adları ikisinde aynı olmalı. E-posta isteğe bağlıdır ve yalnız güncelleme
 * haberi istenirse sorulur.
 */
const FORM_NAME = "oyun-istek";

const kinds = [
  { value: "oneri", label: "Öneri" },
  { value: "hata", label: "Hata bildirimi" },
  { value: "gorev", label: "Görev / şehir fikri" },
  { value: "diger", label: "Diğer" },
];

type State = "idle" | "sending" | "sent" | "failed";

const field =
  "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

export function GameRequestForm() {
  const [state, setState] = useState<State>("idle");
  const [notify, setNotify] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (!notify) data.delete("email");
    setState("sending");
    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      if (!response.ok) throw new Error(String(response.status));
      form.reset();
      setNotify(false);
      setState("sent");
    } catch {
      setState("failed");
    }
  }

  return (
    <div className="rounded-2xl border border-border bg-surface p-6 card-elevated sm:p-8">
      <h3 className="font-display text-xl font-bold tracking-tight">İstek ve geri bildirim</h3>
      <p className="mt-2 max-w-2xl leading-relaxed text-muted">
        Bir hata mı buldun, yeni bir şehir ya da görev mi istiyorsun? Yaz; gelen istekler bir
        sonraki güncellemenin listesine girer.
      </p>

      {state === "sent" ? (
        <p role="status" className="mt-6 rounded-xl bg-accent-strong/10 px-4 py-3 text-sm font-medium text-[#2a8a70]">
          Teşekkürler, isteğin ulaştı.
        </p>
      ) : (
        <form name={FORM_NAME} onSubmit={submit} className="mt-6 grid gap-4 sm:grid-cols-2">
          <input type="hidden" name="form-name" value={FORM_NAME} />
          {/* Botlar için tuzak alan: insan görmez, dolu gelen gönderi atılır. */}
          <p hidden>
            <label>
              Bunu boş bırak <input name="bot-field" tabIndex={-1} autoComplete="off" />
            </label>
          </p>
          <input type="hidden" name="oyun" value="fuse-and-fall" />

          <label className="grid gap-1.5 text-sm font-medium">
            Konu
            <select name="tur" required defaultValue="oneri" className={field}>
              {kinds.map((k) => (
                <option key={k.value} value={k.value}>
                  {k.label}
                </option>
              ))}
            </select>
          </label>

          <label className="grid gap-1.5 text-sm font-medium sm:col-span-2">
            Mesajın
            <textarea
              name="mesaj"
              required
              minLength={5}
              maxLength={1500}
              rows={4}
              placeholder="Örn. Paris 7'de hedef blok hiç düşmüyor; ya da: Roma'da bir kolezyum görevi olsun."
              className={field}
            />
          </label>

          <label className="flex items-start gap-3 text-sm sm:col-span-2">
            <input
              type="checkbox"
              name="haber"
              value="evet"
              checked={notify}
              onChange={(e) => setNotify(e.target.checked)}
              className="mt-0.5 h-4 w-4 accent-[var(--color-accent)]"
            />
            <span className="text-muted">Bu istek gelince ya da yeni sürüm çıkınca bana e-postayla haber ver.</span>
          </label>

          {notify && (
            <label className="grid gap-1.5 text-sm font-medium sm:col-span-2">
              E-posta
              <input type="email" name="email" required autoComplete="email" placeholder="ornek@eposta.com" className={field} />
            </label>
          )}

          <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
            <button
              type="submit"
              disabled={state === "sending"}
              className="inline-flex h-11 items-center rounded-full bg-accent px-6 text-sm font-medium text-on-accent transition-colors hover:bg-accent/90 disabled:opacity-60"
            >
              {state === "sending" ? "Gönderiliyor…" : "Gönder"}
            </button>
            {state === "failed" && (
              <span role="alert" className="text-sm text-red-700">
                Gönderilemedi. Bağlantını kontrol edip tekrar dene.
              </span>
            )}
          </div>

          <p className="text-xs leading-relaxed text-muted sm:col-span-2">
            Çerez ya da hesap yok. Mesajın yalnız oyunu geliştirmek için okunur; e-postanı yalnız
            haber istersen sorarız ve yalnız bu iş için kullanırız. Silinmesini istersen İletişim
            bölümünden yazman yeterli.
          </p>
        </form>
      )}
    </div>
  );
}
