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
          <article key={post.href} className="rounded-2xl border border-border p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <a
                href={post.href}
                target="_blank"
                rel="noreferrer"
                className="text-lg font-semibold"
              >
                {post.title}
              </a>
              <span className="text-xs uppercase tracking-[0.2em] text-muted">{post.source}</span>
            </div>
            <p className="mt-2 text-sm text-muted">{post.summary}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
