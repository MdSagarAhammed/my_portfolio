import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Sparkles,
} from "lucide-react";
import { profile, stack, stats } from "@/data/portfolio";
import { SocialLinks } from "@/components/SocialLinks";
import { Reveal } from "@/components/ui/Reveal";
import { RotatingRole } from "@/components/RotatingRole";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-[76px]">
      <div className="grid-overlay" aria-hidden="true" />
      <div
        className="aurora -right-24 top-10 h-80 w-80 bg-accent/25"
        aria-hidden="true"
      />
      <div
        className="aurora -left-32 top-1/3 h-72 w-72 bg-accent-deep/20"
        style={{ animationDelay: "-6s" }}
        aria-hidden="true"
      />

      <div className="container-x relative flex min-h-[calc(100svh-76px)] flex-col justify-center py-14 sm:py-16 lg:py-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1.06fr_0.94fr] lg:gap-10">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-accent/25 bg-accent/10 px-3.5 py-1.5 text-xs font-medium text-accent-light">
                <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {profile.availability}
              </span>
            </Reveal>

            <Reveal delay={80}>
              <p className="mt-7 font-mono text-[0.82rem] tracking-wide text-muted">
                <span className="text-accent-light">$</span> whoami —{" "}
                <span className="text-cream">Hi, I&apos;m {profile.name}</span>
              </p>

              <h1 className="mt-3 font-display text-[2.7rem] font-bold leading-[1.02] tracking-[-0.03em] text-cream sm:text-6xl lg:text-[4.25rem]">
                <span className="block">
                  {profile.designation.split(" ").slice(0, -1).join(" ")}
                </span>
                <span className="text-gradient-accent block">
                  {profile.designation.split(" ").slice(-1)}.
                </span>
              </h1>

              <RotatingRole roles={profile.roles} />
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-5 max-w-xl text-[0.98rem] leading-relaxed text-muted sm:text-[1.05rem]">
                {profile.tagline}
              </p>
            </Reveal>

            <Reveal delay={230}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={profile.resume}
                  download="Alex-Carter-Resume.pdf"
                  className="btn btn-primary"
                >
                  <Download className="h-4 w-4" strokeWidth={2.2} />
                  Download Resume
                </a>
                <a href="#projects" className="btn btn-ghost">
                  View Projects
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                </a>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-4">
                <span className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-muted/70">
                  Find me on
                </span>
                <span className="hidden h-px w-8 bg-line sm:block" />
                <SocialLinks />
              </div>
            </Reveal>

            <Reveal delay={360}>
              <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-line pt-6">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="sr-only">{stat.label}</dt>
                    <dd className="font-display text-2xl font-semibold text-cream sm:text-[1.7rem]">
                      <span className="text-gradient-accent">{stat.value}</span>
                    </dd>
                    <dd className="mt-1 text-[0.7rem] leading-snug text-muted sm:text-xs">
                      {stat.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative mx-auto w-full max-w-[400px] lg:max-w-[440px]">
            <div className="relative aspect-[4/5]">
              <div
                className="absolute -inset-6 rounded-[2.6rem] bg-accent/10 blur-2xl"
                aria-hidden="true"
              />
              <div
                className="absolute -inset-3 rounded-[2.3rem] border border-dashed border-white/10"
                aria-hidden="true"
              />

              <div className="relative h-full overflow-hidden rounded-[2rem] border border-white/12 bg-surface p-2 shadow-[0_30px_80px_-40px_rgba(139,92,246,0.65)]">
                <div className="relative h-full overflow-hidden rounded-[1.55rem] bg-ink-2">
                  <Image
                    src={profile.photo}
                    alt={`Portrait of ${profile.name}`}
                    fill
                    priority
                    unoptimized
                    sizes="(max-width: 1024px) 80vw, 440px"
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink via-ink/40 to-transparent"
                    aria-hidden="true"
                  />

                  <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
                    <div className="rounded-xl border border-white/10 bg-black/40 px-3 py-2 backdrop-blur-md">
                      <p className="font-display text-sm font-semibold text-cream">
                        {profile.name}
                      </p>
                      <p className="font-mono text-[0.6rem] tracking-wide text-accent-light">
                        {profile.designation}
                      </p>
                    </div>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-300">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                  </div>
                </div>
              </div>

              <div
                className="float-soft absolute -left-3 top-10 hidden rounded-xl border border-line bg-[#0d0b17]/90 px-3.5 py-2.5 shadow-xl shadow-black/40 backdrop-blur-md sm:block"
                style={{ animationDelay: "-2s" }}
              >
                <p className="font-mono text-[0.62rem] text-muted">currently into</p>
                <p className="mt-0.5 text-xs font-semibold text-cream">
                  design systems & DX
                </p>
              </div>

              <div className="float-soft absolute -right-2 top-1/3 hidden rounded-xl border border-accent/30 bg-[#120d22]/95 px-3.5 py-2.5 shadow-xl shadow-accent/20 backdrop-blur-md sm:block">
                <p className="font-mono text-[0.62rem] text-accent-light">4+ years</p>
                <p className="mt-0.5 text-xs font-semibold text-cream">shipping web apps</p>
              </div>

              <div className="absolute -bottom-4 right-6 flex items-center gap-2 rounded-full border border-line bg-[#0d0b17]/95 px-3 py-2 shadow-lg backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-accent-light" strokeWidth={2} />
                <span className="font-mono text-[0.62rem] text-muted">open to work</span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="marquee mt-16 border-y border-line/70 py-4">
          <div className="marquee-track items-center gap-8">
            {[...stack, ...stack].map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="flex shrink-0 items-center gap-8 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted/75"
                aria-hidden={index >= stack.length}
              >
                {item}
                <span className="h-1 w-1 rounded-full bg-accent/60" />
              </span>
            ))}
          </div>
        </div>

        <a
          href="#about"
          className="mt-8 hidden items-center gap-2 self-start font-mono text-[0.66rem] uppercase tracking-[0.2em] text-muted transition hover:text-accent-light sm:inline-flex"
        >
          <ArrowDown className="h-3.5 w-3.5" />
          Scroll to explore
        </a>
      </div>
    </section>
  );
}
