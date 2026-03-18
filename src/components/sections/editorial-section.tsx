'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function EditorialSection() {
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const imageRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!wrapperRef.current || !imageRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { y: 80, scale: 1.08 },
        {
          y: -40,
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      )
    }, wrapperRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={wrapperRef} className="overflow-hidden bg-[#f7f3ec] px-4 py-24 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="rounded-[2rem] border border-black/8 bg-white/55 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.04)] md:p-10">
          <p className="text-[11px] uppercase tracking-[0.32em] text-neutral-500">
            Redaksiya estetikası
          </p>
          <h2 className="mt-5 font-serif text-4xl leading-tight tracking-[-0.04em] text-neutral-950 md:text-6xl">
            “The world is our runway” fikrini sakit lüks dilində yenidən qururuq.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-neutral-600">
            Məkan, material və işığın bir araya gəldiyi bu hissə DARAYI-nin təkcə
            məhsul deyil, həyat tərzi təqdim etdiyini göstərir.
          </p>
        </div>

        <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-black/8 bg-white/30">
          <div
            ref={imageRef}
            className="absolute inset-0 scale-105 bg-cover bg-center"
            style={{
              backgroundImage:
                'linear-gradient(to top, rgba(9,9,9,0.28), rgba(9,9,9,0.08)), url(https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1600&q=80)',
            }}
          />
        </div>
      </div>
    </section>
  )
}