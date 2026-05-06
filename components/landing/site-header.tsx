import Link from "next/link";

import { Button } from "@/components/ui/button";

import { navigationItems } from "./factor-f-data";

export const SiteHeader = () => (
  <header className="sticky top-0 z-50 border-b-2 border-[#14110d] bg-[#e7dfc9]/88 backdrop-blur-xl">
    <nav
      className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16"
      aria-label="Navegación principal"
    >
      <Link
        href="#inicio"
        className="group inline-flex items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a83232] focus-visible:ring-offset-2 focus-visible:ring-offset-[#e7dfc9]"
        aria-label="Ir al inicio de Factor F"
      >
        <span className="grid size-12 place-items-center rounded-full border-2 border-[#14110d] bg-[#d8cfb9] text-[0.72rem] font-black uppercase leading-[0.78] tracking-[-0.08em] text-[#14110d] shadow-[3px_3px_0_#14110d] transition-transform group-hover:-rotate-6">
          <span>
            FAC
            <br />
            TOR
          </span>
        </span>
        <span className="hidden font-mono text-xs font-bold uppercase tracking-[0.28em] text-[#14110d] sm:block">
          Factor F
        </span>
      </Link>

      <div className="hidden items-center gap-1 rounded-full border-2 border-[#14110d] bg-[#f7f0dc] p-1 md:flex">
        {navigationItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-full px-4 py-2 text-sm font-bold text-[#2b2520]/70 transition hover:bg-[#14110d] hover:text-[#f7f0dc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a83232]"
          >
            {item.label}
          </Link>
        ))}
      </div>

      <Button
        asChild
        size="lg"
        className="h-11 rounded-full border-2 border-[#14110d] bg-[#a83232] px-5 font-bold text-[#f7f0dc] shadow-[3px_3px_0_#14110d] hover:bg-[#8f2828]"
      >
        <Link
          href="https://youtube.com/@elfactorf?si=qDo3LxT9H_V687x5"
          target="_blank"
          rel="noreferrer"
        >
          Ver edición
        </Link>
      </Button>
    </nav>
  </header>
);
