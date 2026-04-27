import Link from "next/link";
import HeroParallaxSection from "@/components/HeroParallaxSection";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import TimelineItem from "@/components/TimelineItem";
import { experiences } from "@/content/experience";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { writings } from "@/content/writing";

export default function HomePage() {
  const featured = projects.filter((project) => project.featured).slice(0, 2);
  const experiencePreview = experiences[0];
  const writingPreview = writings.slice(0, 2);

  return (
    <div className="space-y-24">
      <HeroParallaxSection className="hero-animated hero-stage relative overflow-hidden rounded-[2rem] px-6 py-10 animate-fade-in md:px-10 lg:px-12">
        <div className="hero-space-layer" aria-hidden="true">
          <span className="hero-stars hero-stars-near" />
          <span className="hero-stars hero-stars-far" />
          <span className="hero-meteor hero-meteor-1" />
          <span className="hero-meteor hero-meteor-2" />
          <span className="hero-meteor hero-meteor-3" />
        </div>

        <div className="relative z-[1] grid min-h-[520px] items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <p className="hero-kicker font-mono text-xs uppercase text-accent">{site.headline}</p>
            <h1 className="mt-5 font-mono text-4xl font-bold leading-tight md:text-6xl">
              <span className="gradient-text">{site.name}</span>
              <span className="mt-4 block max-w-3xl text-2xl text-fg md:text-4xl">{site.heroTagline}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted md:text-lg">{site.description}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/cv" className="btn-gradient rounded-full px-5 py-2 text-sm">
                Download CV
              </Link>
              <a
                href={`mailto:${site.email}`}
                className="btn-ghost rounded-full px-5 py-2 text-sm"
              >
                Contact
              </a>
            </div>
            <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
              <div className="signal-tile">
                <span>Focus</span>
                <strong>LLM/RAG</strong>
              </div>
              <div className="signal-tile">
                <span>Research</span>
                <strong>Agents/Robotics</strong>
              </div>
              <div className="signal-tile">
                <span>Systems</span>
                <strong>Evaluation</strong>
              </div>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="orbital-rig">
              <span className="orbit orbit-a" />
              <span className="orbit orbit-b" />
              <span className="orbit orbit-c" />
              <span className="neural-core">
                <span className="core-face core-front" />
                <span className="core-face core-back" />
                <span className="core-face core-right" />
                <span className="core-face core-left" />
                <span className="core-face core-top" />
                <span className="core-face core-bottom" />
              </span>
              <span className="data-ring data-ring-a" />
              <span className="data-ring data-ring-b" />
              <span className="data-node data-node-a" />
              <span className="data-node data-node-b" />
              <span className="data-node data-node-c" />
              <span className="micro-cube micro-cube-a">
                <span className="cube-face cube-front" />
                <span className="cube-face cube-back" />
                <span className="cube-face cube-right" />
                <span className="cube-face cube-left" />
                <span className="cube-face cube-top" />
                <span className="cube-face cube-bottom" />
              </span>
              <span className="micro-cube micro-cube-b">
                <span className="cube-face cube-front" />
                <span className="cube-face cube-back" />
                <span className="cube-face cube-right" />
                <span className="cube-face cube-left" />
                <span className="cube-face cube-top" />
                <span className="cube-face cube-bottom" />
              </span>
              <span className="depth-plane depth-plane-a" />
              <span className="depth-plane depth-plane-b" />
            </div>
            <div className="telemetry-panel">
              <span>MODEL STATUS</span>
              <strong>ONLINE</strong>
              <em>eval loop stable</em>
            </div>
          </div>
        </div>
      </HeroParallaxSection>

      <Section
        title="Featured Projects"
        description="A focused snapshot of recent work spanning robotics, computer vision, and GenAI pipelines."
        action={
          <Link href="/projects" className="text-sm font-semibold text-accent transition-colors hover:text-accent2">
            View all projects
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
        title="Experience"
        description="Research and engineering roles with a focus on data pipelines, evaluation, and ML systems."
        action={
          <Link href="/experience" className="text-sm font-semibold text-accent transition-colors hover:text-accent2">
            Full experience
          </Link>
        }
      >
        {experiencePreview && <TimelineItem item={experiencePreview} />}
      </Section>

      <Section
        title="Writing"
        description="Short technical pieces on analytics, KPI interpretation, and ML applications."
        action={
          <Link href="/writing" className="text-sm font-semibold text-accent transition-colors hover:text-accent2">
            Read all
          </Link>
        }
      >
        <div className="space-y-4">
          {writingPreview.map((post) => (
            <article key={post.href} className="glass-card rounded-2xl p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <a
                  href={post.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-lg font-semibold"
                >
                  {post.title}
                </a>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{post.source}</span>
              </div>
              <p className="mt-2 text-sm text-muted">{post.summary}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        title="Contact"
        description="Open to data engineering and AI engineering roles, collaborations, and research projects."
      >
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${site.email}`}
            className="btn-gradient rounded-full px-5 py-2 text-sm"
          >
            Email Sergio
          </a>
          <a
            href={site.socials.find((item) => item.label === "LinkedIn")?.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-accent/25 bg-accent/10 px-5 py-2 text-sm font-semibold text-accent transition-all duration-200 hover:border-accent/50 hover:bg-accent/20 hover:shadow-glow"
          >
            LinkedIn
          </a>
        </div>
      </Section>
    </div>
  );
}
