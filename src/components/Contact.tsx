import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { SocialLinks } from "@/components/SocialLinks";

const contactLinks = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    note: "Best for detailed project briefs",
    icon: Mail,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phoneHref}`,
    note: "Weekdays, 10am — 7pm (GMT+6)",
    icon: Phone,
  },
  {
    label: "WhatsApp",
    value: profile.phone,
    href: `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(
      "Hi Alex! I found your portfolio and would like to talk about a project.",
    )}`,
    note: "Quick questions and casual chats",
    icon: MessageCircle,
  },
];

export function Contact() {
  return (
    <section id="contact" className="section relative overflow-hidden">
      <div
        className="aurora -right-32 bottom-0 h-80 w-80 bg-accent/15"
        aria-hidden="true"
      />

      <div className="container-x relative">
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-[#171128] via-[#100d1c] to-[#0b0913] p-6 shadow-[0_40px_100px_-50px_rgba(139,92,246,0.5)] sm:p-10 lg:p-14">
            <div className="grid-overlay opacity-60" aria-hidden="true" />
            <div
              className="absolute -left-20 -top-24 h-64 w-64 rounded-full bg-accent/20 blur-[90px]"
              aria-hidden="true"
            />

            <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
              <div>
                <p className="eyebrow">05 — Contact</p>
                <h2 className="mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight text-cream sm:text-4xl md:text-[2.8rem]">
                  Have an idea?{" "}
                  <span className="text-gradient-accent">Let&apos;s build it.</span>
                </h2>
                <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-muted">
                  I&apos;m open to freelance projects, full-time roles and the occasional
                  interesting collaboration. Tell me what you&apos;re working on — I
                  usually reply within a day.
                </p>

                <div className="mt-7 flex items-center gap-3">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted">
                    {profile.availability}
                  </span>
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-3">
                  <span className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-muted/60">
                    Or find me on
                  </span>
                  <SocialLinks />
                </div>

                <p className="mt-8 flex items-center gap-2 font-mono text-[0.66rem] text-muted/60">
                  <MapPin className="h-3.5 w-3.5" />
                  {profile.location} · open to remote work
                </p>
              </div>

              <div className="flex flex-col gap-3">
                {contactLinks.map((link, index) => {
                  const Icon = link.icon;
                  const external = link.label === "WhatsApp";
                  return (
                    <Reveal key={link.label} delay={index * 80}>
                      <a
                        href={link.href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        className="group flex items-center gap-3.5 rounded-xl border border-line bg-white/[0.03] p-3.5 transition hover:border-accent/40 hover:bg-accent/[0.08] sm:p-4"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-accent/20 bg-accent/10 text-accent-light transition group-hover:border-accent/40 group-hover:bg-accent/20">
                          <Icon className="h-4.5 w-4.5" strokeWidth={1.7} />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block font-mono text-[0.6rem] uppercase tracking-[0.16em] text-muted/60">
                            {link.label}
                          </span>
                          <span className="mt-0.5 block truncate text-sm font-medium text-cream">
                            {link.value}
                          </span>
                          <span className="mt-0.5 block text-[0.68rem] text-muted/80">
                            {link.note}
                          </span>
                        </span>
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-muted/50 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-light" />
                      </a>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
