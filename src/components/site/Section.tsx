import type { ReactNode } from "react";

export function Section({
  id,
  label,
  title,
  children,
  className = "",
}: {
  id?: string;
  label?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`border-t border-[#30363D] ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        {(label || title) && (
          <header className="mb-10 lg:mb-12">
            {label && (
              <div className="font-mono text-xs uppercase tracking-widest text-[#58A6FF]">
                {label}
              </div>
            )}
            {title && (
              <h2 className="mt-2.5 text-3xl font-bold tracking-tight text-[#F0F3F6] sm:text-4xl">
                {title}
              </h2>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
