"use client";

import { useSyncExternalStore } from "react";

/**
 * SiberOkul ilerlemesi: SiberOkul bu sitede (/siberokul/) barındığı için aynı tarayıcı deposunu
 * paylaşırız. Yalnız bu tarayıcıda yerel olarak okunur; sunucuya ya da başka bir yere gitmez.
 * Kayıt yoksa ya da okunamazsa (gizli sekme, kapalı depolama) davet metni gösterilir.
 */
type Ozet = { biten: number; buHafta: number; sonGun: string | null };

const GUN_MS = 86_400_000;

function bugunUtc(): number {
  const d = new Date();
  return Date.UTC(d.getFullYear(), d.getMonth(), d.getDate());
}

function haftaBasiUtc(ms: number): number {
  const gun = new Date(ms).getUTCDay(); // 0 = Pazar
  return ms - ((gun + 6) % 7) * GUN_MS;
}

function hamOku(anahtar: string): string | null {
  try {
    return window.localStorage.getItem(anahtar);
  } catch {
    return null;
  }
}

/** Başka sekmede (ör. SiberOkul'da ders bitince) depo değişirse kart kendini günceller. */
function abone(degisti: () => void) {
  window.addEventListener("storage", degisti);
  return () => window.removeEventListener("storage", degisti);
}

function ozetle(ham: string | null): Ozet | null {
  try {
    if (!ham) return null;
    const veri = JSON.parse(ham) as { bitenDersler?: unknown; calisilanGunler?: unknown };
    const biten =
      veri.bitenDersler && typeof veri.bitenDersler === "object" ? Object.keys(veri.bitenDersler).length : 0;
    const gunler = Array.isArray(veri.calisilanGunler)
      ? veri.calisilanGunler.filter((g): g is string => typeof g === "string" && /^\d{4}-\d{2}-\d{2}$/.test(g))
      : [];
    const bas = haftaBasiUtc(bugunUtc());
    const buHafta = new Set(
      gunler.filter((g) => {
        const [y, a, d] = g.split("-").map(Number);
        return Date.UTC(y, a - 1, d) >= bas;
      }),
    ).size;
    const sonGun = gunler.length ? [...gunler].sort().at(-1)! : null;
    return { biten, buHafta, sonGun };
  } catch {
    return null;
  }
}

export function ProjectProgress({ storageKey, total, href }: { storageKey: string; total: number; href: string }) {
  // Sunucuda depo yok: ilk çizim boş kalır (hydration uyuşur), tarayıcıda kayıt okunur.
  const ham = useSyncExternalStore(
    abone,
    () => hamOku(storageKey),
    () => undefined,
  );
  if (ham === undefined) return null;
  const ozet = ozetle(ham);

  if (ozet === null || ozet.biten + ozet.buHafta === 0) {
    return (
      <p className="mt-4 rounded-xl bg-surface px-4 py-3 text-sm text-muted ring-1 ring-inset ring-border">
        Bu tarayıcıda henüz ilerleme yok.{" "}
        <a href={href} className="font-medium text-accent underline-offset-4 hover:underline">
          İlk derse başla →
        </a>
      </p>
    );
  }

  const yuzde = Math.min(100, Math.round((ozet.biten / total) * 100));
  const son = ozet.sonGun
    ? new Date(`${ozet.sonGun}T12:00:00`).toLocaleDateString("tr-TR", { day: "numeric", month: "long" })
    : null;

  return (
    <div className="mt-4 rounded-xl bg-surface px-4 py-3 ring-1 ring-inset ring-border" aria-label="SiberOkul ilerlemem">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 text-sm">
        <span className="font-medium text-foreground">
          İlerlemem: {ozet.biten}/{total} ders
        </span>
        <span className="text-muted">
          Bu hafta {ozet.buHafta}/5 gün{son ? ` · son çalışma ${son}` : ""}
        </span>
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-border" aria-hidden>
        <div className="h-full rounded-full bg-accent" style={{ width: `${yuzde}%` }} />
      </div>
      <p className="mt-2 text-xs text-muted">Yalnız bu tarayıcıda görünür; bilgi cihazından çıkmaz.</p>
    </div>
  );
}
