import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div
        aria-hidden
        className="animate-pulse-slow pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[120px]"
      />
      <div
        aria-hidden
        className="animate-pulse-slow pointer-events-none absolute -bottom-48 -left-48 h-[400px] w-[400px] rounded-full bg-flame/8 blur-[100px]"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-24">
        <div className="animate-fade-up mb-6 inline-flex items-center gap-3 rounded-full border border-border/60 bg-surface/50 px-4 py-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="text-xs tracking-[0.15em] text-muted uppercase">
            Available for opportunities
          </span>
        </div>

        <h1 className="animate-fade-up-delay-1 font-[family-name:var(--font-syne)] text-[clamp(3rem,8vw,6.5rem)] leading-[0.95] font-extrabold tracking-tight">
          John
          <br />
          <span className="text-gradient">Owuor</span>
        </h1>

        <p className="animate-fade-up-delay-2 mt-8 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
          {profile.title} based in{" "}
          <span className="text-frost">{profile.location}</span>. Building backend
          systems and native Android experiences that matter — from fintech
          platforms to humanitarian tools.
        </p>

        <div className="animate-fade-up-delay-3 mt-12 flex flex-wrap items-center gap-4">
          <a
            href="#portfolio"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-accent px-8 py-3.5 text-sm font-semibold tracking-wide text-ink uppercase transition-transform hover:scale-[1.02]"
          >
            View Portfolio
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3.5 text-sm font-medium tracking-wide text-frost uppercase transition-colors hover:border-accent/40 hover:text-accent"
          >
            LinkedIn
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.128 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="animate-float absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] tracking-[0.3em] text-muted uppercase">Scroll</span>
          <div className="h-10 w-px bg-gradient-to-b from-accent/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
