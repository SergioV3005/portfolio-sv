import Link from "next/link";
import { site } from "@/content/site";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40">
      <div className="border-b border-border bg-bg/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <Link href="/" className="brand-lockup font-mono text-xl font-bold tracking-tight">
            <span className="gradient-text">{site.name}</span>
          </Link>
          <nav className="nav-pills flex flex-wrap items-center gap-2 text-sm text-muted">
            {site.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-1.5 transition-colors duration-200 hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
      <div className="nav-glow-line" />
    </header>
  );
}
