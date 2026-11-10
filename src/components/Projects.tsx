import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Projects() {
  return (
    <section id="projects" className="section relative">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="05 — Projects"
            title={
              <>
                Selected work,{" "}
                <span className="text-gradient-accent">shipped</span>.
              </>
            }
            description="A few builds that show how I think about product, performance and the small details that make software feel good."
          />
          <Reveal delay={120}>
            <a
              href="https://github.com/alexcarter"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost px-4 py-2.5 text-xs"
            >
              <Github className="h-4 w-4" strokeWidth={1.8} />
              More on GitHub
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 80} className="h-full">
              <Link
                href={`/projects/${project.slug}`}
                className="card-glass card-hover group flex h-full flex-col overflow-hidden"
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-ink-2">
                  <Image
                    src={project.image}
                    alt={`${project.name} project preview`}
                    fill
                    unoptimized
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#08070e]/55 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-40"
                    aria-hidden="true"
                  />
                  <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/40 px-2.5 py-1 font-mono text-[0.6rem] tracking-wider text-cream/90 backdrop-blur-md">
                    {project.year}
                  </span>
                  <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-black/40 text-cream/90 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold text-cream">
                      {project.name}
                    </h3>
                    <span className="mt-1 font-mono text-[0.6rem] text-muted/50">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-2 text-[0.82rem] leading-relaxed text-muted">
                    {project.tagline}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-line bg-white/[0.03] px-2 py-1 font-mono text-[0.6rem] text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 ? (
                      <span className="rounded-md border border-accent/20 bg-accent/10 px-2 py-1 font-mono text-[0.6rem] text-accent-light">
                        +{project.tech.length - 3}
                      </span>
                    ) : null}
                  </div>

                  <div className="mt-auto flex items-center justify-between border-t border-line/70 pt-4">
                    <span className="text-[0.78rem] font-semibold text-cream/90 transition group-hover:text-accent-light">
                      View details
                    </span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-line bg-white/[0.03] text-muted transition group-hover:border-accent/40 group-hover:bg-accent/15 group-hover:text-accent-light">
                      <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
