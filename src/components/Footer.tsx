import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <p className="text-xs text-muted">
          © {year} {profile.name}. All rights reserved.
        </p>
        <p className="font-[family-name:var(--font-syne)] text-xs tracking-[0.2em] text-border uppercase">
          Built with Next.js
        </p>
      </div>
    </footer>
  );
}
