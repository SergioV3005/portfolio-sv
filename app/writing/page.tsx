import Section from "@/components/Section";
import { writings } from "@/content/writing";

export default function WritingPage() {
  return (
    <Section
      title="Writing"
      description="Selected articles on analytics workflows, KPI interpretation, and GenAI experimentation."
    >
      <div className="space-y-4">
        {writings.map((post) => (
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
  );
}
