import { Facebook, Github, Linkedin, Twitter, type LucideIcon } from "lucide-react";
import { socials, type SocialIcon } from "@/data/portfolio";

const iconMap: Record<SocialIcon, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  facebook: Facebook,
};

type SocialLinksProps = {
  variant?: "icon" | "pill";
  className?: string;
  showLabels?: boolean;
};

export function SocialLinks({
  variant = "icon",
  className = "",
  showLabels = false,
}: SocialLinksProps) {
  return (
    <div className={`flex flex-wrap items-center gap-2.5 ${className}`}>
      {socials.map((social) => {
        const Icon = iconMap[social.icon];

        if (variant === "pill") {
          return (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-xl border border-line bg-white/[0.03] px-4 py-3 transition hover:border-accent/45 hover:bg-accent/10"
            >
              <Icon className="h-4.5 w-4.5 text-accent-light" strokeWidth={1.8} />
              <span className="flex flex-col leading-tight">
                <span className="text-sm font-medium text-cream">{social.label}</span>
                <span className="font-mono text-[0.68rem] text-muted">{social.handle}</span>
              </span>
            </a>
          );
        }

        return (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            title={social.label}
            className="icon-btn"
          >
            <Icon className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.8} />
            {showLabels ? <span className="sr-only">{social.label}</span> : null}
          </a>
        );
      })}
    </div>
  );
}
