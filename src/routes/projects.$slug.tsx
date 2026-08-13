import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { GithubIcon } from "@/components/site/icons";
import { getProject, type Project } from "@/lib/portfolio-data";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Project Not Found" }, { name: "robots", content: "noindex" }],
      };
    }
    const t = `${loaderData.project.name} — Engineering Case Study | Khalil Wali`;
    const d = loaderData.project.description;
    return {
      meta: [
        { title: t },
        { name: "description", content: d },
        { property: "og:title", content: t },
        { property: "og:description", content: d },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProjectPage,
});

function SectionBlock({ title, items }: { title: string; items?: string[] }) {
  if (!items || !items.length) return null;
  return (
    <Reveal>
      <section className="border-t border-[#30363D] py-8 sm:py-10">
        <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-[#58A6FF]">
          {title}
        </h2>
        <ul className="mt-4 space-y-3">
          {items.map((item) => (
            <li key={item} className="flex gap-3 text-base leading-relaxed text-[#8B949E]">
              <span
                className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#58A6FF]"
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </Reveal>
  );
}

function TechnicalFlowNode({ nodes }: { nodes?: { label: string; sub?: string }[] }) {
  if (!nodes || !nodes.length) return null;
  return (
    <Reveal>
      <section className="border-t border-[#30363D] py-8 sm:py-10">
        <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-[#58A6FF] mb-6">
          Architectural Data Flow
        </h2>
        <div className="rounded border border-[#30363D] bg-[#161B22] p-6 font-mono text-xs">
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center">
            {nodes.map((n, i) => (
              <div key={n.label} className="contents">
                <div className="rounded border border-[#30363D] bg-[#0D1117] p-3 text-center">
                  <div className="font-bold text-[#F0F3F6]">{n.label}</div>
                  {n.sub && <div className="mt-1 text-[11px] text-[#8B949E]">{n.sub}</div>}
                </div>
                {i < nodes.length - 1 && (
                  <div className="hidden lg:flex justify-center text-[#58A6FF] font-bold text-sm">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}

function ProjectPage() {
  const { project } = Route.useLoaderData() as { project: Project };

  return (
    <div className="min-h-screen bg-[#0D1117] text-[#F0F3F6]">
      <Nav />
      <main className="mx-auto w-full max-w-4xl px-5 pb-20 pt-12 sm:px-8">
        {/* Back navigation link */}
        <Link
          to="/"
          hash="projects"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-[#8B949E] transition-colors hover:text-[#58A6FF]"
        >
          <span>← Back to engineering projects</span>
        </Link>

        {/* Case Study Header */}
        <header className="mt-8 border-b border-[#30363D] pb-10">
          <div className="flex items-center gap-3 font-mono text-xs text-[#8B949E]">
            <span className="font-bold text-[#58A6FF]">{project.index}</span>
            <span className="h-px w-6 bg-[#30363D]" />
            <span className="uppercase tracking-wider">Engineering Case Study</span>
          </div>

          <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#F0F3F6] sm:text-4xl lg:text-5xl">
            {project.name}
          </h1>

          <p className="mt-2 text-lg font-medium text-[#58A6FF]">{project.subtitle}</p>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#8B949E] sm:text-[17px]">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded border border-[#58A6FF] bg-[#58A6FF] px-5 font-sans text-sm font-semibold text-[#0D1117] transition-colors hover:bg-[#58A6FF]/90"
            >
              <GithubIcon className="h-4 w-4" /> View on GitHub →
            </a>
            <Link
              to="/"
              hash="contact"
              className="inline-flex h-10 items-center rounded border border-[#30363D] bg-[#161B22] px-5 font-sans text-sm font-medium text-[#F0F3F6] transition-colors hover:border-[#58A6FF] hover:text-[#58A6FF]"
            >
              Inquire About Implementation
            </Link>
          </div>
        </header>

        {/* Case Study Sections */}
        <div className="mt-4">
          <SectionBlock title="Overview" items={[project.overview]} />

          <TechnicalFlowNode nodes={project.flowNodes} />

          <SectionBlock title="The Problem" items={[project.problem]} />
          <SectionBlock title="The Solution" items={[project.solution]} />

          <SectionBlock title="Architecture" items={project.architecture} />

          {/* Technology Stack Grid */}
          <Reveal>
            <section className="border-t border-[#30363D] py-8 sm:py-10">
              <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-[#58A6FF]">
                Technology Stack &amp; Tools
              </h2>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {project.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded border border-[#30363D] bg-[#161B22] px-3 py-1.5 font-mono text-xs text-[#F0F3F6]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </section>
          </Reveal>

          {project.features && (
            <SectionBlock title="Application Features" items={project.features} />
          )}
          {project.modules && (
            <SectionBlock title="Healthcare & System Modules" items={project.modules} />
          )}

          <SectionBlock title="Infrastructure & Containerization" items={project.infrastructure} />
          <SectionBlock title="CI/CD & Deployment Pipeline" items={project.deployment} />
          <SectionBlock title="Engineering Highlights" items={project.highlights} />
          <SectionBlock title="Architectural Decisions" items={project.decisions} />
        </div>

        {/* Footer link back */}
        <div className="mt-12 border-t border-[#30363D] pt-8">
          <Link
            to="/"
            hash="projects"
            className="inline-flex h-10 items-center justify-center rounded border border-[#30363D] bg-[#161B22] px-6 font-sans text-sm font-semibold text-[#F0F3F6] transition-colors hover:border-[#58A6FF] hover:text-[#58A6FF]"
          >
            ← Back to All Projects
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
