import { Briefcase, Code2, MapPin, Sparkles } from "lucide-react";
import { profile } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const factIcons = [MapPin, Briefcase, Code2, Sparkles];

export function About() {
  return (
    <section id="about" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="01 — About me"
          title={
            <>
              A developer who cares about the{" "}
              <span className="text-gradient-accent">details</span>.
            </>
          }
          description="Part engineer, part designer, occasional coffee snob. Here is the person behind the code."
        />

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-[1.12fr_0.88fr] lg:gap-14">
          <Reveal>
            <div className="space-y-5 text-[0.96rem] leading-[1.85] text-muted">
              {profile.bio.map((paragraph, index) => (
                <p
                  key={index}
                  className={index === 0 ? "text-cream/90" : undefined}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-9">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-accent-light">
                When I&apos;m not coding
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {profile.hobbies.map((hobby) => (
                  <span key={hobby} className="chip">
                    {hobby}
                  </span>
                ))}
              </div>
            </div>

            {/* <p className="mt-9 font-display text-sm italic text-muted/80">
              “Good software is equal parts empathy and iteration.”
              <span className="mt-1 block font-mono text-[0.65rem] not-italic tracking-wider text-accent-light/80">
                — {profile.name}
              </span>
            </p> */}
          </Reveal>

          <div className="space-y-5">
            <Reveal delay={100}>
              <div className="card-glass p-6">
                <p className="font-mono text-[0.66rem] uppercase tracking-[0.2em] text-muted/70">
                  Quick facts
                </p>
                <dl className="mt-5 space-y-4">
                  {profile.facts.map((fact, index) => {
                    const Icon = factIcons[index % factIcons.length];
                    return (
                      <div key={fact.label} className="flex items-start gap-3.5">
                        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-accent/20 bg-accent/10 text-accent-light">
                          <Icon className="h-4 w-4" strokeWidth={1.7} />
                        </span>
                        <div>
                          <dt className="text-[0.68rem] uppercase tracking-wider text-muted/70">
                            {fact.label}
                          </dt>
                          <dd className="mt-0.5 text-sm font-medium text-cream">
                            {fact.value}
                          </dd>
                        </div>
                      </div>
                    );
                  })}
                </dl>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="card-glass overflow-hidden">
                <div className="flex items-center gap-2 border-b border-line px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  <span className="ml-2 font-mono text-[0.62rem] text-muted/70">
                    sagar@portfolio — zsh
                  </span>
                </div>
                <div className="space-y-2.5 p-4 font-mono text-[0.72rem] leading-relaxed">
                  <p>
                    <span className="text-accent-light">➜</span>{" "}
                    <span className="text-cream/80">~</span>{" "}
                    <span className="text-cream">whoami</span>
                  </p>
                  <p className="text-muted">full-stack developer</p>
                  <p>
                    <span className="text-accent-light">➜</span>{" "}
                    <span className="text-cream/80">~</span>{" "}
                    <span className="text-cream">current_focus</span>
                  </p>
                  <p className="text-muted">
                    &quot;shipping accessible, fast interfaces&quot;
                  </p>
                  <p>
                    <span className="text-accent-light">➜</span>{" "}
                    <span className="text-cream/80">~</span>{" "}
                    <span className="text-cream">status</span>
                  </p>
                  <p className="flex items-center gap-2 text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    open to new opportunities
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
