import { Experience } from "@/lib/types";

export default function TimelineItem({ item }: { item: Experience }) {
  return (
    <div className="rounded-2xl border border-border bg-card/70 p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4 text-muted"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              <path d="M3 7h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
              <path d="M16 13h-8" />
            </svg>
            <h3 className="text-xl font-semibold">{item.title}</h3>
          </div>
          <a href={item.href} target="_blank" rel="noreferrer" className="text-sm text-muted">
            {item.org}
          </a>
        </div>
        <span className="text-xs uppercase tracking-[0.2em] text-muted">{item.period}</span>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-muted">
        {item.description.map((line) => (
          <li key={line}>- {line}</li>
        ))}
      </ul>
    </div>
  );
}
