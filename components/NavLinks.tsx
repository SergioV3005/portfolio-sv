"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = { label: string; href: string };

export default function NavLinks({ links }: { links: NavLink[] }) {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Main"
      className="no-scrollbar -mx-1 flex w-full items-center gap-1 overflow-x-auto px-1 text-sm text-muted sm:ml-auto sm:w-auto"
    >
      {links.map((link) => {
        const active = link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? "page" : undefined}
            className="nav-link rounded-lg px-3 py-1.5 hover:bg-accent/10 hover:text-fg"
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
