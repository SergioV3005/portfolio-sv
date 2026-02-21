import Link from "next/link";
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
    <div className="space-y-20">
      <section className="glass-card hero-animated relative overflow-hidden rounded-3xl p-10 animate-fade-in">
        <div className="hero-space-layer" aria-hidden="true">
          <span className="hero-stars hero-stars-near" />
          <span className="hero-stars hero-stars-far" />
          <span className="hero-shooting hero-shooting-1" />
          <span className="hero-shooting hero-shooting-2" />
        </div>
        <div className="hero-orbs" aria-hidden="true">
          <span className="hero-orb hero-orb-1" />
          <span className="hero-orb hero-orb-2" />
          <span className="hero-orb hero-orb-3" />
        </div>
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-accent">{site.headline}</p>
        <h1 className="mt-4 font-mono text-4xl font-bold leading-tight md:text-5xl relative z-[1]">
          <span className="gradient-text">{site.name}</span>
          <span className="block text-2xl text-muted md:text-3xl">{site.heroTagline}</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted relative z-[1]">{site.description}</p>
        <div className="mt-8 flex flex-wrap gap-4 relative z-[1]">
          <Link
            href="/cv"
            className="btn-gradient rounded-full px-5 py-2 text-sm"
          >
            Download CV
          </Link>
          <a
            href={`mailto:${site.email}`}
            className="rounded-full border border-accent/25 bg-accent/10 px-5 py-2 text-sm font-semibold text-accent transition-all duration-200 hover:border-accent/50 hover:bg-accent/20 hover:shadow-glow"
          >
            Contact
          </a>
        </div>
      </section>

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
