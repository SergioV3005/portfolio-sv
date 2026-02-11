import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="nav-glow-line" />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-4">
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
        <p className="font-mono text-xs text-muted/70">
          &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
