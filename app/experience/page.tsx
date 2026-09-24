import Section from "@/components/Section";
import TimelineItem from "@/components/TimelineItem";
import CertificationCard from "@/components/CertificationCard";
import { education } from "@/content/education";
import { experiences, startupCollaborations } from "@/content/experience";
import { certifications } from "@/content/certifications";

export default function ExperiencePage() {
  return (
    <div className="space-y-24">
      <Section
        index="01"
        title="Experience"
        description="Research and engineering roles centered on ML infrastructure, evaluation, and robotics pipelines."
      >
        <div className="timeline">
          {experiences.map((item) => (
            <TimelineItem key={item.title} item={item} />
          ))}
        </div>
      </Section>

      <Section
        index="02"
        title="Education"
        description="Academic background grounding applied ML engineering with physics foundations."
      >
        <div className="timeline">
          {education.map((item) => (
            <div key={item.degree} className="glass-card rounded-2xl p-6">
              <span className="timeline-node" aria-hidden="true" />
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 3 2 8l10 5 10-5-10-5Z" />
                      <path d="M6 10v6" />
                      <path d="M18 10v6" />
                      <path d="M6 16c0 1.7 2.7 3 6 3s6-1.3 6-3" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold tracking-tight md:text-xl">{item.degree}</h3>
                    <p className="text-sm text-muted">{item.institution}</p>
                  </div>
                </div>
                <span className="rounded-md border border-line/15 px-2 py-1 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted">
                  {item.period}
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">{item.details}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        index="03"
        title="Licenses & Certifications"
        description="Professional certifications and achievements in data science, AI, and analytics."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((cert) => (
            <CertificationCard key={cert.title} cert={cert} />
          ))}
        </div>
      </Section>

      <Section
        index="04"
        title="Startup Collaborations"
        description="Selective early-stage product work at the intersection of computer vision and practical user tools."
      >
        <div className="timeline">
          {startupCollaborations.map((item) => (
            <TimelineItem key={item.title} item={item} />
          ))}
        </div>
      </Section>
    </div>
  );
}
