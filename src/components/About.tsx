import { profile } from "@/data/profile";
import { SkillIcon } from "@/components/SkillIcon";

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs tracking-[0.3em] text-accent uppercase">About</p>
            <h2 className="font-[family-name:var(--font-syne)] text-4xl font-bold tracking-tight md:text-5xl">
              Engineering with
              <br />
              <span className="text-muted">purpose & precision</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted">
            {profile.education.degree}
            <br />
            {profile.education.school} · {profile.education.period}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          <div className="glass glow-accent rounded-2xl p-8 lg:col-span-7 lg:p-10">
            <p className="text-lg leading-relaxed text-frost/90 md:text-xl">
              {profile.summary}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:col-span-5">
            {profile.stats.map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-2xl p-6 transition-colors hover:border-accent/30"
              >
                <p className="font-[family-name:var(--font-syne)] text-3xl font-bold text-accent md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs tracking-wide text-muted uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-xs tracking-[0.25em] text-muted uppercase">
              Core Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {profile.skills.map((skill) => (
                <span
                  key={skill}
                  className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated/50 px-4 py-2 text-sm text-frost/80 transition-colors hover:border-accent/40 hover:text-accent"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-border/60 bg-ink/30 text-muted transition-colors group-hover:border-accent/40 group-hover:text-accent">
                    <SkillIcon name={skill} className="h-4 w-4" />
                  </span>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs tracking-[0.25em] text-muted uppercase">
              Languages
            </h3>
            <div className="space-y-3">
              {profile.languages.map((lang) => (
                <div
                  key={lang.name}
                  className="flex items-center justify-between border-b border-border/50 pb-3"
                >
                  <span className="font-medium text-frost">{lang.name}</span>
                  <span className="text-sm text-muted">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
