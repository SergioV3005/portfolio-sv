import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-4">
          {site.socials.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="hover:text-fg"
            >
              {item.label}
            </a>
          ))}
        </div>
        <p>
          (c) {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
