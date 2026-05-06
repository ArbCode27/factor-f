import Link from "next/link";
import { ArrowUpRight, Newspaper, Play } from "lucide-react";

import { Button } from "@/components/ui/button";

import { HeroGlitchTitle, ShinyLabel } from "./animated-brand";
import { liveSignals, showPillars, socialLinks } from "./factor-f-data";
import { Reveal } from "./reveal";

export const HeroSection = () => (
  <section
    id="inicio"
    className="relative isolate overflow-hidden px-6 pb-16 pt-12 sm:px-10 md:pt-18 lg:px-16">
    <div className="absolute right-6 top-12 -z-10 hidden text-[22rem] font-black leading-none tracking-[-0.16em] text-[#c9b88f]/30 lg:block">
      F
    </div>
    <div className="mx-auto grid max-w-7xl gap-10 border-b-2 border-[#14110d] pb-12 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-end">
      <div>
        <Reveal direction="down">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border-2 border-[#14110d] bg-[#f7f0dc] px-4 py-2 text-sm text-[#14110d] shadow-[3px_3px_0_#14110d]">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#a83232] opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-[#a83232]" />
            </span>
            <ShinyLabel
              text="Nueva edición cada domingo"
              className="font-mono text-xs font-bold uppercase tracking-[0.24em]"
            />
          </div>
        </Reveal>

        <Reveal className="max-w-6xl" delay={0.08} direction="left">
          <p className="mb-5 font-mono text-xs font-black uppercase tracking-[0.42em] text-[#a83232]">
            Marie Ferro + Máximo Ferro
          </p>
          <HeroGlitchTitle />
        </Reveal>

        <Reveal
          className="mt-10 grid gap-8 md:grid-cols-[minmax(0,35rem)_1fr] md:items-end"
          delay={0.18}
        >
          <p className="text-balance text-xl font-semibold leading-8 text-[#2b2520]/78 md:text-2xl">
            La revista viva de lo que todos están comentando: farándula, fútbol,
            actualidad y esos momentos que terminan en el chat del grupo.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
            <Button
              asChild
              size="lg"
              className="h-13 rounded-full border-2 border-[#14110d] bg-[#1f4e79] px-7 text-base font-bold text-[#f7f0dc] shadow-[4px_4px_0_#14110d] hover:bg-[#173d60]">
              <Link
                href="https://youtube.com/@elfactorf?si=qDo3LxT9H_V687x5"
                target="_blank"
                rel="noreferrer">
                <Play className="size-4 fill-current" aria-hidden="true" />
                Ver última edición
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-13 rounded-full border-2 border-[#14110d] bg-[#f7f0dc] px-7 text-base font-bold text-[#14110d] shadow-[4px_4px_0_#14110d] hover:bg-[#e7dfc9]">
              <Link
                href="https://www.instagram.com/elfactorf/"
                target="_blank"
                rel="noreferrer">
                Seguir en Instagram
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>

      <Reveal
        className="rounded-[2rem] border-2 border-[#14110d] bg-[#f7f0dc] p-5 shadow-[8px_8px_0_#14110d]"
        delay={0.28}
        direction="right"
      >
        <aside aria-label="Señales de marca">
        <div className="mb-5 flex items-center justify-between border-b-2 border-[#14110d] pb-4">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-[#a83232]">
            En portada
          </p>
          <Newspaper className="size-5 text-[#14110d]" aria-hidden="true" />
        </div>
        {/* <div className="mb-5 grid grid-cols-2 gap-3">
          {hosts.map((host, index) => (
            <figure
              key={host.name}
              className="relative overflow-hidden rounded-[1.25rem] border-2 border-[#14110d] bg-[#e7dfc9] shadow-[3px_3px_0_#14110d]">
              <div className="relative aspect-[3/4]">
                <Image
                  src={host.image}
                  alt={host.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 180px, 45vw"
                  className="object-cover contrast-105 saturate-[0.92]"
                  priority={index === 0}
                />
              </div>
              <figcaption className="border-t-2 border-[#14110d] bg-[#14110d] px-2 py-2 text-center font-mono text-[0.58rem] font-black uppercase tracking-[0.16em] text-[#f7f0dc]">
                {host.name.split(" ")[0]}
              </figcaption>
            </figure>
          ))}
        </div> */}
        <div className="space-y-3">
          {liveSignals.map((signal) => (
            <div
              key={signal.label}
              className="flex items-center gap-4 rounded-2xl border-2 border-[#14110d]/15 bg-[#e7dfc9] p-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#14110d] text-[#f7f0dc]">
                <signal.icon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#2b2520]/50">
                  {signal.label}
                </p>
                <p className="font-bold text-[#14110d]">{signal.value}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {showPillars.map((pillar) => (
            <span
              key={pillar}
              className="rounded-full border border-[#14110d]/25 bg-[#f7f0dc] px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#2b2520]/75">
              {pillar}
            </span>
          ))}
        </div>
        <div className="mt-6 flex gap-2">
          {socialLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-[#14110d] bg-[#14110d] px-4 py-3 text-sm font-bold text-[#f7f0dc] transition hover:bg-[#2b2520] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a83232]">
              <link.icon className="size-4" aria-hidden="true" />
              {link.label}
            </Link>
          ))}
        </div>
        </aside>
      </Reveal>
    </div>
  </section>
);
