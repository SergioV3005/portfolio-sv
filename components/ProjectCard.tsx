import Image from "next/image";
import Tag from "@/components/Tag";
import { Project } from "@/lib/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card glass-card group flex h-full flex-col overflow-hidden rounded-2xl">
      <div className="project-media relative h-52 w-full overflow-hidden rounded-t-2xl">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="relative flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="font-display text-xl font-bold tracking-tight">{project.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>
        </div>
        <ul className="space-y-2 text-sm text-muted">
          {project.bullets.map((bullet) => (
            <li key={bullet} className="bullet-line">
              {bullet}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
        {project.links.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-4 border-t border-line/10 pt-4">
            {project.links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="link-arrow">
                {link.label}
                <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
