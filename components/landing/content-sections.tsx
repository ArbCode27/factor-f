import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { CurvedCallout, FocusStatement } from "./animated-brand";
import {
  episodes,
  hosts,
  moments,
  socialLinks,
  topicCards,
} from "./factor-f-data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export const UniverseSection = () => (
  <section id="universo" className="px-6 py-24 sm:px-10 lg:px-16">
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
        <Reveal direction="left">
          <SectionHeading
            eyebrow="La portada"
            title="Farándula, deporte y opinión con acento venezolano."
            description="Factor F mezcla lo que pasa en la cancha, en redes y en la cultura pop para convertir cada tema en una conversación con criterio, humor y personalidad."
          />
        </Reveal>
        <Reveal delay={0.12} direction="right">
          <p className="rounded-[2rem] border-2 border-[#14110d] bg-[#f7f0dc] p-6 text-xl font-black leading-8 text-[#14110d] shadow-[7px_7px_0_#14110d] md:p-8">
            Si todos lo están comentando, probablemente merece pasar por Factor
            F.
          </p>
        </Reveal>
      </div>

      <div className="mt-12 grid auto-rows-fr items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {topicCards.map((topic, index) => (
          <Reveal
            key={topic.title}
            className="h-full"
            delay={index * 0.08}
            direction="scale"
          >
            <article className="group relative flex h-full min-h-64 flex-col overflow-hidden rounded-[2rem] border-2 border-[#14110d] bg-[#f7f0dc] p-5 shadow-[5px_5px_0_#14110d] transition duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0_#14110d]">
              <span
                className={cn(
                  "mb-auto grid size-12 place-items-center rounded-full border-2 border-[#14110d] text-[#f7f0dc]",
                  topic.accent,
                )}>
                <topic.icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="text-2xl font-black uppercase tracking-[-0.05em] text-[#14110d]">
                {topic.title}
              </h3>
              <p className="mt-3 text-sm font-medium leading-6 text-[#2b2520]/72">
                {topic.description}
              </p>
              <div className="absolute -right-10 -top-10 size-28 rounded-full bg-[#c9b88f]/40 blur-2xl transition group-hover:bg-[#a83232]/20" />
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export const HostsSection = () => (
  <section id="hosts" className="overflow-hidden px-6 py-24 sm:px-10 lg:px-16">
    <div className="mx-auto max-w-7xl">
      <Reveal>
        <SectionHeading
          eyebrow="Los columnistas"
          title="Marie pone el contexto. Máximo prende la conversación."
          description="Ella trae mirada periodística, deporte y análisis. Él suma humor, reacción y energía digital. Juntos hacen que cada tema tenga Factor F."
          className="mx-auto text-center"
        />
      </Reveal>

      <Reveal
        className="my-14 rounded-[2.5rem] border-2 border-[#14110d] bg-[#f7f0dc] px-6 py-10 shadow-[7px_7px_0_#14110d]"
        delay={0.1}
        direction="scale"
      >
        <FocusStatement />
      </Reveal>

      <div className="grid gap-5 lg:grid-cols-2">
        {hosts.map((host, index) => (
          <Reveal
            key={host.name}
            delay={index * 0.12}
            direction={index === 0 ? "left" : "right"}
          >
            <article
              className={cn(
                "relative overflow-hidden rounded-[2.5rem] border-2 border-[#14110d] bg-[#f7f0dc] shadow-[6px_6px_0_#14110d] transition duration-300 hover:-translate-y-1 hover:shadow-[10px_10px_0_#14110d]",
                index === 0
                  ? "lg:rotate-[-1.5deg]"
                  : "lg:rotate-[1.5deg]",
              )}>
              <div className="grid gap-0 md:grid-cols-[minmax(0,0.78fr)_minmax(0,1fr)]">
                <div className="relative min-h-96 border-b-2 border-[#14110d] md:border-b-0 md:border-r-2">
                  <Image
                    src={host.image}
                    alt={host.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 360px, (min-width: 768px) 40vw, 100vw"
                    className="object-cover contrast-105 saturate-[0.95]"
                  />
                  <span
                    className={cn(
                      "absolute left-4 top-4 rounded-full border-2 border-[#14110d] px-3 py-1 font-mono text-[0.65rem] font-black uppercase tracking-[0.18em] text-[#f7f0dc] shadow-[3px_3px_0_#14110d]",
                      index === 0 ? "bg-[#1f4e79]" : "bg-[#a83232]",
                    )}>
                    Columnista
                  </span>
                </div>
                <div className="relative overflow-hidden p-7 md:p-10">
                  <p className="font-mono text-xs font-black uppercase tracking-[0.32em] text-[#a83232]">
                    {host.role}
                  </p>
                  <h3 className="mt-5 text-5xl font-black uppercase leading-[0.88] tracking-[-0.07em] text-[#14110d] md:text-7xl">
                    {host.name}
                  </h3>
                  <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-[#2b2520]/76">
                    {host.description}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {host.stats.map((stat) => (
                      <span
                        key={stat}
                        className="rounded-full border-2 border-[#14110d] bg-[#e7dfc9] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#14110d]">
                        {stat}
                      </span>
                    ))}
                  </div>
                  <span className="absolute -bottom-16 -right-10 text-[12rem] font-black leading-none tracking-[-0.12em] text-[#c9b88f]/45">
                    F
                  </span>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export const EpisodesSection = () => (
  <section id="episodios" className="px-6 py-24 sm:px-10 lg:px-16">
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <Reveal direction="left">
          <SectionHeading
            eyebrow="Últimas ediciones"
            title="Episodios para ver, comentar y mandar al grupo."
            description="Cada edición abre una conversación distinta: lo que pasó, lo que nadie dijo y lo que seguro vas a querer comentar después."
          />
        </Reveal>
        <Reveal delay={0.12} direction="right">
          <Button
            asChild
            size="lg"
            className="h-12 w-fit rounded-full border-2 border-[#14110d] bg-[#a83232] px-6 font-bold text-[#f7f0dc] shadow-[4px_4px_0_#14110d] hover:bg-[#8f2828]">
            <Link
              href="https://youtube.com/@elfactorf?si=qDo3LxT9H_V687x5"
              target="_blank"
              rel="noreferrer">
              Ver ediciones
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        </Reveal>
      </div>

      <div className="mt-12 grid auto-rows-fr items-stretch gap-5 lg:grid-cols-3">
        {episodes.map((episode, index) => (
          <Reveal
            key={episode.number}
            className="h-full"
            delay={index * 0.08}
            direction="scale"
          >
            <article className="group flex h-full min-h-[25rem] flex-col rounded-[2.5rem] border-2 border-[#14110d] bg-[#f7f0dc] p-6 text-[#14110d] shadow-[6px_6px_0_#14110d] transition duration-300 hover:-translate-y-1 hover:shadow-[10px_10px_0_#14110d]">
              <div className="flex items-start justify-between gap-4">
                <span className="text-7xl font-black leading-none tracking-[-0.12em] text-[#1f4e79]">
                  {episode.number}
                </span>
                <span className="rounded-full bg-[#14110d] px-3 py-1 font-mono text-xs font-black uppercase tracking-[0.18em] text-[#f7f0dc]">
                  {episode.category}
                </span>
              </div>
              <div className="mt-16 flex flex-1 flex-col">
                <h3 className="text-4xl font-black uppercase leading-none tracking-[-0.07em]">
                  {episode.title}
                </h3>
                <p className="mt-5 text-base font-medium leading-7 text-[#2b2520]/72">
                  {episode.description}
                </p>
                <div className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-black uppercase tracking-[0.14em] text-[#a83232]">
                  Ver episodio
                  <ArrowUpRight
                    className="size-4 transition group-hover:translate-x-1 group-hover:-translate-y-1"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export const MomentsSection = () => (
  <section
    className="px-6 py-24 sm:px-10 lg:px-16"
    aria-labelledby="momentos-title">
    <div className="mx-auto max-w-7xl">
      <Reveal direction="left">
        <SectionHeading
          eyebrow="Lo que se comentó"
          title="Frases, reacciones y clips que se quedan dando vueltas."
          description="Aquí nacen los momentos que terminan en reels, comentarios y chats. Factor F no solo cubre temas: los convierte en conversación."
        />
      </Reveal>

      <div className="mt-12 grid auto-rows-fr items-stretch gap-4 md:grid-cols-4">
        {moments.map((moment, index) => (
          <Reveal
            key={moment}
            className="h-full"
            delay={index * 0.07}
            direction="up"
          >
            <figure
              className={cn(
                "flex h-full min-h-72 flex-col justify-between rounded-[2rem] border p-5",
                index % 2 === 0
                  ? "border-[#14110d] bg-[#c9b88f] text-[#14110d] shadow-[5px_5px_0_#14110d]"
                  : "border-[#14110d] bg-[#14110d] text-[#f7f0dc] shadow-[5px_5px_0_#c9b88f]",
              )}>
              <MessageCircle className="size-8" aria-hidden="true" />
              <blockquote
                id={index === 0 ? "momentos-title" : undefined}
                className="text-3xl font-black uppercase leading-[0.95] tracking-[-0.06em]">
                “{moment}”
              </blockquote>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export const FinalCtaSection = () => (
  <section id="contacto" className="px-4 py-16 sm:px-10 sm:py-20 lg:px-16">
    <Reveal direction="scale">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border-2 border-[#14110d] bg-[#f7f0dc] shadow-[5px_5px_0_#14110d] sm:rounded-[3rem] sm:shadow-[8px_8px_0_#14110d]">
        <CurvedCallout />
        <div className="grid gap-8 p-5 sm:p-8 md:p-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <Reveal className="min-w-0" delay={0.08} direction="left">
            <p className="font-mono text-[0.68rem] font-black uppercase tracking-[0.24em] text-[#a83232] sm:text-xs sm:tracking-[0.32em]">
              Pasa por Factor F
            </p>
            <h2 className="mt-5 max-w-4xl break-words text-[clamp(2.35rem,11.5vw,4.5rem)] font-black uppercase leading-[0.9] tracking-[-0.06em] text-[#14110d] md:text-7xl leading-[1.1] md:tracking-[-0.08em]">
              ¿Tienes un tema, una historia o una colaboración que merece estar
              en la próxima edición?
            </h2>
          </Reveal>
          <Reveal
            className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto lg:min-w-44 lg:flex-col"
            delay={0.16}
            direction="right"
          >
            {socialLinks.map((link) => (
              <Button
                key={link.href}
                asChild
                size="lg"
                className="h-12 w-full rounded-full border-2 border-[#14110d] bg-[#14110d] px-6 font-bold text-[#f7f0dc] shadow-[4px_4px_0_#c9b88f] hover:bg-[#2b2520]">
                <Link href={link.href} target="_blank" rel="noreferrer">
                  <link.icon className="size-4" aria-hidden="true" />
                  {link.label}
                </Link>
              </Button>
            ))}
          </Reveal>
        </div>
      </div>
    </Reveal>
  </section>
);

export const SiteFooter = () => (
  <footer className="border-t-2 border-[#14110d] px-6 py-8 sm:px-10 lg:px-16">
    <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm font-semibold text-[#2b2520]/70 md:flex-row md:items-center md:justify-between">
      <p>© 2026 Factor F. Marie Ferro y Máximo Ferro.</p>
      <p className="font-mono uppercase tracking-[0.22em]">
        Farándula • fútbol • actualidad
      </p>
    </div>
  </footer>
);
