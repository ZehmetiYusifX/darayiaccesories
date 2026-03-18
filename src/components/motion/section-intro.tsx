type Props = {
  eyebrow: string
  title: string
  text: string
}

export function SectionIntro({ eyebrow, title, text }: Props) {
  return (
    <div className="mb-10 flex flex-col gap-4 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-2xl">
        <p className="mb-4 text-[11px] uppercase tracking-[0.32em] text-neutral-500">
          {eyebrow}
        </p>
        <h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] text-neutral-950 md:text-6xl">
          {title}
        </h2>
      </div>
      <p className="max-w-xl text-sm leading-7 text-neutral-600 md:text-base">
        {text}
      </p>
    </div>
  )
}