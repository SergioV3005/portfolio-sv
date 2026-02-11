import Link from "next/link";
import { site } from "@/content/site";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40">
      <div className="bg-bg/70 border-b border-border backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <Link href="/" className="font-mono text-xl font-bold tracking-tight">
            <span className="gradient-text">{site.name}</span>
          </Link>
          <nav className="flex flex-wrap items-center gap-5 text-sm text-muted">
            {site.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors duration-200 hover:text-accent"
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
