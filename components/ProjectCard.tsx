import Image from "next/image";
import Tag from "@/components/Tag";
import { Project } from "@/lib/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="bg-card/70 flex h-full flex-col overflow-hidden rounded-2xl border border-border shadow-soft">
      <div className="relative h-48 w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="mt-2 text-sm text-muted">{project.description}</p>
        </div>
        <ul className="space-y-2 text-sm text-muted">
          {project.bullets.map((bullet) => (
            <li key={bullet}>- {bullet}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
        <div className="mt-auto flex flex-wrap gap-3 text-sm font-semibold">
          {project.links.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
