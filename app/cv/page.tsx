import Section from "@/components/Section";
import { site } from "@/content/site";

export default function CvPage() {
  return (
    <Section title="Curriculum Vitae" description="Download the PDF or preview it directly in your browser.">
      <div className="space-y-6">
        <div className="flex flex-wrap items-center gap-4">
          <a href="/resume.pdf" className="btn-gradient rounded-xl px-6 text-sm">
            Download CV
            <span aria-hidden="true">&darr;</span>
          </a>
          <p className="text-sm text-muted">For quick contact, email {site.email}.</p>
        </div>
        <div className="glass-card overflow-hidden rounded-2xl p-2">
          <div className="flex items-center gap-2 px-3 pb-2 pt-1 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted">
            <span className="status-dot" aria-hidden="true" />
            resume.pdf
          </div>
          <object data="/resume.pdf" type="application/pdf" className="h-[75vh] w-full rounded-xl" aria-label="Resume PDF">
            <p className="p-4 text-sm text-muted">PDF preview not available. Use the download button above.</p>
          </object>
        </div>
      </div>
    </Section>
  );
}
