import Section from "@/components/Section";
import Tag from "@/components/Tag";
import { site } from "@/content/site";

export default function AboutPage() {
  return (
    <div className="space-y-16">
      <Section title="About" description="A quick snapshot of my background and current focus.">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4 text-muted">
            <p>{site.about}</p>
            <p>{site.aboutFocus}</p>
          </div>
          <div className="rounded-2xl border border-border bg-card/70 p-6">
            <h3 className="font-serif text-xl">Quick Facts</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {site.facts.map((fact) => (
                <li key={fact}>- {fact}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Skills & Stack" description="Tools I use to build reliable data and AI systems.">
        <div className="flex flex-wrap gap-2">
          {site.skills.map((skill) => (
            <Tag key={skill} label={skill} />
          ))}
        </div>
      </Section>

      <Section title="Personal" description="Outside the lab and the terminal.">
        <p className="text-muted">{site.personal}</p>
      </Section>
    </div>
  );
}
