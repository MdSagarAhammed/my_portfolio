import { skills } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

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
                I&apos;ve been working with these{" "}
                <span className="text-gradient-accent">Technology</span>.
              </>
            }
            description=""
          />
          <Reveal delay={120}>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3.5 py-2 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              always learning
            </span>
          </Reveal>
        </div>


    {/* // <section id="skills" className="section relative overflow-hidden">
    //   <div
    //     className="aurora -left-40 top-1/4 h-80 w-80 bg-accent/10"
    //     aria-hidden="true"
    //   /> */}

      {/* <div className="container-x relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-cream sm:text-5xl">
            My <span className="text-gradient-accent">Skills</span>
          </h2>
          <span
            className="mx-auto mt-4 block h-1 w-28 rounded-full bg-gradient-to-r from-accent via-accent-light to-sky-400"
            aria-hidden="true"
          />
          <p className="mt-6 text-[0.98rem] leading-relaxed text-muted sm:text-base">
            Technologies I&apos;ve been working with recently
          </p>
        </Reveal> */}

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:mt-16 lg:grid-cols-5">
          {skills.map((skill, index) => (
            <Reveal key={skill.name} delay={index * 60}>
              <div className="group flex h-full flex-col items-center justify-center rounded-2xl border border-line bg-white/[0.02] px-4 py-9 text-center transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-white/[0.04] hover:shadow-[0_20px_50px_-30px_rgba(139,92,246,0.6)] sm:px-6 sm:py-10">
                <span className="flex h-16 w-16 items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={skill.logo}
                    alt=""
                    width={64}
                    height={64}
                    loading="lazy"
                    className={`h-16 w-16 object-contain transition duration-300 group-hover:scale-105 ${
                      skill.invert ? "invert" : ""
                    }`}
                  />
                </span>
                <h3 className="mt-6 font-display text-[0.95rem] font-semibold text-cream sm:text-base">
                  {skill.name}
                </h3>
                <p className="mt-2 text-[0.8rem] text-muted/80">
                  {skill.category}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
