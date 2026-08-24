"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { type Project } from "@/content/projects";

type ProjectSimulatorProps = {
  project: Project;
  onClose: () => void;
};

export function ProjectSimulator({ project, onClose }: ProjectSimulatorProps) {
  const isMobile = project.platforms?.includes("Mobil") || project.slug.includes("mobile") || project.slug === "aloah";

  // Escape to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Lock body scroll
  useEffect(() => {
    const originalStyle = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-100 flex items-center justify-center bg-[#141f3d]/60 p-4 backdrop-blur-md sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <motion.div
        className="relative flex h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-3xl border border-border bg-surface shadow-2xl md:h-[80vh] md:flex-row"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Info Column (Left on Desktop, Top on Mobile) */}
        <div className="flex flex-col border-b border-border p-6 md:w-5/12 md:border-b-0 md:border-r md:p-8 overflow-y-auto">
          <div className="flex items-center justify-between gap-4">
            <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent ring-1 ring-inset ring-accent/30">
              İnteraktif Simülatör
            </span>
            <button
              onClick={onClose}
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-muted transition-colors hover:bg-surface-2 hover:text-foreground"
              aria-label="Kapat"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <h2 className="mt-4 font-display text-2xl font-bold text-foreground">
            {project.title}
          </h2>
          <p className="mt-1.5 text-sm font-medium text-accent">
            {project.tagline}
          </p>

          <div className="mt-6 flex-1 space-y-4 text-sm text-muted leading-relaxed">
            {project.description.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-8 border-t border-border/60 pt-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted">Kullanılan Teknolojiler</h4>
            <ul className="mt-2.5 flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <li key={t} className="rounded-full border border-border bg-background px-2.5 py-0.5 text-xs text-muted">
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 items-center gap-2 rounded-full border border-border px-4 text-xs font-medium text-foreground transition-colors hover:bg-surface-2"
              >
                GitHub Sayfası
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 items-center rounded-full bg-accent px-4 text-xs font-medium text-on-accent transition-colors hover:bg-accent/90"
              >
                Canlı Sürümü Aç
              </a>
            )}
          </div>
        </div>

        {/* Simulator Column (Right on Desktop, Bottom on Mobile) */}
        <div className="flex flex-1 items-center justify-center bg-background/50 p-6 md:p-8 overflow-y-auto">
          {isMobile ? (
            <PhoneFrame project={project} />
          ) : (
            <BrowserFrame project={project} />
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ==========================================================================
   PHONE FRAME MOCKUP
   ========================================================================== */
function PhoneFrame({ project }: { project: Project }) {
  const slug = project.slug;
  return (
    <div className="device-dark relative mx-auto h-[560px] w-[280px] shrink-0 rounded-[40px] border-[8px] border-[#232838] bg-[#0c0d12] shadow-2xl ring-1 ring-white/5">
      {/* Speaker/Notch */}
      <div className="absolute top-2 left-1/2 z-20 h-4 w-28 -translate-x-1/2 rounded-full bg-[#232838] flex items-center justify-between px-3">
        <span className="h-1.5 w-1.5 rounded-full bg-[#0c0d12]" />
        <span className="h-1 w-8 rounded-full bg-[#0c0d12]/60" />
      </div>

      {/* Screen Container */}
      <div className="h-full w-full overflow-hidden rounded-[32px] p-2 pt-8 pb-4 relative flex flex-col">
        {/* Status Bar */}
        <div className="absolute top-2 left-0 right-0 px-6 flex justify-between items-center text-[10px] text-muted/80 font-mono z-10 select-none">
          <span>09:41</span>
          <div className="flex items-center gap-1">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.9-1.9C9.07 19.64 10.48 20 12 20c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
            </svg>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17 5H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-1 14H4v-1h12v1zm0-3H4V7h12v9z" />
            </svg>
          </div>
        </div>

        {/* Dynamic Inner App Screen */}
        <div className="flex-1 rounded-[24px] bg-[#08090c] overflow-hidden border border-border/30 relative flex flex-col text-foreground text-xs select-none">
          {slug.startsWith("sezai") ? (
            <SezAISimulator />
          ) : slug === "aloah" ? (
            <AloahSimulator />
          ) : (
            <GenericMobileSimulator project={project} />
          )}
        </div>

        {/* Bottom Home Indicator */}
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-28 h-1 rounded-full bg-muted/30" />
      </div>
    </div>
  );
}

/* ==========================================================================
   BROWSER FRAME MOCKUP
   ========================================================================== */
function BrowserFrame({ project }: { project: Project }) {
  const slug = project.slug;
  return (
    <div className="device-dark flex h-[480px] w-full max-w-2xl flex-col rounded-xl border border-border bg-[#0c0d12] shadow-2xl ring-1 ring-white/5">
      {/* Browser Chrome Header */}
      <div className="flex items-center gap-3 border-b border-border bg-surface px-4 py-3">
        {/* MacOS Style Buttons */}
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        </div>

        {/* Controls */}
        <div className="flex items-center gap-1.5 text-muted/60">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="m15 18-6-6 6-6" />
          </svg>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </div>

        {/* Address Bar */}
        <div className="flex-1 rounded-md bg-background px-3 py-1 text-center font-mono text-[10px] text-muted border border-border/40 select-none">
          https://{slug}.alperenesersu.net
        </div>
      </div>

      {/* Browser Canvas Screen */}
      <div className="flex-1 bg-[#08090c] overflow-hidden p-4 relative flex flex-col text-foreground text-xs select-none">
        {slug === "scrapemind" ? (
          <ScrapeMindSimulator />
        ) : slug === "flow" ? (
          <FlowSimulator />
        ) : slug === "kitapyurdu-redesign" ? (
          <KitapYurduSimulator />
        ) : slug === "aisigner" ? (
          <AiSignerSimulator />
        ) : (
          <GenericBrowserSimulator project={project} />
        )}
      </div>
    </div>
  );
}

/* ==========================================================================
   APP 1: SEZAI SIMULATOR (MOBILE)
   ========================================================================== */
const SEZAI_SAMPLES = [
  {
    id: "tomato",
    name: "Domates Yaprağı",
    desc: "Kahverengi lekeler ve kuruma belirtileri var",
    disease: "Domates Erken Yanıklığı (Alternaria solani)",
    confidence: "96.4%",
    treatment: "Bakırlı fungisit uygulaması yapın. Nemli havalarda sulamayı sabah erken saatlerde damlama olarak yapın. Enfekte olmuş alt yaprakları budayın ve imha edin.",
    severity: "Orta",
  },
  {
    id: "apple",
    name: "Elma Yaprağı",
    desc: "Zeytin yeşili lekeler ve kadifemsi mantar tabakası",
    disease: "Elma Karaleke Hastalığı (Venturia inaequalis)",
    confidence: "93.1%",
    treatment: "Kimyasal mücadele için koruyucu ve tedavi edici fungisitler kullanın. Dökülen yaprakları sonbaharda toplayıp yakın veya derince gömün.",
    severity: "Yüksek",
  },
  {
    id: "grape",
    name: "Üzüm Yaprağı",
    desc: "Kırmızımsı-kahve lekeler ve beyaz tozsu tabaka",
    disease: "Külleme Hastalığı (Uncinula necator)",
    confidence: "91.8%",
    treatment: "Kükürtlü ilaçlama uygulayın. Asmaları budayarak iyi havalanmasını sağlayın. Azotlu gübrelemeyi sınırlayın.",
    severity: "Düşük",
  },
];

function SezAISimulator() {
  const [step, setStep] = useState<"welcome" | "scan" | "result" | "dealer">("welcome");
  const [selectedLeaf, setSelectedLeaf] = useState(SEZAI_SAMPLES[0]);
  const dealers = [
    { name: "Başak Tarım Market", dist: "1.2 km", rating: "4.8" },
    { name: "Bereket Ziraat", dist: "2.5 km", rating: "4.6" },
    { name: "Hilal Tarımsal İlaç", dist: "3.7 km", rating: "4.5" },
  ];

  const handleSelectLeaf = (leaf: typeof SEZAI_SAMPLES[0]) => {
    setSelectedLeaf(leaf);
    setStep("scan");
    setTimeout(() => {
      setStep("result");
    }, 2200);
  };

  return (
    <div className="flex h-full flex-col font-sans">
      {/* Header */}
      <div className="border-b border-border/40 bg-surface-2 px-3 py-2 flex items-center justify-between text-accent font-semibold">
        <span className="flex items-center gap-1">🌿 SezAI</span>
        <span className="text-[10px] text-muted">v2.1-mobile</span>
      </div>

      <div className="flex-1 overflow-y-auto p-3 flex flex-col justify-between">
        <AnimatePresence mode="wait">
          {step === "welcome" && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-3 flex-1 flex flex-col justify-center"
            >
              <div className="text-center space-y-1 py-2">
                <h4 className="font-bold text-sm text-foreground">Bitki Teşhis Portalı</h4>
                <p className="text-[10px] text-muted">Hastalığı tespit etmek için bir örnek yaprak seçin veya yükleyin.</p>
              </div>

              <div className="space-y-2">
                {SEZAI_SAMPLES.map((leaf) => (
                  <button
                    key={leaf.id}
                    onClick={() => handleSelectLeaf(leaf)}
                    className="w-full rounded-xl border border-border bg-surface-2 p-2.5 text-left transition-all hover:border-accent/40 hover:bg-surface-2"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="h-8 w-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent text-sm">
                        🍂
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-foreground text-xs">{leaf.name}</p>
                        <p className="truncate text-[9px] text-muted">{leaf.desc}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <button
                onClick={() => handleSelectLeaf(SEZAI_SAMPLES[0])}
                className="w-full py-2 bg-accent text-on-accent font-semibold rounded-lg text-center mt-2 hover:bg-accent/90"
              >
                Kamerayı Aç (Simüle Et)
              </button>
            </motion.div>
          )}

          {step === "scan" && (
            <motion.div
              key="scan"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col items-center justify-center relative min-h-[200px]"
            >
              <div className="relative h-32 w-32 rounded-2xl border-2 border-dashed border-accent/40 bg-accent/5 flex items-center justify-center overflow-hidden">
                <span className="text-3xl animate-pulse">🍂</span>
                {/* Scanner laser bar */}
                <motion.div
                  className="absolute left-0 right-0 h-1 bg-accent/80 shadow-[0_0_12px_#22d3ee]"
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                />
              </div>

              <div className="mt-4 text-center space-y-1">
                <p className="font-semibold text-xs text-foreground animate-pulse">AI Görseli Analiz Ediyor...</p>
                <p className="text-[9px] text-muted">Hastalık veri tabanı taranıyor...</p>
              </div>
            </motion.div>
          )}

          {step === "result" && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-3 flex-1 flex flex-col"
            >
              <div className="rounded-xl border border-red-500/30 bg-red-950/10 p-3 text-center space-y-1">
                <span className="text-[10px] uppercase font-bold text-red-400">Teşhis Sonucu</span>
                <h5 className="font-bold text-sm text-foreground leading-snug">{selectedLeaf.disease}</h5>
                <div className="flex justify-center gap-3 text-[10px] mt-1.5">
                  <span className="bg-red-500/10 text-red-400 px-2 py-0.5 rounded ring-1 ring-inset ring-red-500/20">
                    Önem: {selectedLeaf.severity}
                  </span>
                  <span className="bg-accent/10 text-accent px-2 py-0.5 rounded ring-1 ring-inset ring-accent/20">
                    Güvenlik: {selectedLeaf.confidence}
                  </span>
                </div>
              </div>

              <div className="bg-surface-2 border border-border/60 rounded-xl p-3 space-y-2">
                <h6 className="font-semibold text-[10px] text-accent uppercase tracking-wider">İlaç & Mücadele Önerisi</h6>
                <p className="text-[10px] leading-relaxed text-muted">{selectedLeaf.treatment}</p>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-auto pt-2">
                <button
                  onClick={() => setStep("dealer")}
                  className="py-1.5 bg-surface-2 border border-border text-foreground hover:bg-surface-2 rounded-lg text-center font-medium"
                >
                  📍 Bayiler
                </button>
                <button
                  onClick={() => setStep("welcome")}
                  className="py-1.5 bg-accent text-on-accent hover:bg-accent/90 rounded-lg text-center font-semibold"
                >
                  Yeni Teşhis
                </button>
              </div>
            </motion.div>
          )}

          {step === "dealer" && (
            <motion.div
              key="dealer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="space-y-3 flex-1 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <h5 className="font-semibold text-xs text-accent">En Yakın Zirai Bayiler</h5>
                <p className="text-[9px] text-muted">Bulunduğunuz konuma en yakın anlaşmalı tarım bayileri listelendi.</p>

                <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
                  {dealers.map((d, idx) => (
                    <div key={idx} className="border border-border bg-surface-2 p-2.5 rounded-xl flex items-center justify-between">
                      <div className="min-w-0">
                        <p className="font-semibold text-foreground text-xs">{d.name}</p>
                        <p className="text-[9px] text-muted">Mesafe: {d.dist} · Puan: ⭐ {d.rating}</p>
                      </div>
                      <span className="text-[9px] px-2 py-1 bg-accent/10 text-accent rounded-full font-medium">Yol Tarifi</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setStep("result")}
                className="w-full py-1.5 border border-border bg-surface text-foreground rounded-lg text-center font-medium"
              >
                Geri Dön
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ==========================================================================
   APP 2: SCRAPEMIND SIMULATOR (BROWSER)
   ========================================================================== */
const SCRAPEMIND_ARTICLES: Record<string, Array<{ title: string; src: string; summary: string; takeaways: string[] }>> = {
  ai: [
    {
      title: "Self-Rewarding Language Models",
      src: "arXiv:2401.10020",
      summary: "Modelin kendi ürettiği cevapları yine kendisi eğiterek iyileştirmesini sağlayan bir LLM hizalama yaklaşımı. RLHF yerine kendi kendini değerlendirme mekanizması kullanır.",
      takeaways: ["Model kendi değerlendirme aşamasını gerçekleştirir.", "İnsan geri bildirimlerine olan ihtiyacı azaltır.", "Llama-2 tabanlı deneylerde standart eğitime göre %18 daha yüksek doğruluk elde edilmiştir."],
    },
    {
      title: "An Image is Worth 1/2 Tokens: Selective Multimodal Vision",
      src: "arXiv:2403.04560",
      summary: "Multimodal LLM'lerde yüksek çözünürlüklü görsel işlemeyi hızlandırmak amacıyla, önemli olmayan görsel bölgelerin token ağırlığını yarıya indiren seçici görme yöntemi.",
      takeaways: ["İşlem yükünü %40 azaltır.", "Doğruluk kaybı olmadan görsel sorguları 2.2 kat hızlandırır."],
    },
  ],
  bio: [
    {
      title: "Deep Learning for Early Breast Cancer Diagnostics",
      src: "PubMed:38321045",
      summary: "Histopatoloji taramalarında gözden kaçabilecek mikroskobik tümör belirtilerini tespit etmek için evrişimli sinir ağları kullanan derin öğrenme modeli.",
      takeaways: ["Erken evre teşhis başarısı %97.2'ye çıkarılmıştır.", "Radyologların teşhis süresini %35 kısaltır."],
    },
  ],
  tech: [
    {
      title: "Next.js Server Actions: Security Guidelines & CSRF Protection",
      src: "TechNews",
      summary: "Sunucu eylemlerinin (Server Actions) getirdiği güvenlik açıklarını önlemek için şifrelenmiş state yönetimi ve token doğrulama mekanizmalarının entegrasyonu rehberi.",
      takeaways: ["Action parametreleri şifrelenmelidir.", "Origin kontrolü zorunlu kılınmıştır."],
    },
  ],
};

function ScrapeMindSimulator() {
  const [cat, setCat] = useState("ai");
  const [selectedArt, setSelectedArt] = useState<typeof SCRAPEMIND_ARTICLES["ai"][0] | null>(null);

  const articles = SCRAPEMIND_ARTICLES[cat] || [];

  return (
    <div className="flex h-full font-sans text-xs">
      {/* Sidebar */}
      <div className="w-1/3 border-r border-border/40 bg-surface-2 p-2.5 flex flex-col gap-2">
        <div className="font-semibold text-accent mb-2 flex items-center gap-1 text-[10px]">
          🧠 ScrapeMind
        </div>
        <button
          onClick={() => { setCat("ai"); setSelectedArt(null); }}
          className={`w-full p-2 text-left rounded-lg transition-colors ${cat === "ai" ? "bg-accent/15 text-accent border border-accent/20" : "bg-transparent text-muted hover:bg-surface-2"}`}
        >
          🤖 Yapay Zeka
        </button>
        <button
          onClick={() => { setCat("bio"); setSelectedArt(null); }}
          className={`w-full p-2 text-left rounded-lg transition-colors ${cat === "bio" ? "bg-accent/15 text-accent border border-accent/20" : "bg-transparent text-muted hover:bg-surface-2"}`}
        >
          🔬 Biyoloji & Sağlık
        </button>
        <button
          onClick={() => { setCat("tech"); setSelectedArt(null); }}
          className={`w-full p-2 text-left rounded-lg transition-colors ${cat === "tech" ? "bg-accent/15 text-accent border border-accent/20" : "bg-transparent text-muted hover:bg-surface-2"}`}
        >
          💻 Teknoloji
        </button>
      </div>

      {/* Main Panel */}
      <div className="flex-1 p-3 overflow-y-auto flex flex-col relative bg-background/20">
        <AnimatePresence mode="wait">
          {!selectedArt ? (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-3"
            >
              <div className="border-b border-border/40 pb-2 mb-2">
                <span className="text-[10px] text-muted uppercase font-bold tracking-wider">Günlük Bülten</span>
                <h5 className="font-bold text-foreground text-sm">Akademik Yayın Özetleri</h5>
              </div>

              {articles.map((art, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedArt(art)}
                  className="border border-border bg-surface-2 hover:border-accent/30 p-3 rounded-xl cursor-pointer transition-all space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] bg-surface-2 px-1.5 py-0.5 rounded text-muted">{art.src}</span>
                  </div>
                  <h6 className="font-semibold text-foreground leading-snug">{art.title}</h6>
                  <p className="text-[10px] text-muted truncate">{art.summary}</p>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="detail"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-3.5"
            >
              <button
                onClick={() => setSelectedArt(null)}
                className="inline-flex items-center gap-1 text-accent font-medium hover:underline mb-1"
              >
                ← Bültene Dön
              </button>

              <div>
                <span className="text-[9px] bg-accent/10 text-accent px-1.5 py-0.5 rounded font-mono">{selectedArt.src}</span>
                <h5 className="font-bold text-foreground text-sm mt-1.5 leading-snug">{selectedArt.title}</h5>
              </div>

              <div className="space-y-1.5">
                <p className="font-semibold text-[10px] text-muted uppercase">Bülten Özeti</p>
                <p className="text-muted leading-relaxed">{selectedArt.summary}</p>
              </div>

              <div className="space-y-1.5">
                <p className="font-semibold text-[10px] text-muted uppercase">Anahtar Çıkarımlar</p>
                <ul className="list-disc pl-4 space-y-1 text-muted leading-relaxed">
                  {selectedArt.takeaways.map((t, idx) => (
                    <li key={idx}>{t}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ==========================================================================
   APP 3: FLOW SIMULATOR (BROWSER)
   ========================================================================== */
function FlowSimulator() {
  const [activeTab, setActiveTab] = useState<"todo" | "pomo" | "stats">("todo");
  const [todos, setTodos] = useState([
    { id: 1, text: "Portfolyo projesine interaktif demo ekle", done: false },
    { id: 2, text: "Kitap oku (15 sayfa)", done: true },
    { id: 3, text: "TypeScript makalesi yaz", done: false },
  ]);
  const [newTodo, setNewTodo] = useState("");
  
  // Pomodoro timer state
  const [time, setTime] = useState(1500); // 25:00
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime((prev) => {
          if (prev <= 1) {
            setIsActive(false);
            alert("Pomodoro tamamlandı! 5 dakika ara zamanı.");
            return 1500;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive]);

  const toggleTodo = (id: number) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    setTodos([...todos, { id: Date.now(), text: newTodo.trim(), done: false }]);
    setNewTodo("");
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60).toString().padStart(2, "0");
    const s = (secs % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const completedCount = todos.filter((t) => t.done).length;
  const progressPercent = todos.length ? Math.round((completedCount / todos.length) * 100) : 0;

  return (
    <div className="flex h-full flex-col font-sans text-xs">
      {/* Navigation tabs */}
      <div className="flex border-b border-border/40 bg-surface-2">
        <button
          onClick={() => setActiveTab("todo")}
          className={`flex-1 py-2 text-center transition-colors font-medium border-b-2 ${activeTab === "todo" ? "border-accent text-accent bg-accent/5" : "border-transparent text-muted hover:text-foreground"}`}
        >
          📋 Yapılacaklar
        </button>
        <button
          onClick={() => setActiveTab("pomo")}
          className={`flex-1 py-2 text-center transition-colors font-medium border-b-2 ${activeTab === "pomo" ? "border-accent text-accent bg-accent/5" : "border-transparent text-muted hover:text-foreground"}`}
        >
          ⏱️ Pomodoro
        </button>
        <button
          onClick={() => setActiveTab("stats")}
          className={`flex-1 py-2 text-center transition-colors font-medium border-b-2 ${activeTab === "stats" ? "border-accent text-accent bg-accent/5" : "border-transparent text-muted hover:text-foreground"}`}
        >
          📊 Analiz
        </button>
      </div>

      <div className="flex-1 p-3 overflow-y-auto flex flex-col">
        {activeTab === "todo" && (
          <div className="space-y-3.5 flex-1 flex flex-col justify-between">
            {/* Todo Header & Progress */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div>
                  <h5 className="font-bold text-foreground">Günlük Planım</h5>
                  <p className="text-[10px] text-muted">Verileriniz yerel IndexedDB&apos;de tutulur.</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative h-9 w-9 flex items-center justify-center">
                    <svg className="absolute inset-0 h-full w-full rotate-[-90deg]">
                      <circle cx="18" cy="18" r="14" fill="transparent" stroke="var(--color-border)" strokeWidth="3" />
                      <circle
                        cx="18"
                        cy="18"
                        r="14"
                        fill="transparent"
                        stroke="var(--color-accent)"
                        strokeWidth="3"
                        strokeDasharray={88}
                        strokeDashoffset={88 - (88 * progressPercent) / 100}
                        strokeLinecap="round"
                        className="transition-all duration-300"
                      />
                    </svg>
                    <span className="text-[9px] font-bold text-accent">{progressPercent}%</span>
                  </div>
                </div>
              </div>

              {/* Todo List */}
              <div className="space-y-1.5 max-h-[160px] overflow-y-auto pr-1">
                {todos.map((todo) => (
                  <div
                    key={todo.id}
                    onClick={() => toggleTodo(todo.id)}
                    className="flex items-center gap-2.5 p-2 bg-surface-2 border border-border/60 rounded-xl cursor-pointer hover:border-accent/20 transition-all select-none"
                  >
                    <div className={`h-4 w-4 rounded border flex items-center justify-center transition-colors ${todo.done ? "bg-accent border-accent text-on-accent" : "border-muted/50"}`}>
                      {todo.done && (
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </div>
                    <span className={`text-xs ${todo.done ? "line-through text-muted" : "text-foreground"}`}>
                      {todo.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Todo Input form */}
            <form onSubmit={addTodo} className="flex gap-2 border-t border-border/40 pt-3">
              <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Yeni bir görev ekle..."
                className="flex-1 bg-surface-2 border border-border rounded-lg px-3 py-1.5 text-foreground placeholder:text-muted/60 focus:outline-none focus:border-accent/40"
              />
              <button
                type="submit"
                className="px-3 bg-accent text-on-accent font-bold rounded-lg hover:bg-accent/90"
              >
                +
              </button>
            </form>
          </div>
        )}

        {activeTab === "pomo" && (
          <div className="flex-1 flex flex-col items-center justify-center space-y-4">
            <div className="text-center">
              <span className="text-[10px] text-accent uppercase font-bold tracking-widest">Odaklanma Zamanı</span>
              <h3 className="font-mono text-4xl font-bold text-foreground mt-1 select-none">
                {formatTime(time)}
              </h3>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setIsActive(!isActive)}
                className={`px-6 py-2 rounded-full font-semibold text-xs transition-colors ${isActive ? "bg-red-500/20 text-red-400 border border-red-500/30" : "bg-accent text-on-accent"}`}
              >
                {isActive ? "Durdur" : "Başlat"}
              </button>
              <button
                onClick={() => { setIsActive(false); setTime(1500); }}
                className="px-6 py-2 border border-border bg-surface rounded-full text-muted font-medium text-xs hover:text-foreground"
              >
                Sıfırla
              </button>
            </div>
          </div>
        )}

        {activeTab === "stats" && (
          <div className="space-y-3 flex-1 flex flex-col justify-center">
            <h5 className="font-semibold text-foreground">Haftalık İlerleme</h5>
            <div className="h-28 flex items-end gap-3 px-2 border-b border-border/60 pb-1">
              {[
                { day: "Pzt", val: 30 },
                { day: "Sal", val: 55 },
                { day: "Çar", val: 40 },
                { day: "Per", val: 75 },
                { day: "Cum", val: 95 },
                { day: "Cmt", val: 15 },
                { day: "Paz", val: 10 },
              ].map((item, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-1.5">
                  <div className="w-full bg-accent/20 hover:bg-accent/40 rounded-t transition-all relative group" style={{ height: `${item.val}px` }}>
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-surface text-accent text-[8px] font-bold px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.val}%
                    </span>
                  </div>
                  <span className="text-[8px] text-muted">{item.day}</span>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-muted text-center pt-1">Bu hafta ortalama üretkenlik: <strong className="text-accent">%45.7 artış</strong></p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ==========================================================================
   APP 4: KITAPYURDU REDESIGN SIMULATOR (BROWSER)
   ========================================================================== */
function KitapYurduSimulator() {
  const [view, setView] = useState<"old" | "new">("new");

  return (
    <div className="flex h-full flex-col font-sans text-xs">
      <div className="flex items-center justify-between border-b border-border/40 pb-2 mb-3 bg-surface-2 p-2 rounded-lg">
        <div>
          <h5 className="font-bold text-foreground">Arayüz Karşılaştırması</h5>
          <p className="text-[9px] text-muted">Eski Kitapyurdu tasarımı ile hazırladığım modern redesign karşılaştırması.</p>
        </div>
        <div className="flex border border-border rounded-lg overflow-hidden bg-background">
          <button
            onClick={() => setView("old")}
            className={`px-3 py-1.5 text-[9px] font-semibold transition-all ${view === "old" ? "bg-red-500/20 text-red-400 border-r border-border" : "text-muted"}`}
          >
            Eski Arayüz
          </button>
          <button
            onClick={() => setView("new")}
            className={`px-3 py-1.5 text-[9px] font-semibold transition-all ${view === "new" ? "bg-accent/20 text-accent" : "text-muted"}`}
          >
            Yeni Tasarım
          </button>
        </div>
      </div>

      <div className="flex-1 relative rounded-xl overflow-hidden border border-border/50">
        <AnimatePresence mode="wait">
          {view === "old" ? (
            <motion.div
              key="old"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#ffffff] text-neutral-800 p-3 overflow-y-auto font-serif"
            >
              {/* Fake legacy UI style */}
              <div className="border-b border-neutral-300 pb-2 flex justify-between items-center text-[10px]">
                <span className="font-bold text-blue-800">kitapyurdu.com</span>
                <span className="text-neutral-500">Üye Girişi | Kayıt Ol</span>
              </div>
              <div className="mt-3 flex gap-2">
                <div className="w-1/4 border border-neutral-200 p-1 text-[8px] bg-amber-50 leading-loose">
                  <p className="font-bold border-b border-neutral-200">Kategoriler</p>
                  <p>Edebiyat</p>
                  <p>Tarih</p>
                  <p>Felsefe</p>
                  <p>Çocuk Kitapları</p>
                </div>
                <div className="flex-1 space-y-2">
                  <div className="bg-amber-100 border border-amber-300 p-2 rounded text-[9px]">
                    <strong className="text-amber-800">Haftanın Kampanyası:</strong> Kargo 1 TL!
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="border border-neutral-200 p-2 text-center text-[8px] space-y-1">
                      <div className="h-12 w-8 bg-neutral-200 mx-auto"></div>
                      <p className="font-bold">Kuyucaklı Yusuf</p>
                      <p className="text-red-600 font-bold">14,20 TL</p>
                    </div>
                    <div className="border border-neutral-200 p-2 text-center text-[8px] space-y-1">
                      <div className="h-12 w-8 bg-neutral-200 mx-auto"></div>
                      <p className="font-bold">Tutunamayanlar</p>
                      <p className="text-red-600 font-bold">45,00 TL</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="new"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#08090c] text-foreground p-3 overflow-y-auto space-y-3"
            >
              {/* Premium modern design */}
              <div className="flex justify-between items-center border-b border-border/40 pb-2">
                <span className="font-display font-bold text-accent tracking-wider">K-YURDU</span>
                <div className="h-6 w-1/2 bg-surface rounded-full border border-border/80 flex items-center px-3 gap-2">
                  <span className="text-muted text-[8px]">Kitap veya yazar ara...</span>
                </div>
              </div>

              <div className="rounded-xl bg-gradient-to-r from-accent/15 to-accent-strong/15 border border-accent/20 p-3 space-y-1">
                <span className="text-[8px] text-accent uppercase font-bold">Özel Koleksiyon</span>
                <h6 className="font-bold text-sm text-foreground">Geleceği Şekillendiren Eserler</h6>
                <p className="text-[10px] text-muted">Şimdi %35 indirim ve hızlı teslimat fırsatıyla.</p>
              </div>

              <div className="space-y-2">
                <h6 className="font-bold text-[10px] uppercase text-muted tracking-wider">Haftanın Seçkileri</h6>
                <div className="grid grid-cols-2 gap-3">
                  <div className="group border border-border bg-surface-2 p-2.5 rounded-xl hover:border-accent/40 cursor-pointer transition-all space-y-1.5">
                    <div className="relative aspect-[3/4] w-14 bg-surface rounded-lg mx-auto shadow-md overflow-hidden flex items-center justify-center font-bold text-[10px] text-accent">
                      📚
                    </div>
                    <div className="text-center">
                      <p className="font-semibold truncate">Cesur Yeni Dünya</p>
                      <p className="text-[9px] text-muted">Aldous Huxley</p>
                      <p className="text-accent font-bold mt-1 text-xs">84.50 TL</p>
                    </div>
                  </div>
                  <div className="group border border-border bg-surface-2 p-2.5 rounded-xl hover:border-accent/40 cursor-pointer transition-all space-y-1.5">
                    <div className="relative aspect-[3/4] w-14 bg-surface rounded-lg mx-auto shadow-md overflow-hidden flex items-center justify-center font-bold text-[10px] text-accent">
                      📖
                    </div>
                    <div className="text-center">
                      <p className="font-semibold truncate">1984</p>
                      <p className="text-[9px] text-muted">George Orwell</p>
                      <p className="text-accent font-bold mt-1 text-xs">72.00 TL</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ==========================================================================
   APP 5: AISIGNER SIMULATOR (BROWSER)
   ========================================================================== */
function AiSignerSimulator() {
  const [role, setRole] = useState<"student" | "mentor">("student");

  return (
    <div className="flex h-full flex-col font-sans text-xs">
      <div className="flex items-center justify-between border-b border-border/40 pb-2 mb-2">
        <span className="font-semibold text-accent flex items-center gap-1">🌐 AISigner Portal</span>
        <div className="flex border border-border rounded bg-surface">
          <button
            onClick={() => setRole("student")}
            className={`px-2.5 py-1 text-[9px] font-medium transition-all ${role === "student" ? "bg-accent/20 text-accent" : "text-muted"}`}
          >
            Öğrenci
          </button>
          <button
            onClick={() => setRole("mentor")}
            className={`px-2.5 py-1 text-[9px] font-medium transition-all ${role === "mentor" ? "bg-accent/20 text-accent" : "text-muted"}`}
          >
            Mentör
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-1">
        <AnimatePresence mode="wait">
          {role === "student" ? (
            <motion.div
              key="student"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-3"
            >
              <div>
                <h5 className="font-bold text-foreground">Öğrenme Yol Haritam</h5>
                <p className="text-[9px] text-muted">Mentörünüz tarafından onaylanan haftalık ilerleme planı.</p>
              </div>

              <div className="relative border-l border-border/80 ml-3 pl-4 space-y-4 py-1.5">
                <div className="relative">
                  <span className="absolute -left-[21px] top-0.5 h-3.5 w-3.5 rounded-full bg-emerald-500 flex items-center justify-center text-[8px] text-on-accent font-bold">✓</span>
                  <h6 className="font-semibold text-foreground">1. Hafta: Git & GitHub Temelleri</h6>
                  <p className="text-[10px] text-muted">Repoları yönetme, dal oluşturma ve PR süreçleri.</p>
                </div>
                <div className="relative">
                  <span className="absolute -left-[21px] top-0.5 h-3.5 w-3.5 rounded-full bg-accent flex items-center justify-center text-[7px] text-on-accent font-bold">●</span>
                  <h6 className="font-semibold text-foreground text-accent">2. Hafta: Next.js & TypeScript</h6>
                  <p className="text-[10px] text-muted">Server ve Client Components kullanımı, static render alma.</p>
                  <span className="inline-block mt-1 text-[9px] bg-accent/10 border border-accent/20 text-accent px-1.5 py-0.5 rounded">Devam Ediyor</span>
                </div>
                <div className="relative">
                  <span className="absolute -left-[21px] top-0.5 h-3.5 w-3.5 rounded-full bg-border flex items-center justify-center text-[8px] text-muted">🔒</span>
                  <h6 className="font-semibold text-muted">3. Hafta: Veritabanı & ORM (Prisma)</h6>
                  <p className="text-[10px] text-muted/50">PostgreSQL şemaları oluşturma ve Prisma Client entegrasyonu.</p>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="mentor"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-3"
            >
              <div>
                <h5 className="font-bold text-foreground">Mentör Yönetim Paneli</h5>
                <p className="text-[9px] text-muted">Eşleşen öğrencilerin gelişim durumunu takip edin.</p>
              </div>

              <div className="space-y-2">
                <div className="border border-border bg-surface-2 p-2 rounded-lg space-y-1">
                  <div className="flex justify-between items-center">
                    <strong className="text-foreground">Emre Yılmaz</strong>
                    <span className="text-[9px] text-emerald-400 font-medium">Haftalık Rapor Hazır</span>
                  </div>
                  <div className="w-full bg-border h-1.5 rounded-full overflow-hidden">
                    <div className="bg-accent h-full w-[65%]" />
                  </div>
                  <p className="text-[9px] text-muted">Yol Haritası Tamamlanma Oranı: %65</p>
                </div>

                <div className="border border-border bg-surface-2 p-2 rounded-lg space-y-1">
                  <div className="flex justify-between items-center">
                    <strong className="text-foreground">Zeynep Kaya</strong>
                    <span className="text-[9px] text-muted">Ödev Bekleniyor</span>
                  </div>
                  <div className="w-full bg-border h-1.5 rounded-full overflow-hidden">
                    <div className="bg-accent h-full w-[35%]" />
                  </div>
                  <p className="text-[9px] text-muted">Yol Haritası Tamamlanma Oranı: %35</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ==========================================================================
   APP 6: ALOAH SIMULATOR (MOBILE)
   ========================================================================== */
function AloahSimulator() {
  const [shopSelected, setShopSelected] = useState<boolean>(false);
  const [couponCode, setCouponCode] = useState<string | null>(null);

  const getCoupon = () => {
    setCouponCode("ALOAH-LCL20");
  };

  return (
    <div className="flex h-full flex-col font-sans">
      <div className="border-b border-border/40 bg-[#e11d48]/10 text-[#e11d48] px-3 py-2 flex items-center justify-between font-semibold">
        <span className="flex items-center gap-1">🌸 Aloah</span>
        <span className="text-[9px] text-muted">Yerel Esnaf Ağı</span>
      </div>

      <div className="flex-1 overflow-y-auto p-3 flex flex-col justify-between">
        <AnimatePresence mode="wait">
          {!shopSelected ? (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-3"
            >
              <div>
                <h5 className="font-bold text-foreground text-xs">Mahallemizin Esnafları</h5>
                <p className="text-[9px] text-muted">Topluluk desteği ve özel esnaf indirimleri.</p>
              </div>

              <div className="space-y-2">
                <div
                  onClick={() => setShopSelected(true)}
                  className="border border-border bg-surface-2 p-2.5 rounded-xl hover:border-[#e11d48]/40 cursor-pointer flex gap-3"
                >
                  <div className="h-10 w-10 bg-[#e11d48]/10 text-[#e11d48] rounded-lg flex items-center justify-center text-lg">
                    🥖
                  </div>
                  <div className="min-w-0 flex-1">
                    <h6 className="font-bold text-foreground text-xs">Köşe Fırın & Kafe</h6>
                    <p className="text-[9px] text-muted">Geleneksel ekşi mayalı ekmekler · 400m</p>
                    <span className="inline-block text-[8px] bg-[#e11d48]/10 text-[#e11d48] px-1.5 py-0.5 rounded mt-1 font-semibold">%20 Kupon</span>
                  </div>
                </div>

                <div
                  onClick={() => setShopSelected(true)}
                  className="border border-border bg-surface-2 p-2.5 rounded-xl hover:border-[#e11d48]/40 cursor-pointer flex gap-3"
                >
                  <div className="h-10 w-10 bg-[#e11d48]/10 text-[#e11d48] rounded-lg flex items-center justify-center text-lg">
                    ☕
                  </div>
                  <div className="min-w-0 flex-1">
                    <h6 className="font-bold text-foreground text-xs">Kutup Kahve Evi</h6>
                    <p className="text-[9px] text-muted">Nitelikli çekirdekler ve çalışma alanı · 800m</p>
                    <span className="inline-block text-[8px] bg-accent/10 text-accent px-1.5 py-0.5 rounded mt-1 font-semibold">%15 İndirim</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="detail"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className="space-y-3 flex-1 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <button
                  onClick={() => { setShopSelected(false); setCouponCode(null); }}
                  className="text-xs text-[#e11d48] hover:underline"
                >
                  ← Esnaflara Geri Dön
                </button>
                <div className="border-b border-border/40 pb-2">
                  <h5 className="font-bold text-foreground text-sm">Köşe Fırın & Kafe</h5>
                  <p className="text-[9px] text-muted">Akasya Sokak No: 12 · 4.9 ⭐ (128 Değerlendirme)</p>
                </div>

                <div className="space-y-1.5">
                  <p className="font-semibold text-[9px] text-muted uppercase">Günün Fırsatı</p>
                  <p className="text-[10px] text-muted leading-relaxed">
                    Aloah topluluk üyelerine özel, taze unlu mamul alımlarında geçerli anında %20 indirim kuponu.
                  </p>
                </div>
              </div>

              <div className="mt-auto">
                {couponCode ? (
                  <div className="border border-dashed border-[#e11d48]/40 bg-[#e11d48]/5 p-3 rounded-xl text-center space-y-2">
                    <p className="text-[10px] text-[#e11d48] font-bold">KUPONUNUZ HAZIR!</p>
                    <p className="font-mono text-base font-bold text-foreground select-all tracking-wider">{couponCode}</p>
                    <div className="h-20 w-20 bg-white mx-auto flex items-center justify-center rounded-lg border border-border">
                      {/* Fake QR code visualization */}
                      <div className="h-16 w-16 bg-[repeating-conic-gradient(#000_0_25%,#fff_0_50%)] bg-[size:10px_10px]" />
                    </div>
                    <p className="text-[8px] text-muted">Ödeme esnasında QR kodu esnafa gösterin.</p>
                  </div>
                ) : (
                  <button
                    onClick={getCoupon}
                    className="w-full py-2 bg-[#e11d48] hover:bg-[#e11d48]/90 text-white font-semibold rounded-lg text-center"
                  >
                    Kuponu Tanımla (%20)
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ==========================================================================
   GENERIC SIMULATORS (FALLBACK)
   ========================================================================== */
function GenericMobileSimulator({ project }: { project: Project }) {
  if (project.image) return <ScreenshotScreen project={project} />;
  return (
    <div className="flex h-full flex-col justify-between p-4 text-center">
      <div className="space-y-2 mt-10">
        <div className="h-12 w-12 rounded-full bg-accent/15 text-accent mx-auto flex items-center justify-center text-xl font-bold">
          📱
        </div>
        <h5 className="font-bold text-foreground">{project.title}</h5>
        <p className="text-[10px] text-muted">{project.tagline}</p>
      </div>
      <div className="border border-border bg-surface-2 p-3 rounded-xl text-[10px] text-muted">
        Bu proje için interaktif ekran prototipi henüz hazır değil.
      </div>
      <div className="h-8" />
    </div>
  );
}

/* Ekran görüntüsü olan projeler için: çerçevenin içinde gerçek arayüz. */
function ScreenshotScreen({ project }: { project: Project }) {
  return (
    <div className="relative h-full w-full overflow-y-auto bg-surface">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={project.image}
        alt={`${project.title} arayüzü`}
        className="w-full block"
      />
      <div className="sticky bottom-0 border-t border-border bg-surface/95 px-3 py-2 text-[10px] text-muted backdrop-blur">
        Gerçek arayüzden ekran görüntüsü — kaydırarak gezinebilirsin.
      </div>
    </div>
  );
}

function GenericBrowserSimulator({ project }: { project: Project }) {
  if (project.image) return <ScreenshotScreen project={project} />;
  return (
    <div className="flex h-full flex-col justify-between p-6 text-center">
      <div className="space-y-2 mt-8">
        <div className="h-14 w-14 rounded-full bg-accent/15 text-accent mx-auto flex items-center justify-center text-2xl font-bold">
          💻
        </div>
        <h5 className="font-bold text-foreground">{project.title}</h5>
        <p className="text-[10px] text-muted">{project.tagline}</p>
      </div>
      <div className="border border-border bg-surface-2 p-4 rounded-xl text-[10px] text-muted max-w-sm mx-auto">
        Bu proje için interaktif web simülasyonu henüz hazır değil. Detaylar ve
        bağlantılar sol panelde.
      </div>
      <div className="h-8" />
    </div>
  );
}
