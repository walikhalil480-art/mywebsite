import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { profile } from "@/lib/portfolio-data";
import { GithubIcon, LinkedinIcon } from "./icons";

const navLinks = [
  { hash: "about", label: "About" },
  { hash: "experience", label: "Experience" },
  { hash: "skills", label: "Skills" },
  { hash: "projects", label: "Projects" },
  { hash: "certifications", label: "Certifications" },
  { hash: "contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState<string>("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);

      // Section active detection
      const sections = navLinks.map((l) => document.getElementById(l.hash));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        const link = navLinks[i];
        if (sec && link && sec.offsetTop <= scrollPosition) {
          setActiveHash(link.hash);
          break;
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "border-b border-[#30363D] bg-[#0D1117]/90 backdrop-blur-md py-0"
          : "border-b border-[#30363D]/40 bg-[#0D1117] py-0"
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          to="/"
          className="text-base font-semibold tracking-tight text-[#F0F3F6] transition-colors hover:text-[#58A6FF]"
          onClick={() => setOpen(false)}
        >
          {profile.shortName}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:gap-8 md:flex">
          {navLinks.map((l) => {
            const isActive = activeHash === l.hash;
            return (
              <Link
                key={l.hash}
                to="/"
                hash={l.hash}
                className={`text-sm font-medium transition-colors ${
                  isActive ? "text-[#58A6FF] font-semibold" : "text-[#8B949E] hover:text-[#F0F3F6]"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <div className="ml-2 flex items-center gap-4 border-l border-[#30363D] pl-6">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="inline-flex items-center justify-center text-[#8B949E] transition-colors hover:text-[#F0F3F6]"
            >
              <GithubIcon className="h-[18px] w-[18px]" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="inline-flex items-center justify-center text-[#8B949E] transition-colors hover:text-[#58A6FF]"
            >
              <LinkedinIcon className="h-[18px] w-[18px]" />
            </a>
          </div>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          className="flex h-9 w-9 items-center justify-center rounded border border-[#30363D] bg-[#161B22] text-[#F0F3F6] transition-colors hover:border-[#58A6FF] md:hidden"
        >
          <svg
            viewBox="0 0 20 20"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {open ? (
              <path d="M5 5l10 10M15 5L5 15" strokeLinecap="round" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {open && (
        <div className="border-b border-[#30363D] bg-[#161B22] px-5 py-4 sm:px-8 md:hidden">
          <div className="flex flex-col space-y-3">
            {navLinks.map((l) => (
              <Link
                key={l.hash}
                to="/"
                hash={l.hash}
                onClick={() => setOpen(false)}
                className={`py-1 text-sm font-medium transition-colors ${
                  activeHash === l.hash ? "text-[#58A6FF]" : "text-[#8B949E] hover:text-[#F0F3F6]"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-[#30363D] flex items-center gap-5">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-sm text-[#8B949E] hover:text-[#F0F3F6]"
              >
                <GithubIcon className="h-4 w-4" /> GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-sm text-[#8B949E] hover:text-[#58A6FF]"
              >
                <LinkedinIcon className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
