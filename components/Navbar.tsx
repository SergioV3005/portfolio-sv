import Link from "next/link";
import { site } from "@/content/site";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  return (
    <header className="bg-bg/85 sticky top-0 z-40 border-b border-border backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="font-serif text-xl">
          {site.name}
        </Link>
        <nav className="flex flex-wrap items-center gap-4 text-sm text-muted">
          {site.navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-fg">
              {link.label}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
