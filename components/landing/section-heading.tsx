import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) => (
  <div className={cn("max-w-4xl", className)}>
    <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.32em] text-[#a83232]">
      {eyebrow}
    </p>
    <h2 className="text-balance text-4xl font-black uppercase leading-[0.9] tracking-[-0.07em] text-[#14110d] md:text-6xl lg:text-7xl">
      {title}
    </h2>
    {description ? (
      <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-[#2b2520]/72 md:text-lg">
        {description}
      </p>
    ) : null}
  </div>
);
