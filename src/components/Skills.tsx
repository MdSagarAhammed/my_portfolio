import type { CSSProperties } from "react";
import { Layers, Server, Wrench } from "lucide-react";
import { skillGroups, type SkillGroupIcon } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const icons: Record<SkillGroupIcon, typeof Layers> = {
  frontend: Layers,
  backend: Server,
  tools: Wrench,
};

const extras = [ "Vercel", "Git", "GitHub", "BetterAuth", "Javascript"];

export function Skills() {
  return (
    <section id="skills" className="section relative overflow-hidden">
      <div
        className="aurora -left-40 top-1/4 h-80 w-80 bg-accent/10"
        aria-hidden="true"
      />

      <div className="container-x relative">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="02 — Skills"
            title={
              <>
                A toolkit built for{" "}
                <span className="text-gradient-accent">shipping</span>.
              </>
            }
            description="I pick tools for the problem, not the hype. These are the ones I reach for most."
          />
          <Reveal delay={120}>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3.5 py-2 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              always learning
            </span>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = icons[group.icon];
            return (
              <Reveal key={group.title} delay={index * 90}>
                <div className="card-glass card-hover h-full p-6">
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/25 bg-gradient-to-br from-accent/20 to-accent-deep/10 text-accent-light">
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </span>
                    <span className="font-mono text-[0.62rem] tracking-wider text-muted/50">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-lg font-semibold text-cream">
                    {group.title}
                  </h3>
                  <p className="mt-1.5 text-[0.82rem] leading-relaxed text-muted">
                    {group.blurb}
                  </p>

                  <div className="mt-6 space-y-4">
                    {group.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex items-baseline justify-between gap-3">
                          <span className="text-[0.82rem] font-medium text-cream/90">
                            {skill.name}
                          </span>
                          <span className="font-mono text-[0.62rem] text-muted/70">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="skill-track mt-2">
                          <div
                            className="skill-fill"
                            style={{ "--level": `${skill.level}%` } as CSSProperties}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 rounded-2xl border border-line/70 bg-white/[0.02] px-5 py-4">
            <span className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-muted/70">
              Also comfortable with
            </span>
            {extras.map((item) => (
              <span
                key={item}
                className="rounded-md border border-line bg-white/[0.03] px-2 py-1 font-mono text-[0.66rem] text-muted"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
