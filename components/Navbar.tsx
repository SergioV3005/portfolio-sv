import Link from "next/link";
import { site } from "@/content/site";
import NavLinks from "@/components/NavLinks";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 px-3 pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-6">
      <div className="nav-shell mx-auto flex max-w-6xl flex-wrap items-center gap-x-2 gap-y-2 rounded-2xl px-3 py-2 sm:px-4 md:flex-nowrap md:gap-x-4">
        <Link href="/" className="order-0 flex min-w-0 items-center gap-2.5 font-display text-base font-bold tracking-tight">
          <span className="brand-mark" aria-hidden="true" />
          <span className="truncate">{site.name}</span>
        </Link>
        <NavLinks links={site.navLinks} />
        <ThemeToggle className="order-2 ml-auto md:ml-0" />
      </div>
    </header>
  );
}
