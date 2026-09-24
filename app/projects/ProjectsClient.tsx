"use client";

import { useMemo, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
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
    <div className="space-y-8">
      <div className="glass-card rounded-2xl p-4">
        <div className="mb-3 flex items-center justify-between font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted">
          <span>Filter by tag</span>
          <span>
            <span className="text-accent">{String(filtered.length).padStart(2, "0")}</span> /{" "}
            {String(projects.length).padStart(2, "0")}
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {[ALL_TAG, ...tags].map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className="tag cursor-pointer"
              aria-pressed={tag === activeTag}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      {filtered.length === 0 && <p className="text-sm text-muted">No projects match the selected tag yet.</p>}
    </div>
  );
}
