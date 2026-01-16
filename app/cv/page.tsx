import Section from "@/components/Section";
import { site } from "@/content/site";

export default function CvPage() {
  return (
    <Section
      title="Curriculum Vitae"
      description="Download the PDF or preview it directly in your browser."
    >
      <div className="space-y-6">
        <a
          href="/resume.pdf"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-semibold text-slate-950"
        >
          Download CV
        </a>
        <p className="text-sm text-muted">For quick contact, email {site.email}.</p>
        <div className="bg-card/70 rounded-2xl border border-border p-4">
          <object
            data="/resume.pdf"
            type="application/pdf"
            className="h-[70vh] w-full"
            aria-label="Resume PDF"
          >
            <p className="text-sm text-muted">
              PDF preview not available. Use the download button above.
            </p>
          </object>
        </div>
      </div>
    </Section>
  );
}
