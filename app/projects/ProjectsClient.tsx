"use client";

import { useMemo, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import Tag from "@/components/Tag";
import { Project } from "@/lib/types";

const ALL_TAG = "All";

export default function ProjectsClient({
  projects,
  tags,
}: {
  projects: Project[];
  tags: string[];
}) {
  const [activeTag, setActiveTag] = useState<string>(ALL_TAG);

  const filtered = useMemo(() => {
    if (activeTag === ALL_TAG) {
      return projects;
    }
    return projects.filter((project) => project.tags.includes(activeTag));
  }, [activeTag, projects]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {[ALL_TAG, ...tags].map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
              tag === activeTag
                ? "bg-accent text-slate-950"
                : "border border-border text-muted hover:text-fg"
            }`}
            aria-pressed={tag === activeTag}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="text-sm text-muted">No projects match the selected tag yet.</p>
      )}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
    </div>
  );
}
