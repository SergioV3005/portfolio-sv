import Image from "next/image";
import { Experience } from "@/lib/types";

export default function TimelineItem({ item }: { item: Experience }) {
  return (
    <div className="bg-card/70 rounded-2xl border border-border p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <div className="relative h-6 w-6 overflow-hidden rounded-md border border-border/60 bg-card/60">
              <Image src={item.image} alt={`${item.org} logo`} fill className="object-contain" />
            </div>
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
