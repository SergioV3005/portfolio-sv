import Section from "@/components/Section";
import TimelineItem from "@/components/TimelineItem";
import { education } from "@/content/education";
import { experiences } from "@/content/experience";

export default function ExperiencePage() {
  return (
    <div className="space-y-16">
      <Section
        title="Experience"
        description="Research and engineering roles centered on ML infrastructure, evaluation, and robotics pipelines."
      >
        <div className="space-y-6">
          {experiences.map((item) => (
            <TimelineItem key={item.title} item={item} />
          ))}
        </div>
      </Section>

      <Section
        title="Education"
        description="Academic background grounding applied ML engineering with physics foundations."
      >
        <div className="space-y-4">
          {education.map((item) => (
            <div key={item.degree} className="rounded-2xl border border-border p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-lg font-semibold">{item.degree}</p>
                  <p className="text-sm text-muted">{item.institution}</p>
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-muted">
                  {item.period}
                </span>
              </div>
              <p className="mt-3 text-sm text-muted">{item.details}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
