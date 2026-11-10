"use client";

import { useEffect, useState } from "react";

export function RotatingRole({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (roles.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % roles.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, [roles.length]);

  return (
    <div className="mt-4 flex items-center gap-2.5 font-mono text-[0.78rem] text-muted sm:text-sm">
      <span className="text-accent" aria-hidden="true">
        /
      </span>
      <span className="grid h-[1.35rem] overflow-hidden sm:h-[1.5rem]">
        {roles.map((role, roleIndex) => (
          <span
            key={role}
            aria-hidden={roleIndex !== index}
            className={`col-start-1 row-start-1 whitespace-nowrap transition-all duration-500 ease-out ${
              roleIndex === index
                ? "translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-4 opacity-0"
            }`}
          >
            {role}
            <span className="ml-1 inline-block h-3.5 w-[2px] translate-y-[2px] bg-accent-light/80" />
          </span>
        ))}
      </span>
    </div>
  );
}
