import { Reveal } from "@/components/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  const alignCls = align === "left" ? "text-left" : "text-center";

  return (
    <Reveal>
      <p
        className={[
          "text-xs font-semibold tracking-[0.22em] text-zinc-700/80",
          alignCls,
        ].join(" ")}
      >
        {eyebrow}
      </p>
      <h2
        className={[
          "mt-2 font-(--font-serif) text-4xl leading-tight tracking-[-0.01em] text-zinc-950 sm:text-5xl",
          alignCls,
        ].join(" ")}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={[
            "mx-auto mt-4 max-w-2xl text-base leading-7 text-zinc-800/90",
            alignCls,
          ].join(" ")}
        >
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}

