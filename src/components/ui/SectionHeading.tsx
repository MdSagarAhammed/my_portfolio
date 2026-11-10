import { Reveal } from "@/components/ui/Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      <p
        className={`eyebrow ${align === "center" ? "justify-center after:block after:h-px after:w-7 after:bg-gradient-to-l after:from-transparent after:to-accent" : ""}`}
      >
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-3xl font-bold leading-[1.12] tracking-tight text-cream sm:text-4xl md:text-[2.9rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-[0.98rem] leading-relaxed text-muted sm:text-base">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
