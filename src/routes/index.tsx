import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { EngineeringFocus } from "@/components/site/EngineeringFocus";
import { ContactForm } from "@/components/site/ContactForm";
import { GithubIcon, LinkedinIcon } from "@/components/site/icons";
import {
  certifications,
  experience,
  profile,
  projects,
  technicalStack,
} from "@/lib/portfolio-data";

const pageTitle = "Khalil Wali — Full-Stack Developer | Junior DevOps Engineer";
const pageDescription =
  "Full-Stack Developer and Junior DevOps Engineer working across React, Node.js, Laravel, PostgreSQL, AWS, Docker, Kubernetes, Terraform, and CI/CD.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-[#0D1117] text-[#F0F3F6]">
      <Nav />
      <main>
        {/* HERO SECTION */}
        <Hero />

        {/* ABOUT SECTION */}
        <Section id="about" label="01 / ABOUT" title="About">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-12">
            <div className="lg:col-span-4 rounded border border-[#30363D] bg-[#161B22] p-6 sm:p-8">
              <div className="font-mono text-xs font-semibold uppercase tracking-widest text-[#58A6FF]">
                Engineering Roles
              </div>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#F0F3F6]">
                Full-Stack Developer
              </h3>
              <div className="mt-1 text-lg font-semibold text-[#8B949E]">
                Junior DevOps Engineer
              </div>
              <p className="mt-4 text-xs leading-relaxed text-[#8B949E]">
                Building web applications while architecting reproducible cloud &amp; container
                delivery pipelines.
              </p>
            </div>

            <div className="lg:col-span-8">
              <Reveal>
                <div className="space-y-6 text-base leading-relaxed text-[#8B949E] sm:text-[17px]">
                  <p className="text-[#F0F3F6] font-medium leading-relaxed">{profile.aboutLead}</p>
                  <p>{profile.aboutBody}</p>
                </div>
              </Reveal>
            </div>
          </div>

          {/* ENGINEERING APPROACH GRID ("How I Build") */}
          <EngineeringFocus />
        </Section>

        {/* EXPERIENCE SECTION */}
        <Section id="experience" label="02 / EXPERIENCE" title="Experience">
          <Reveal>
            <div className="relative border-l border-[#30363D] pl-6 sm:pl-8 lg:pl-10">
              <div className="relative">
                {/* Timeline node dot */}
                <span
                  className="absolute -left-[1.95rem] top-1.5 h-3 w-3 rounded-full border-2 border-[#0D1117] bg-[#58A6FF] sm:-left-[2.45rem] lg:-left-[2.95rem]"
                  aria-hidden="true"
                />

                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-bold tracking-tight text-[#F0F3F6] sm:text-2xl">
                    {experience.title}
                  </h3>
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#58A6FF]">
                    {experience.period}
                  </span>
                </div>

                <div className="mt-1 font-mono text-sm font-medium text-[#8B949E]">
                  {experience.company}
                </div>

                <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#8B949E]">
                  {experience.description}
                </p>

                <ul className="mt-6 max-w-3xl space-y-3">
                  {experience.responsibilities.map((resp) => (
                    <li
                      key={resp}
                      className="flex gap-3 text-sm leading-relaxed text-[#8B949E] sm:text-[15px]"
                    >
                      <span
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#58A6FF]/70"
                        aria-hidden="true"
                      />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </Section>

        {/* TECHNICAL STACK (SKILLS) SECTION */}
        <Section id="skills" label="03 / TECHNICAL STACK" title="Technical Stack">
          <div className="mb-8">
            <p className="text-base text-[#8B949E]">{technicalStack.subtitle}</p>
          </div>

          <div className="space-y-10">
            {/* FULL-STACK DEVELOPMENT CATEGORY */}
            <div>
              <div className="border-b border-[#30363D] pb-3 mb-6 flex items-center justify-between">
                <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[#58A6FF]">
                  FULL-STACK DEVELOPMENT
                </h3>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {technicalStack.fullstack.map((group, i) => (
                  <Reveal key={group.category} delay={i * 50}>
                    <div className="h-full rounded border border-[#30363D] bg-[#161B22] p-5 transition-colors hover:border-[#58A6FF]/60">
                      <div className="border-b border-[#30363D]/60 pb-3 font-sans text-sm font-bold text-[#F0F3F6]">
                        {group.category}
                      </div>
                      <ul className="mt-4 space-y-2">
                        {group.items.map((tech) => (
                          <li
                            key={tech}
                            className="flex items-center gap-2 font-mono text-[13px] text-[#8B949E]"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-[#58A6FF]" />
                            <span>{tech}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* DEVOPS & CLOUD CATEGORY */}
            <div>
              <div className="border-b border-[#30363D] pb-3 mb-6 flex items-center justify-between">
                <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[#58A6FF]">
                  DEVOPS &amp; CLOUD
                </h3>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {technicalStack.devops.map((group, i) => (
                  <Reveal key={group.category} delay={i * 50}>
                    <div className="h-full rounded border border-[#30363D] bg-[#161B22] p-5 transition-colors hover:border-[#58A6FF]/60">
                      <div className="border-b border-[#30363D]/60 pb-3 font-sans text-sm font-bold text-[#F0F3F6]">
                        {group.category}
                      </div>
                      <ul className="mt-4 space-y-2">
                        {group.items.map((tech) => (
                          <li
                            key={tech}
                            className="flex items-center gap-2 font-mono text-[13px] text-[#8B949E]"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-[#58A6FF]" />
                            <span>{tech}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* PROJECTS SECTION (EDITORIAL LAYOUT FOR 3 PROJECTS) */}
        <Section id="projects" label="04 / PROJECTS" title="Selected Engineering Work">
          <div className="space-y-16">
            {projects.map((p) => (
              <Reveal key={p.slug}>
                <article className="rounded border border-[#30363D] bg-[#161B22] overflow-hidden transition-all duration-200 hover:border-[#58A6FF]/60">
                  <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-12 lg:items-start lg:gap-10">
                    {/* Left Project Info & Narrative */}
                    <div className="lg:col-span-7">
                      <div className="flex items-center gap-3 font-mono text-xs text-[#8B949E]">
                        <span className="font-bold text-[#58A6FF] text-sm">{p.index}</span>
                        <span className="h-px w-6 bg-[#30363D]" />
                        <span className="uppercase tracking-wider">Engineering Case Study</span>
                      </div>

                      <h3 className="mt-3 text-3xl font-bold tracking-tight text-[#F0F3F6] sm:text-4xl">
                        {p.name}
                      </h3>

                      <p className="mt-1 text-base font-medium text-[#58A6FF]">{p.subtitle}</p>

                      <p className="mt-4 text-base leading-relaxed text-[#8B949E]">
                        {p.description}
                      </p>

                      {/* Tech Stack Pills */}
                      <div className="mt-6">
                        <div className="font-mono text-xs uppercase tracking-wider text-[#8B949E] mb-2">
                          Technologies
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {p.stack.map((t) => (
                            <span
                              key={t}
                              className="rounded border border-[#30363D] bg-[#0D1117] px-2.5 py-1 font-mono text-xs text-[#F0F3F6]"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="mt-8 flex flex-wrap items-center gap-4">
                        <a
                          href={p.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex h-10 items-center gap-2 rounded border border-[#58A6FF] bg-[#58A6FF] px-5 font-sans text-sm font-semibold text-[#0D1117] transition-colors hover:bg-[#58A6FF]/90"
                        >
                          <GithubIcon className="h-4 w-4" /> View on GitHub →
                        </a>
                        <Link
                          to="/projects/$slug"
                          params={{ slug: p.slug }}
                          className="inline-flex h-10 items-center justify-center rounded border border-[#30363D] bg-[#0D1117] px-5 font-sans text-sm font-medium text-[#F0F3F6] transition-colors hover:border-[#58A6FF] hover:text-[#58A6FF]"
                        >
                          Explore Case Study →
                        </Link>
                      </div>
                    </div>

                    {/* Right Architectural Data Flow Visual */}
                    <div className="lg:col-span-5 rounded border border-[#30363D] bg-[#0D1117] p-5 font-mono">
                      <div className="flex items-center justify-between border-b border-[#30363D] pb-3 text-xs uppercase tracking-wider text-[#8B949E]">
                        <span>System Architecture</span>
                        <span className="text-[#3FB950]">● Declarative</span>
                      </div>

                      {/* Flow Node Stack */}
                      <div className="mt-4 space-y-2.5">
                        {p.flowNodes.map((n, idx) => (
                          <div key={n.label} className="space-y-1 text-xs">
                            <div className="rounded border border-[#30363D] bg-[#161B22] p-2.5 text-center">
                              <span className="font-bold text-[#F0F3F6] block">{n.label}</span>
                              {n.sub && (
                                <span className="text-[11px] text-[#8B949E] block">{n.sub}</span>
                              )}
                            </div>
                            {idx < p.flowNodes.length - 1 && (
                              <div className="text-center text-[#58A6FF] font-bold text-xs py-0.5">
                                ↓
                              </div>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Key Engineering Highlights summary */}
                      <div className="mt-5 pt-4 border-t border-[#30363D]/60">
                        <div className="font-mono text-xs uppercase tracking-wider text-[#8B949E] mb-2">
                          Engineering Highlights
                        </div>
                        <ul className="space-y-1.5 text-xs text-[#8B949E]">
                          {p.highlights.slice(0, 3).map((h) => (
                            <li key={h} className="flex items-start gap-1.5">
                              <span className="text-[#58A6FF] shrink-0 mt-0.5">✓</span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* CERTIFICATIONS SECTION */}
        <Section id="certifications" label="05 / CERTIFICATIONS" title="Certifications">
          <div className="grid gap-6 sm:grid-cols-2">
            {certifications.map((c) => (
              <Reveal key={c.name}>
                <div className="rounded border border-[#30363D] bg-[#161B22] p-6 transition-colors hover:border-[#58A6FF]/60">
                  <div className="font-mono text-xs text-[#58A6FF]">Verified Certificate</div>
                  <h3 className="mt-2 text-lg font-bold text-[#F0F3F6]">{c.name}</h3>
                  <div className="mt-1 font-mono text-sm text-[#8B949E]">{c.issuer}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* CONNECT SECTION (SECTION 06) */}
        <Section label="06 / CONNECT" title="Connect">
          <Reveal>
            <div className="rounded border border-[#30363D] bg-[#161B22] p-8 sm:p-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-2xl">
                <h3 className="text-xl font-bold text-[#F0F3F6]">
                  Interested in my work or want to discuss an opportunity?
                </h3>
                <p className="mt-2 text-base leading-relaxed text-[#8B949E]">
                  Reach out directly via GitHub, LinkedIn, or send a message through the contact
                  form below.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4 shrink-0">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded border border-[#58A6FF] bg-[#58A6FF] px-6 font-sans text-sm font-semibold text-[#0D1117] transition-colors hover:bg-[#58A6FF]/90"
                >
                  <GithubIcon className="h-4 w-4" /> GitHub
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded border border-[#30363D] bg-[#0D1117] px-6 font-sans text-sm font-semibold text-[#F0F3F6] transition-colors hover:border-[#58A6FF] hover:text-[#58A6FF]"
                >
                  <LinkedinIcon className="h-4 w-4" /> LinkedIn
                </a>
              </div>
            </div>
          </Reveal>
        </Section>

        {/* CONTACT SECTION (SECTION 07) */}
        <Section id="contact" label="07 / CONTACT" title="Let's Build Something Reliable.">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <Reveal>
                <div>
                  <p className="text-base leading-relaxed text-[#8B949E] sm:text-[17px]">
                    Interested in working together, discussing a full-stack project, or talking
                    about cloud infrastructure &amp; DevOps workflows?
                  </p>

                  <dl className="mt-8 divide-y divide-[#30363D] border-y border-[#30363D]">
                    <div className="py-3.5 grid grid-cols-[5.5rem_1fr] gap-4">
                      <dt className="font-mono text-xs uppercase tracking-wider text-[#8B949E]">
                        Email
                      </dt>
                      <dd>
                        <a
                          href={`mailto:${profile.email}`}
                          className="font-mono text-sm text-[#F0F3F6] transition-colors hover:text-[#58A6FF]"
                        >
                          {profile.email}
                        </a>
                      </dd>
                    </div>

                    <div className="py-3.5 grid grid-cols-[5.5rem_1fr] gap-4">
                      <dt className="font-mono text-xs uppercase tracking-wider text-[#8B949E]">
                        Phone
                      </dt>
                      <dd>
                        <a
                          href={`tel:${profile.phone}`}
                          className="font-mono text-sm text-[#F0F3F6] transition-colors hover:text-[#58A6FF]"
                        >
                          {profile.phone}
                        </a>
                      </dd>
                    </div>

                    <div className="py-3.5 grid grid-cols-[5.5rem_1fr] gap-4">
                      <dt className="font-mono text-xs uppercase tracking-wider text-[#8B949E]">
                        GitHub
                      </dt>
                      <dd>
                        <a
                          href={profile.github}
                          target="_blank"
                          rel="noreferrer"
                          className="font-mono text-sm text-[#F0F3F6] transition-colors hover:text-[#58A6FF]"
                        >
                          GitHub
                        </a>
                      </dd>
                    </div>

                    <div className="py-3.5 grid grid-cols-[5.5rem_1fr] gap-4">
                      <dt className="font-mono text-xs uppercase tracking-wider text-[#8B949E]">
                        LinkedIn
                      </dt>
                      <dd>
                        <a
                          href={profile.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="font-mono text-sm text-[#F0F3F6] transition-colors hover:text-[#58A6FF]"
                        >
                          LinkedIn
                        </a>
                      </dd>
                    </div>

                    <div className="py-3.5 grid grid-cols-[5.5rem_1fr] gap-4">
                      <dt className="font-mono text-xs uppercase tracking-wider text-[#8B949E]">
                        Portfolio
                      </dt>
                      <dd>
                        <a
                          href={profile.portfolio}
                          target="_blank"
                          rel="noreferrer"
                          className="font-mono text-sm text-[#F0F3F6] transition-colors hover:text-[#58A6FF]"
                        >
                          tijabo.online
                        </a>
                      </dd>
                    </div>
                  </dl>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={80}>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
