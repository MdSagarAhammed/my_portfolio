import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  ExternalLink,
  Github,
  Lightbulb,
  Sparkles,
  UserRound,
  Wrench,
} from "lucide-react";
import { projects } from "@/data/portfolio";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.name,
    description: project.tagline,
    openGraph: {
      title: `${project.name} — Case study`,
      description: project.tagline,
      images: [{ url: project.image, width: 1200, height: 750, alt: project.name }],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  const currentIndex = projects.findIndex((item) => item.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const facts = [
    { label: "Role", value: project.role, icon: UserRound },
    { label: "Timeline", value: project.timeline, icon: CalendarDays },
    { label: "Year", value: project.year, icon: Sparkles },
    { label: "For", value: project.for, icon: Wrench },
  ];

  return (
    <article className="relative overflow-hidden pt-[76px]">
      <div className="grid-overlay" aria-hidden="true" />
      <div
        className="aurora -right-24 top-20 h-72 w-72 bg-accent/20"
        aria-hidden="true"
      />

      <div className="container-x relative py-10 sm:py-14">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted transition hover:text-accent-light"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          All projects
        </Link>

        <header className="mt-8 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="chip">{project.year}</span>
            {/* <span className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-muted/60">
              {project.client}
            </span> */}
          </div>

          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-cream sm:text-5xl md:text-6xl">
            {project.name}
          </h1>
          <p className="mt-4 max-w-2xl text-[1rem] leading-relaxed text-muted sm:text-lg">
            {project.tagline}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <ExternalLink className="h-4 w-4" strokeWidth={2} />
              Live project
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <Github className="h-4 w-4" strokeWidth={1.8} />
              GitHub repository
            </a>
          </div>
        </header>

        <div className="relative mt-10 overflow-hidden rounded-[1.5rem] border border-white/10 bg-ink-2 shadow-[0_40px_100px_-50px_rgba(139,92,246,0.55)] sm:mt-12">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={project.image}
              alt={`${project.name} interface preview`}
              fill
              priority
              loading="eager"
              unoptimized
              sizes="(max-width: 1200px) 100vw, 1160px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_320px] lg:gap-14">
          <div className="min-w-0">
            <section>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-cream">
                Overview
              </h2>
              <div className="mt-4 space-y-4 text-[0.94rem] leading-[1.85] text-muted">
                {project.description.map((paragraph, index) => (
                  <p key={index} className={index === 0 ? "text-cream/85" : undefined}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            <section className="mt-12">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-cream">
                Key features
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 rounded-xl border border-line bg-white/[0.02] p-3.5 text-[0.84rem] leading-relaxed text-muted"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-accent-light"
                      strokeWidth={2}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </section>

            {/* <section className="mt-12">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-amber-400/25 bg-amber-400/10 text-amber-300">
                  <Wrench className="h-4 w-4" strokeWidth={1.8} />
                </span>
                <h2 className="font-display text-2xl font-semibold tracking-tight text-cream">
                  Challenges faced
                </h2>
              </div>
              <ol className="mt-5 space-y-4">
                {project.challenges.map((challenge, index) => (
                  <li
                    key={challenge}
                    className="relative rounded-xl border border-line bg-gradient-to-br from-white/[0.035] to-transparent p-4 pl-14 text-[0.88rem] leading-relaxed text-muted"
                  >
                    <span className="absolute left-4 top-4 font-display text-sm font-bold text-accent-light/80">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {challenge}
                  </li>
                ))}
              </ol>
            </section> */}

            {/* <section className="mt-12">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-400/25 bg-emerald-400/10 text-emerald-300">
                  <Lightbulb className="h-4 w-4" strokeWidth={1.8} />
                </span>
                <h2 className="font-display text-2xl font-semibold tracking-tight text-cream">
                  Improvements &amp; next steps
                </h2>
              </div>
              <ul className="mt-5 space-y-3">
                {project.improvements.map((improvement) => (
                  <li
                    key={improvement}
                    className="flex items-start gap-2.5 text-[0.88rem] leading-relaxed text-muted"
                  >
                    <ArrowRight
                      className="mt-1 h-3.5 w-3.5 shrink-0 text-emerald-300/80"
                      strokeWidth={2}
                    />
                    {improvement}
                  </li>
                ))}
              </ul>
            </section> */}
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="card-glass p-5">
              <h2 className="font-mono text-[0.64rem] uppercase tracking-[0.2em] text-muted/60">
                Main tech stack
              </h2>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-accent/20 bg-accent/10 px-2.5 py-1.5 font-mono text-[0.66rem] text-accent-light"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="my-5 h-px bg-line" />

              <dl className="space-y-4">
                {facts.map((fact) => {
                  const Icon = fact.icon;
                  return (
                    <div key={fact.label} className="flex items-start gap-3">
                      <Icon
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-light/70"
                        strokeWidth={1.8}
                      />
                      <div>
                        <dt className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-muted/60">
                          {fact.label}
                        </dt>
                        <dd className="mt-0.5 text-[0.82rem] font-medium text-cream/90">
                          {fact.value}
                        </dd>
                      </div>
                    </div>
                  );
                })}
              </dl>

              <div className="mt-6 grid gap-2">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary py-2.5 text-xs"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Visit live site
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost py-2.5 text-xs"
                >
                  <Github className="h-3.5 w-3.5" />
                  View source
                </a>
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-16 border-t border-line pt-8">
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group flex flex-col justify-between gap-4 rounded-2xl border border-line bg-white/[0.02] p-6 transition hover:border-accent/40 hover:bg-accent/[0.06] sm:flex-row sm:items-center"
          >
            <div>
              <p className="font-mono text-[0.64rem] uppercase tracking-[0.18em] text-muted/60">
                Next project
              </p>
              <p className="mt-1.5 font-display text-xl font-semibold text-cream">
                {nextProject.name}
              </p>
              <p className="mt-1 max-w-md text-[0.82rem] text-muted">
                {nextProject.tagline}
              </p>
            </div>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent-light transition group-hover:translate-x-1 group-hover:bg-accent group-hover:text-white">
              <ArrowUpRight className="h-5 w-5" strokeWidth={2} />
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
