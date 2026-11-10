import Link from "next/link";
import { ArrowUp, Heart } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";
import { SocialLinks } from "@/components/SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line bg-[#07060c]/80">
      <div className="container-x py-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="/#home" className="group inline-flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-deep font-display text-sm font-bold text-white">
                {profile.initials}
              </span>
              <span className="font-display text-base font-semibold text-cream">
                {profile.name}
              </span>
            </a>
            <p className="mt-4 max-w-xs text-[0.84rem] leading-relaxed text-muted">
              {profile.tagline}
            </p>
            <SocialLinks className="mt-5" />
          </div>

          <div>
            <h2 className="font-mono text-[0.64rem] uppercase tracking-[0.2em] text-muted/60">
              Navigate
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[0.84rem] text-muted transition hover:text-accent-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-mono text-[0.64rem] uppercase tracking-[0.2em] text-muted/60">
              Get in touch
            </h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-[0.84rem] text-muted transition hover:text-accent-light"
                >
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profile.phoneHref}`}
                  className="text-[0.84rem] text-muted transition hover:text-accent-light"
                >
                  {profile.phone}
                </a>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-[0.84rem] text-muted transition hover:text-accent-light"
                >
                  Start a project
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-line pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-[0.66rem] text-muted/60">
            © {year} {profile.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <p className="flex items-center gap-1.5 font-mono text-[0.66rem] text-muted/60">
              Built with <Heart className="h-3 w-3 text-accent-light" /> Next.js &
              Tailwind
            </p>
            <a
              href="/#home"
              aria-label="Back to top"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-white/[0.03] text-muted transition hover:border-accent/40 hover:text-accent-light"
            >
              <ArrowUp className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
