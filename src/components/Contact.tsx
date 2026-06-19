import { profile } from "@/data/profile";

export function Contact() {
  return (
    <section id="contact" className="relative py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
      />

      <div className="mx-auto max-w-6xl px-6">
        <div className="glass glow-flame relative overflow-hidden rounded-3xl p-10 md:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-flame/10 blur-[80px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-accent/10 blur-[80px]"
          />

          <div className="relative grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-3 text-xs tracking-[0.3em] text-accent uppercase">
                Contact
              </p>
              <h2 className="font-[family-name:var(--font-syne)] text-4xl font-bold tracking-tight md:text-5xl">
                Let&apos;s build
                <br />
                <span className="text-gradient">something great</span>
              </h2>
              <p className="mt-6 max-w-md text-muted">
                Open to consulting, full-time roles, and impactful projects in
                backend engineering and Android development.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="group flex items-center justify-between rounded-xl border border-border bg-surface/50 p-5 transition-all hover:border-accent/40 hover:bg-surface-elevated"
              >
                <div>
                  <p className="text-xs tracking-wider text-muted uppercase">Email</p>
                  <p className="mt-1 font-medium text-frost">{profile.email}</p>
                </div>
                <svg
                  className="h-5 w-5 text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent"
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
                className="group flex items-center justify-between rounded-xl border border-border bg-surface/50 p-5 transition-all hover:border-accent/40 hover:bg-surface-elevated"
              >
                <div>
                  <p className="text-xs tracking-wider text-muted uppercase">LinkedIn</p>
                  <p className="mt-1 font-medium text-frost">john-owuor-9745a794</p>
                </div>
                <svg
                  className="h-5 w-5 text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>

              <p className="pt-2 text-center text-xs text-muted">
                {profile.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
