import Section from "@/components/Section";
import WritingCard from "@/components/WritingCard";
import { writings } from "@/content/writing";

export default function WritingPage() {
  return (
    <Section
      title="Writing"
      description="Selected articles on analytics workflows, KPI interpretation, and GenAI experimentation."
    >
      <div className="grid gap-4">
        {writings.map((post) => (
          <WritingCard key={post.href} post={post} />
        ))}
      </div>
    </Section>
  );
}
