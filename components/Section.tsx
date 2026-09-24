import { ReactNode } from "react";

export default function Section({
  title,
  description,
  children,
  action,
  id,
  index,
}: {
  title: string;
  description?: string;
  children: ReactNode;
  action?: ReactNode;
  id?: string;
  index?: string;
}) {
  return (
    <section id={id} className="reveal space-y-8">
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="eyebrow">{index ? `${index} // ${title}` : `// ${title}`}</span>
          <span className="section-rule hidden sm:block" aria-hidden="true" />
          {action}
        </div>
        <div>
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
          {description && <p className="mt-3 max-w-2xl text-muted">{description}</p>}
        </div>
      </div>
      {children}
    </section>
  );
}
