import { profile } from "@/data/profile";

export function Journey() {
  const journeyItems = profile.journey.filter((item) => item.company !== "Moringa School");

  return (
    <section id="journey" className="relative py-32">
      <div className="absolute inset-0 grid-bg opacity-30" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-20">
          <p className="mb-3 text-xs tracking-[0.3em] text-flame uppercase">Career</p>
          <h2 className="font-[family-name:var(--font-syne)] text-4xl font-bold tracking-tight md:text-5xl">
            A decade of
            <br />
            <span className="text-gradient">building & impact</span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute top-0 bottom-0 left-[7px] w-px bg-gradient-to-b from-accent via-border to-flame/40 md:left-1/2 md:-translate-x-px"
            aria-hidden
          />

          <div className="space-y-12">
            {journeyItems.map((item, index) => (
              <article
                key={`${item.company}-${item.period}`}
                className="relative grid gap-6 md:grid-cols-2 md:gap-12"
              >
                {/* Dot */}
                <div
                  className="absolute top-2 left-0 z-10 md:left-1/2 md:-translate-x-1/2"
                  aria-hidden
                >
                  <div className="flex h-[15px] w-[15px] items-center justify-center rounded-full border-2 border-accent bg-ink">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                  </div>
                </div>

                {/* Left column (even items) */}
                {index % 2 === 0 ? (
                  <div className="ml-8 md:ml-0 md:col-start-1 md:pr-12 md:text-right">
                    <div className="glass group rounded-2xl p-6 transition-all duration-300 hover:border-accent/30 hover:glow-accent md:p-8">
                      <div className="mb-3 flex flex-wrap items-center gap-3 md:justify-end">
                        <span className="text-xs tracking-wider text-accent uppercase">
                          {item.period}
                        </span>
                        <span className="text-xs text-muted">· {item.duration}</span>
                      </div>

                      <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-frost md:text-2xl">
                        {item.role}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-flame">
                        {item.company}
                      </p>

                      <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
                        {item.highlight}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2 md:justify-end">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md bg-surface px-2.5 py-1 text-[11px] tracking-wide text-muted uppercase"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="hidden md:block" />
                )}

                {/* Right column (odd items) */}
                {index % 2 === 1 ? (
                  <div className="ml-8 md:ml-0 md:col-start-2 md:pl-12">
                    <div className="glass group rounded-2xl p-6 transition-all duration-300 hover:border-accent/30 hover:glow-accent md:p-8">
                      <div className="mb-3 flex flex-wrap items-center gap-3">
                        <span className="text-xs tracking-wider text-accent uppercase">
                          {item.period}
                        </span>
                        <span className="text-xs text-muted">· {item.duration}</span>
                      </div>

                      <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-frost md:text-2xl">
                        {item.role}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-flame">{item.company}</p>

                      <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
                        {item.highlight}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md bg-surface px-2.5 py-1 text-[11px] tracking-wide text-muted uppercase"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="hidden md:block" />
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
