import { profile } from "@/lib/portfolio-data";
import { GithubIcon, LinkedinIcon } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-[#30363D] bg-[#0D1117]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <div className="text-base font-semibold text-[#F0F3F6]">{profile.shortName}</div>
          <div className="mt-1 font-mono text-xs text-[#8B949E]">
            Full-Stack Developer | Junior DevOps Engineer
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-sm">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-[#8B949E] transition-colors hover:text-[#F0F3F6]"
          >
            <GithubIcon className="h-4 w-4" /> GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-[#8B949E] transition-colors hover:text-[#58A6FF]"
          >
            <LinkedinIcon className="h-4 w-4" /> LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-[#8B949E] transition-colors hover:text-[#F0F3F6]"
          >
            Email
          </a>
        </div>
      </div>
      <div className="border-t border-[#30363D]/60 py-4 text-center font-mono text-xs text-[#8B949E]">
        © 2026 {profile.shortName}
      </div>
    </footer>
  );
}
