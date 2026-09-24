import { Writing } from "@/lib/types";

export default function WritingCard({ post }: { post: Writing }) {
  return (
    <a
      href={post.href}
      target="_blank"
      rel="noreferrer"
      className="glass-card group flex items-center gap-5 rounded-2xl p-5 md:p-6"
    >
      <div className="min-w-0 flex-1">
        <span className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-accent">{post.source}</span>
        <h3 className="mt-1.5 font-display text-lg font-bold leading-snug tracking-tight transition-colors group-hover:text-accent">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-muted">{post.summary}</p>
      </div>
      <span
        aria-hidden="true"
        className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line/15 text-muted transition-all duration-300 group-hover:border-accent/60 group-hover:bg-accent/10 group-hover:text-accent"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 17 17 7" />
          <path d="M7 7h10v10" />
        </svg>
      </span>
    </a>
  );
}
