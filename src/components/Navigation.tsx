"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#chat", label: "Chat" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = links.map((l) => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || menuOpen ? "glass py-3" : "bg-transparent py-5"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <a
            href="#"
            className="font-[family-name:var(--font-syne)] text-sm font-bold tracking-[0.2em] text-frost uppercase"
          >
            JO
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative text-sm tracking-wide transition-colors ${
                    active === link.href.slice(1)
                      ? "text-accent"
                      : "text-muted hover:text-frost"
                  }`}
                >
                  {link.label}
                  {active === link.href.slice(1) && (
                    <span className="absolute -bottom-1 left-0 h-px w-full bg-accent" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-full border border-accent/30 bg-accent/10 px-5 py-2 text-xs font-medium tracking-wider text-accent uppercase transition-all hover:border-accent/60 hover:bg-accent/20 md:inline-block"
            >
              Get in touch
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg border border-border/60 md:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <span className="sr-only">{menuOpen ? "Close" : "Menu"}</span>
              <div className="flex w-5 flex-col gap-1.5">
                <span
                  className={`block h-0.5 w-full bg-frost transition-all duration-300 ${
                    menuOpen ? "translate-y-2 rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-frost transition-all duration-300 ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-frost transition-all duration-300 ${
                    menuOpen ? "-translate-y-2 -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-ink/95 backdrop-blur-xl transition-all duration-500 md:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-8">
          {links.map((link, i) => (
            <li
              key={link.href}
              className="transition-all duration-500"
              style={{
                transitionDelay: menuOpen ? `${i * 60}ms` : "0ms",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(16px)",
              }}
            >
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight text-frost transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
