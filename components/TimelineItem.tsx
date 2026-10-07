import Image from "next/image";
import { Experience } from "@/lib/types";

export default function TimelineItem({ item }: { item: Experience }) {
  return (
    <div className="glass-card rounded-2xl p-6">
      <span className="timeline-node" aria-hidden="true" />
      <div className="flex flex-col items-start gap-3">
        <div className="flex items-start gap-3">
          <div className="logo-chip mt-0.5 h-10 w-10 rounded-xl">
            <div className="relative h-full w-full">
              <Image src={item.image} alt={`${item.org} logo`} fill className="object-cover" sizes="40px" />
            </div>
          </div>
          <div>
            <h3 className="font-display text-lg font-bold tracking-tight md:text-xl">{item.title}</h3>
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-accent transition-colors hover:text-accent2"
              >
                {item.org}
              </a>
            ) : (
              <p className="text-sm text-muted">{item.org}</p>
            )}
          </div>
        </div>
        <span className="rounded-md border border-line/15 px-2 py-1 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted">
          {item.period}
        </span>
      </div>
      <ul className="mt-5 space-y-2 text-sm leading-relaxed text-muted">
        {item.description.map((line) => (
          <li key={line} className="bullet-line">
            {line}
          </li>
        ))}
      </ul>
    </div>
  );
}
