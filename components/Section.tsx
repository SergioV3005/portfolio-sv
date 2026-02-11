import { ReactNode } from "react";

export default function Section({
  title,
  description,
  children,
  action,
  id,
}: {
  title: string;
  description?: string;
  children: ReactNode;
  action?: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="accent-bar pl-5">
          <h2 className="font-mono text-3xl font-bold gradient-text">{title}</h2>
          {description && <p className="mt-2 text-sm text-muted">{description}</p>}
        </div>
        {action}
      </div>
      {children}
    </section>
  );
}
