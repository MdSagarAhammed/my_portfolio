import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden pt-[76px]">
      <div className="grid-overlay" aria-hidden="true" />
      <div className="container-x relative py-20 text-center">
        <p className="font-mono text-[0.72rem] uppercase tracking-[0.3em] text-accent-light">
          Error 404
        </p>
        <h1 className="mt-4 font-display text-5xl font-bold tracking-tight text-cream sm:text-7xl">
          Page not <span className="text-gradient-accent">found</span>.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-muted">
          The page you&apos;re looking for moved, or never existed. Let&apos;s get you
          back to something useful.
        </p>
        <Link href="/" className="btn btn-primary mt-8">
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
      </div>
    </section>
  );
}
