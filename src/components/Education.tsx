import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Education() {
  return (
    <section id="education" className="section">
      <div className="container-x grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="03 — Education"
            title={
              <>
                Learn, build,{" "}
                <span className="text-gradient-accent">repeat</span>.
              </>
            }
            description="A formal computer science foundation, backed by a habit of learning whatever the next project demands."
          />
          <Reveal delay={120}>
            <div className="mt-8 hidden rounded-2xl border border-line bg-white/[0.02] p-5 lg:block">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted/70">
                Education timeline
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                From my first college computer lab to a CS degree — each step added a
                layer to how I think about building software.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="timeline">
          {education.map((item, index) => (
            <Reveal key={item.degree} delay={index * 90}>
              <div className="relative pb-7 last:pb-0">
                <span className="timeline-dot">
                  <GraduationCap className="h-3.5 w-3.5" strokeWidth={1.8} />
                </span>

                <div className="card-glass card-hover p-5 sm:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="chip text-[0.64rem]">{item.period}</span>
                    <span className="font-mono text-[0.64rem] text-emerald-300/90">
                      {/* {item.result} */}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-[1.05rem] font-semibold leading-snug text-cream sm:text-lg">
                    {item.degree}
                  </h3>
                  <p className="mt-1 text-[0.85rem] font-medium text-accent-light/90">
                    {item.institution}
                  </p>
                  <p className="mt-3 text-[0.85rem] leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
