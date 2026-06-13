"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { yapayAlper, getMockReply } from "@/content/yapayAlper";

type Msg = { role: "user" | "assistant"; content: string };

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

function setLast(msgs: Msg[], content: string): Msg[] {
  const copy = msgs.slice();
  copy[copy.length - 1] = { ...copy[copy.length - 1], content };
  return copy;
}

function Avatar() {
  return (
    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-strong text-[#08090c]">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 2l1.9 5.8L20 9.7l-5 3.6 1.9 5.9L12 15.6 6.1 19.2 8 13.3l-5-3.6 6.1-1.9z" />
      </svg>
    </span>
  );
}

function TypingDots() {
  return (
    <span className="inline-flex items-center gap-1 py-1">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </span>
  );
}

export function ChatBox() {
  const reduce = useReducedMotion();
  const [messages, setMessages] = useState<Msg[]>([
    { role: "assistant", content: yapayAlper.intro },
  ]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, busy]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || busy) return;

    setInput("");
    setBusy(true);
    setMessages((m) => [...m, { role: "user", content: trimmed }]);

    await sleep(reduce ? 150 : 650);
    const reply = getMockReply(trimmed);
    setMessages((m) => [...m, { role: "assistant", content: "" }]);

    if (reduce) {
      setMessages((m) => setLast(m, reply));
    } else {
      for (let i = 2; i < reply.length; i += 2) {
        await sleep(14);
        const slice = reply.slice(0, i);
        setMessages((m) => setLast(m, slice));
      }
      setMessages((m) => setLast(m, reply));
    }
    setBusy(false);
  }

  const waiting =
    busy && messages[messages.length - 1]?.role === "user";
  const showSuggestions = messages.length === 1 && !busy;

  return (
    <div className="flex h-[32rem] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-border bg-surface/50">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-border bg-surface px-4 py-3">
        <Avatar />
        <div>
          <p className="font-display text-sm font-semibold text-foreground">
            Yapay Alper
          </p>
          <p className="flex items-center gap-1.5 text-xs text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            çevrimiçi · demo
          </p>
        </div>
      </div>

      {/* Messages */}
      <div
        ref={scrollRef}
        className="flex-1 space-y-4 overflow-y-auto p-4"
        aria-live="polite"
      >
        {messages.map((m, i) =>
          m.role === "assistant" ? (
            <div key={i} className="flex items-start gap-2.5">
              <Avatar />
              <div className="max-w-[80%] rounded-2xl rounded-tl-sm border border-border bg-background px-4 py-2.5 text-sm leading-relaxed text-foreground">
                {m.content || <TypingDots />}
              </div>
            </div>
          ) : (
            <div key={i} className="flex justify-end">
              <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-accent/15 px-4 py-2.5 text-sm leading-relaxed text-foreground ring-1 ring-inset ring-accent/20">
                {m.content}
              </div>
            </div>
          ),
        )}

        {waiting && (
          <div className="flex items-start gap-2.5">
            <Avatar />
            <div className="rounded-2xl rounded-tl-sm border border-border bg-background px-4 py-2.5">
              <TypingDots />
            </div>
          </div>
        )}
      </div>

      {/* Suggestions */}
      {showSuggestions && (
        <div className="flex flex-wrap gap-2 px-4 pb-3">
          {yapayAlper.suggestions.map((q) => (
            <button
              key={q}
              type="button"
              onClick={() => send(q)}
              className="rounded-full border border-border bg-background px-3 py-1.5 text-xs text-muted transition-colors hover:border-accent/40 hover:text-foreground"
            >
              {q}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
        className="flex items-center gap-2 border-t border-border p-3"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Bir şeyler sor…"
          disabled={busy}
          aria-label="Yapay Alper'e mesaj yaz"
          className="flex-1 rounded-full border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-accent/50 focus:outline-none disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={busy || !input.trim()}
          aria-label="Gönder"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-[#08090c] transition-colors hover:bg-accent/90 disabled:opacity-40"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M22 2 11 13M22 2l-7 20-4-9-9-4z" />
          </svg>
        </button>
      </form>
    </div>
  );
}
