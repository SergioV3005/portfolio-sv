import Link from "next/link";
import HeroParallaxSection from "@/components/HeroParallaxSection";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import TimelineItem from "@/components/TimelineItem";
import WritingCard from "@/components/WritingCard";
import { experiences } from "@/content/experience";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { writings } from "@/content/writing";

const orbits = [
  { className: "orbit-1", label: "LLM/RAG" },
  { className: "orbit-2", label: "AGENTS" },
  { className: "orbit-3", label: "ROBOTICS" },
];

export default function HomePage() {
  const featured = projects.filter((project) => project.featured).slice(0, 2);
  const experiencePreview = experiences[0];
  const writingPreview = writings.slice(0, 2);
  const linkedIn = site.socials.find((item) => item.label === "LinkedIn")?.href;

  return (
    <div className="space-y-28">
      <HeroParallaxSection className="space-viewport relative overflow-hidden rounded-[1.75rem] px-6 py-12 animate-fade-in sm:px-10 lg:px-14 lg:py-16">
        <div className="space-layer" aria-hidden="true">
          <span className="starfield" />
          <span className="starfield starfield-far" />
          <span className="horizon-grid" />
          <span className="meteor" />
        </div>
        <span className="hud-corner hud-tl" aria-hidden="true" />
        <span className="hud-corner hud-tr" aria-hidden="true" />
        <span className="hud-corner hud-bl" aria-hidden="true" />
        <span className="hud-corner hud-br" aria-hidden="true" />

        <div className="grid items-center gap-12 lg:min-h-[540px] lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="eyebrow">
              <span className="status-dot" aria-hidden="true" />
              {site.headline}
            </p>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              <span className="gradient-text">{site.name}</span>
            </h1>
            <p className="mt-6 max-w-xl font-display text-xl font-medium leading-snug text-fg md:text-2xl">
              {site.heroTagline}
            </p>
            <p className="mt-5 max-w-xl text-[0.95rem] leading-7 text-muted">{site.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/cv" className="btn-gradient rounded-xl px-6 text-sm">
                Download CV
                <span aria-hidden="true">&darr;</span>
              </Link>
              <a href={`mailto:${site.email}`} className="btn-ghost rounded-xl px-6 text-sm">
                Contact
              </a>
            </div>
            <div className="mt-10 grid max-w-xl gap-3 sm:grid-cols-3">
              <div className="signal-tile">
                <span>Focus</span>
                <strong>LLM/RAG</strong>
              </div>
              <div className="signal-tile">
                <span>Research</span>
                <strong>
                  Agents/
                  <wbr />
                  Robotics
                </strong>
              </div>
              <div className="signal-tile">
                <span>Systems</span>
                <strong>Evaluation</strong>
              </div>
            </div>
          </div>

          <div className="relative" aria-hidden="true">
            <div className="radar">
              <span className="radar-ring radar-ring-1" />
              <span className="radar-ring radar-ring-2" />
              <span className="radar-ring radar-ring-3" />
              <span className="radar-cross" />
              <span className="radar-ticks" />
              <span className="radar-sweep" />
              <span className="planet-ring planet-ring-back" />
              <span className="planet" />
              <span className="planet-ring planet-ring-front" />
              {orbits.map((orbit) => (
                <span key={orbit.label} className={`orbit ${orbit.className}`}>
                  <span className="satellite">
                    <span className="satellite-body">
                      <span className="satellite-dot" />
                      <span className="satellite-label">{orbit.label}</span>
                    </span>
                  </span>
                </span>
              ))}
            </div>
            <div className="telemetry-panel">
              <span>Model status</span>
              <strong>
                <span className="status-dot" />
                ONLINE
              </strong>
              <em>eval loop stable</em>
              <div className="telemetry-bars">
                <i style={{ height: "60%" }} />
                <i style={{ height: "90%" }} />
                <i style={{ height: "45%" }} />
                <i style={{ height: "75%" }} />
                <i style={{ height: "100%" }} />
                <i style={{ height: "55%" }} />
                <i style={{ height: "80%" }} />
              </div>
            </div>
          </div>
        </div>
      </HeroParallaxSection>

      <Section
        index="01"
        title="Featured Projects"
        description="A focused snapshot of recent work spanning robotics, computer vision, and GenAI pipelines."
        action={
          <Link href="/projects" className="link-arrow shrink-0">
            View all projects <span aria-hidden="true">&rarr;</span>
          </Link>
        }
      >
        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>

      <Section
        index="02"
        title="Experience"
        description="Research and engineering roles with a focus on data pipelines, evaluation, and ML systems."
        action={
          <Link href="/experience" className="link-arrow shrink-0">
            Full experience <span aria-hidden="true">&rarr;</span>
          </Link>
        }
      >
        {experiencePreview && (
          <div className="timeline">
            <TimelineItem item={experiencePreview} />
          </div>
        )}
      </Section>

      <Section
        index="03"
        title="Writing"
        description="Short technical pieces on analytics, KPI interpretation, and ML applications."
        action={
          <Link href="/writing" className="link-arrow shrink-0">
            Read all <span aria-hidden="true">&rarr;</span>
          </Link>
        }
      >
        <div className="grid gap-4">
          {writingPreview.map((post) => (
            <WritingCard key={post.href} post={post} />
          ))}
        </div>
      </Section>

      <Section
        index="04"
        title="Contact"
        description="Open to data engineering and AI engineering roles, collaborations, and research projects."
      >
        <div className="cta-panel rounded-3xl p-8 md:p-12">
          <div className="relative z-[1] max-w-xl">
            <p className="eyebrow">
              <span className="status-dot" aria-hidden="true" />
              Open channel
            </p>
            <p className="mt-4 font-display text-2xl font-bold tracking-tight md:text-3xl">{site.email}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href={`mailto:${site.email}`} className="btn-gradient rounded-xl px-6 text-sm">
                Email Sergio
              </a>
              {linkedIn && (
                <a href={linkedIn} target="_blank" rel="noreferrer" className="btn-ghost rounded-xl px-6 text-sm">
                  LinkedIn
                </a>
              )}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
