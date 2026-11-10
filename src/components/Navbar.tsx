"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";
import { SocialLinks } from "@/components/SocialLinks";

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  const closeMenu = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) {
      setActive("");
      return;
    }

    const sections = navLinks
      .map((link) => document.getElementById(link.href.replace("#", "")))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, closeMenu]);

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-line bg-ink/80 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="container-x flex h-[76px] items-center justify-between gap-4">
          <a
            href="/#home"
            className="group flex items-center gap-2.5"
            aria-label={`${profile.name} — home`}
          >
            <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-accent to-accent-deep font-display text-sm font-bold text-white shadow-[0_8px_20px_-8px_rgba(139,92,246,0.9)]">
              {profile.initials}
              <span className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 transition group-hover:opacity-100" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-[0.95rem] font-semibold tracking-tight text-cream">
                {profile.name}
                <span className="text-accent-light">.</span>
              </span>
              <span className="mt-1 font-mono text-[0.58rem] uppercase tracking-[0.2em] text-muted">
                {profile.designation}
              </span>
            </span>
          </a>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-0.5 rounded-full border border-white/[0.06] bg-white/[0.02] p-1 lg:flex"
          >
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = isHome && active === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative rounded-full px-3.5 py-2 text-[0.82rem] font-medium transition-colors ${
                    isActive ? "text-cream" : "text-muted hover:text-cream"
                  }`}
                >
                  {isActive ? (
                    <span className="absolute inset-0 -z-10 rounded-full border border-accent/25 bg-accent/12" />
                  ) : null}
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="/#contact"
              className="btn btn-primary hidden px-4 py-2.5 text-xs lg:inline-flex"
            >
              Let&apos;s talk
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.2} />
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="icon-btn h-10 w-10 lg:hidden"
            >
              <Menu className="h-5 w-5" strokeWidth={1.8} />
            </button>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="h-px origin-left bg-gradient-to-r from-accent-deep via-accent to-accent-light transition-[width] duration-150"
          style={{ width: `${progress * 100}%` }}
        />
      </header>

      {open ? (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <button
            type="button"
            aria-label="Close menu"
            onClick={closeMenu}
            className="absolute inset-0 h-full w-full bg-black/60 backdrop-blur-sm"
          />
          <div className="menu-in absolute inset-x-3 top-3 max-h-[calc(100dvh-1.5rem)] overflow-y-auto overscroll-contain rounded-3xl border border-line bg-[#0b0914] shadow-2xl shadow-black/60">
            <div className="flex items-center justify-between border-b border-line px-5 py-4">
              <span className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-deep font-display text-xs font-bold text-white">
                  {profile.initials}
                </span>
                <span className="font-display text-sm font-semibold text-cream">
                  {profile.name}
                </span>
              </span>
              <button
                type="button"
                onClick={closeMenu}
                aria-label="Close menu"
                className="icon-btn h-9 w-9"
              >
                <X className="h-4.5 w-4.5" strokeWidth={1.8} />
              </button>
            </div>

            <nav aria-label="Mobile" className="px-3 py-3">
              <ul className="flex flex-col">
                {navLinks.map((link, index) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={closeMenu}
                      className="group flex items-center justify-between rounded-xl px-3 py-3 transition hover:bg-accent/10"
                    >
                      <span className="flex items-baseline gap-3">
                        <span className="font-mono text-[0.65rem] text-accent-light/70">
                          0{index + 1}
                        </span>
                        <span className="font-display text-lg font-medium text-cream">
                          {link.label}
                        </span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-muted transition group-hover:text-accent-light" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex flex-col gap-3 border-t border-line px-5 py-3.5 sm:flex-row sm:items-center sm:justify-between">
              <a
                href={`mailto:${profile.email}`}
                className="font-mono text-[0.7rem] text-muted transition hover:text-accent-light"
              >
                {profile.email}
              </a>
              <SocialLinks className="gap-2" />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
