import { Link } from "@tanstack/react-router";
import { profile } from "@/lib/portfolio-data";
import { GithubIcon, LinkedinIcon } from "./icons";

function WorkspaceTerminal() {
  return (
    <div className="rounded border border-[#30363D] bg-[#161B22] shadow-xl overflow-hidden font-mono text-[13px] leading-relaxed text-[#F0F3F6]">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between border-b border-[#30363D] bg-[#0D1117] px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#EC6A5E]/80 inline-block" />
          <span className="h-3 w-3 rounded-full bg-[#F4BF4F]/80 inline-block" />
          <span className="h-3 w-3 rounded-full bg-[#61C554]/80 inline-block" />
          <span className="ml-2 text-xs text-[#8B949E]">~/khalil/projects</span>
        </div>
        <div className="text-[11px] text-[#8B949E]">zsh</div>
      </div>

      {/* Terminal Content Area */}
      <div className="p-4 sm:p-5 space-y-4 text-[#8B949E]">
        {/* Command 1: git status */}
        <div>
          <div className="flex items-center gap-2 text-[#F0F3F6]">
            <span className="text-[#58A6FF]">$</span>
            <span>git status</span>
          </div>
          <div className="mt-1 text-xs text-[#8B949E] space-y-0.5">
            <div>On branch main</div>
            <div className="text-[#3FB950]">working tree clean</div>
          </div>
        </div>

        {/* Command 2: docker compose ps */}
        <div className="pt-2 border-t border-[#30363D]/40">
          <div className="flex items-center gap-2 text-[#F0F3F6]">
            <span className="text-[#58A6FF]">$</span>
            <span>docker compose ps</span>
          </div>
          <div className="mt-1.5 space-y-0.5 text-xs text-[#F0F3F6]">
            <div className="flex justify-between">
              <span>backend</span>
              <span className="text-[#3FB950]">running</span>
            </div>
            <div className="flex justify-between">
              <span>frontend</span>
              <span className="text-[#3FB950]">running</span>
            </div>
            <div className="flex justify-between">
              <span>database</span>
              <span className="text-[#3FB950]">running</span>
            </div>
          </div>
        </div>

        {/* Command 3: kubectl get deployments */}
        <div className="pt-2 border-t border-[#30363D]/40">
          <div className="flex items-center gap-2 text-[#F0F3F6]">
            <span className="text-[#58A6FF]">$</span>
            <span>kubectl get deployments</span>
          </div>
          <div className="mt-1.5 space-y-0.5 text-xs text-[#F0F3F6]">
            <div className="flex justify-between">
              <span>api</span>
              <span className="text-[#3FB950]">1/1</span>
            </div>
            <div className="flex justify-between">
              <span>frontend</span>
              <span className="text-[#3FB950]">1/1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 pt-6 pb-12 sm:px-8 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-20">
      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-12">
        {/* Left Column */}
        <div>
          <div className="font-mono text-xs font-semibold tracking-widest text-[#58A6FF] uppercase">
            {profile.eyebrow}
          </div>

          <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#F0F3F6] sm:text-4xl lg:text-[44px] lg:leading-[1.15]">
            {profile.heading}
          </h1>

          <div className="mt-4 flex items-center gap-2">
            <span className="font-sans text-base font-semibold text-[#F0F3F6]">{profile.name}</span>
            <span className="text-[#30363D]">•</span>
            <span className="font-mono text-xs text-[#8B949E]">{profile.role}</span>
          </div>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-[#8B949E]">
            {profile.heroDescription}
          </p>

          {/* Action buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link
              to="/"
              hash="projects"
              className="inline-flex h-11 items-center justify-center rounded border border-[#58A6FF] bg-[#58A6FF] px-6 font-sans text-sm font-semibold text-[#0D1117] transition-all hover:bg-[#58A6FF]/90 shadow-sm"
            >
              View Projects →
            </Link>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-sans text-sm font-medium text-[#8B949E] transition-colors hover:text-[#F0F3F6]"
            >
              <GithubIcon className="h-4 w-4" />
              <span>GitHub →</span>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-sans text-sm font-medium text-[#8B949E] transition-colors hover:text-[#58A6FF]"
            >
              <LinkedinIcon className="h-4 w-4" />
              <span>LinkedIn →</span>
            </a>
          </div>

          {/* Plain Text Identity Line */}
          <div className="mt-7 pt-5 border-t border-[#30363D]/40 font-mono text-xs text-[#8B949E]">
            {profile.identityLine}
          </div>
        </div>

        {/* Right Workspace Terminal Column */}
        <div className="w-full">
          <WorkspaceTerminal />
        </div>
      </div>
    </section>
  );
}
