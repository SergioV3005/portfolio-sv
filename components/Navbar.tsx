import Link from "next/link";
import { site } from "@/content/site";
import NavLinks from "@/components/NavLinks";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-6">
      <div className="nav-shell mx-auto flex max-w-6xl flex-wrap items-center gap-x-4 gap-y-2 rounded-2xl px-3 py-2 sm:flex-nowrap sm:px-4">
        <Link href="/" className="flex items-center gap-2.5 font-display text-base font-bold tracking-tight">
          <span className="brand-mark" aria-hidden="true" />
          <span>{site.name}</span>
        </Link>
        <ThemeToggle className="ml-auto sm:order-last sm:ml-0" />
        <NavLinks links={site.navLinks} />
      </div>
    </header>
  );
}
