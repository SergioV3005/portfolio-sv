import Section from "@/components/Section";
import Tag from "@/components/Tag";
import { site } from "@/content/site";

export default function AboutPage() {
  return (
    <div className="space-y-24">
      <Section index="01" title="About" description="A quick snapshot of my background and current focus.">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5 text-[1.02rem] leading-8 text-muted">
            <p>{site.about}</p>
            <p>{site.aboutFocus}</p>
          </div>
          <div className="glass-card rounded-2xl p-6">
            <p className="eyebrow">
              <span className="status-dot" aria-hidden="true" />
              Quick Facts
            </p>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              {site.facts.map((fact) => (
                <li key={fact} className="bullet-line">
                  {fact}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section index="02" title="Skills & Stack" description="Tools I use to build reliable data and AI systems.">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {site.skills.map((skill, i) => (
            <div key={skill} className="glass-card flex items-center gap-3 rounded-xl px-4 py-3">
              <span className="font-mono text-[0.65rem] text-accent">{String(i + 1).padStart(2, "0")}</span>
              <span className="font-mono text-sm font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section index="03" title="Personal" description="Outside the lab and the terminal.">
        <p className="max-w-3xl text-[1.02rem] leading-8 text-muted">
          {site.personal} One example is{" "}
          <a
            href="https://ricochet-robots-delta.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="text-accent underline decoration-accent/40 underline-offset-4 transition-colors duration-200 hover:text-accent2"
          >
            a Ricochet Robots-inspired game
          </a>
          .
        </p>
      </Section>
    </div>
  );
}
