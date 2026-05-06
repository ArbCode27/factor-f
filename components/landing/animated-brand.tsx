"use client";

import { useReducedMotion } from "motion/react";

import CurvedLoop from "@/components/CurvedLoop";
import ScrollVelocity from "@/components/ScrollVelocity";
import ShinyText from "@/components/ShinyText";
import TrueFocus from "@/components/TrueFocus";

type ShinyLabelProps = {
  text: string;
  className?: string;
};

export const HeroGlitchTitle = () => {
  return (
    <h1 className="text-left text-[clamp(4.8rem,19vw,10rem)] font-black uppercase leading-[0.72]  text-[#14110d]">
      FACTOR F
    </h1>
  );
};

export const ShinyLabel = ({ text, className = "" }: ShinyLabelProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <ShinyText
      text={text}
      disabled={Boolean(shouldReduceMotion)}
      speed={3}
      color="#14110d"
      shineColor="#a83232"
      className={className}
    />
  );
};

export const VelocityBanner = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="overflow-hidden border-y-2 border-[#14110d] bg-[#14110d] py-4 text-[#e7dfc9]">
      <ScrollVelocity
        texts={[
          "FARÁNDULA • FÚTBOL • OPINIÓN • REACCIONES • VENEZUELA • ",
          "MARIE FERRO • MÁXIMO FERRO • NUEVA EDICIÓN • DOMINGOS • FACTOR F • ",
        ]}
        velocity={shouldReduceMotion ? 0 : 72}
        className="px-4 text-[clamp(2.5rem,8vw,6.5rem)] font-black uppercase tracking-[-0.07em]"
        scrollerClassName="font-sans"
      />
    </div>
  );
};

export const FocusStatement = () => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <p className="text-center text-3xl font-black uppercase tracking-[-0.05em] text-[#14110d] md:text-6xl">
        Farándula + Fútbol + Opinión
      </p>
    );
  }

  return (
    <TrueFocus
      sentence="Farándula + Fútbol + Opinión"
      borderColor="#a83232"
      glowColor="rgba(168, 50, 50, 0.25)"
      blurAmount={2.5}
      animationDuration={0.42}
      pauseBetweenAnimations={0.8}
    />
  );
};

export const CurvedCallout = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative -mx-6 overflow-hidden border-y-2 border-[#14110d] bg-[#c9b88f] py-8 text-[#14110d] sm:-mx-10 lg:-mx-16">
      <CurvedLoop
        marqueeText="VER LA ÚLTIMA EDICIÓN • SEGUIR EN INSTAGRAM • NUEVO EPISODIO CADA DOMINGO • "
        speed={shouldReduceMotion ? 0 : 2}
        direction="left"
        curveAmount={shouldReduceMotion ? 0 : 180}
        interactive={!shouldReduceMotion}
        containerClassName="flex h-[120px] w-full items-center justify-center md:h-[300px]"
        className="fill-[#14110d] text-[clamp(7.5rem,9vw,8rem)] font-black letter"
      />
    </div>
  );
};
