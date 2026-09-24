import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="relative isolate mt-8">
      <div className="glow-line" />
      <div className="footer-grid pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 text-sm text-muted sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {site.socials.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-200 hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </div>
        <p className="flex items-center gap-2 font-mono text-xs text-muted">
          <span className="status-dot" aria-hidden="true" />
          &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
