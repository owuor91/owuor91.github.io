"use client";

import { useMemo, useState } from "react";
import { Markdown } from "@/components/Markdown";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export function DigitalTwinChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState<string | null>(null);

  const canSend = useMemo(() => input.trim().length > 0, [input]);

  const send = async () => {
    const content = input.trim();
    if (!content) return;

    setInput("");

    setMessages((prev) => [...prev, { role: "user", content }]);
    setError(
      "Digital Twin chat is disabled on GitHub Pages (static hosting can’t run the server API route that keeps your API key private). Deploy to Vercel/Render to enable chat.",
    );
  };

  return (
    <section id="chat" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs tracking-[0.3em] text-accent uppercase">
              Digital Twin
            </p>
            <h2 className="font-[family-name:var(--font-syne)] text-4xl font-bold tracking-tight md:text-5xl">
              Chat with
              <br />
              <span className="text-muted">John&apos;s AI twin</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted">
            Ask career questions and get answers grounded in this site&apos;s data.
          </p>
        </div>

        <div className="glass relative overflow-hidden rounded-3xl p-6 md:p-8">
          <div className="grid gap-5 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div
                className="h-[420px] space-y-3 overflow-auto rounded-2xl border border-border/60 bg-ink/20 p-4"
              >
                <div className="rounded-2xl border border-border/60 bg-surface-elevated/40 px-4 py-3 text-sm leading-relaxed text-frost/90">
                  Digital Twin chat needs a server endpoint (to keep API keys private). GitHub
                  Pages is static-only, so chat is disabled here.
                </div>
                {messages.map((m, idx) => (
                  <div
                    key={idx}
                    className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                        m.role === "user"
                          ? "bg-accent/15 text-frost border border-accent/20"
                          : "bg-surface-elevated/40 text-frost/90 border border-border/60"
                      }`}
                    >
                      <Markdown content={m.content} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 lg:col-span-4">
              <div className="rounded-2xl border border-border/60 bg-surface/40 p-4">
                <p className="text-xs tracking-[0.25em] text-muted uppercase">
                  Try asking
                </p>
                <ul className="mt-3 space-y-2 text-sm text-frost/80">
                  <li>What did you build at Twiga Foods?</li>
                  <li>What&apos;s your strongest backend stack?</li>
                  <li>Tell me about the Relay offline messaging pilot.</li>
                  <li>Which projects involved UNICEF?</li>
                </ul>
              </div>

              {error && (
                <div className="rounded-2xl border border-flame/30 bg-flame/10 p-4 text-sm text-frost">
                  {error}
                </div>
              )}

              <div className="rounded-2xl border border-border/60 bg-surface/40 p-4">
                <label className="text-xs tracking-[0.25em] text-muted uppercase">
                  Your question
                </label>
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
                      e.preventDefault();
                      void send();
                    }
                  }}
                  rows={4}
                  placeholder="Ask about roles, projects, skills, impact…"
                  className="mt-3 w-full resize-none rounded-xl border border-border/70 bg-ink/30 px-3 py-2 text-sm text-frost outline-none placeholder:text-muted/70 focus:border-accent/50"
                />
                <div className="mt-3 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setMessages([]);
                      setError(null);
                    }}
                    className="rounded-full border border-border/70 px-4 py-2 text-xs font-medium tracking-wider text-muted uppercase transition-colors hover:border-accent/30 hover:text-frost"
                  >
                    Clear
                  </button>
                  <button
                    type="button"
                    onClick={() => void send()}
                    disabled={!canSend}
                    className="rounded-full bg-accent px-6 py-2 text-xs font-semibold tracking-wider text-ink uppercase transition-opacity disabled:opacity-40"
                    title="Send (Ctrl/⌘ + Enter)"
                  >
                    Send
                  </button>
                </div>
                <p className="mt-2 text-[11px] text-muted">
                  Tip: press Ctrl/⌘ + Enter to send.
                </p>
              </div>
            </div>
          </div>

          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-accent/10 blur-[90px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-flame/10 blur-[90px]"
          />
        </div>
      </div>
    </section>
  );
}
