import { profile } from "@/data/profile";

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs tracking-[0.3em] text-accent uppercase">Portfolio</p>
            <h2 className="font-[family-name:var(--font-syne)] text-4xl font-bold tracking-tight md:text-5xl">
              Selected
              <br />
              <span className="text-muted">work & apps</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted">
            Android applications and platforms built for real-world impact — from
            pastoralist communities to refugee camps.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {profile.portfolio.map((project, index) => (
            <article
              key={project.name}
              className="group glass relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:border-accent/30"
            >
              {/* Index number */}
              <span
                className="font-[family-name:var(--font-syne)] absolute top-6 right-6 text-5xl font-bold text-border transition-colors group-hover:text-accent/20"
                aria-hidden
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="relative">
                <p className="text-xs tracking-[0.2em] text-flame uppercase">
                  {project.client}
                </p>
                <h3 className="mt-2 font-[family-name:var(--font-syne)] text-2xl font-bold text-frost">
                  {project.name}
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border/60 px-3 py-1 text-[11px] tracking-wide text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent transition-all group-hover:gap-3"
                  >
                    View on Google Play
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                ) : (
                  <p className="mt-8 text-sm text-muted/60 italic">
                    Internal / humanitarian deployment
                  </p>
                )}
              </div>

              {/* Hover accent line */}
              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-accent to-flame transition-all duration-500 group-hover:w-full"
                aria-hidden
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
