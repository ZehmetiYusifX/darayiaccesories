'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function StorySection() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const titleRef = useRef<HTMLHeadingElement | null>(null)

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { letterSpacing: '0.1em', opacity: 0.4 },
        {
          letterSpacing: '-0.04em',
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'bottom 35%',
            scrub: true,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-[#111111] px-4 py-28 text-white md:px-8">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-[11px] uppercase tracking-[0.34em] text-white/45">
          Brend bəyanatı
        </p>
        <h2
          ref={titleRef}
          className="mx-auto mt-5 max-w-5xl font-serif text-4xl leading-[1.05] tracking-[0.03em] md:text-7xl"
        >
          DARAYI hər detalı görünmək üçün yox, xatırlanmaq üçün yaradır.
        </h2>
        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/66 md:text-lg">
          Minimalizmin sakit gücü ilə formalaşan kolleksiyalarımız şəxsi üslubu
          parlaq deyil, dəqiq şəkildə vurğulayır.
        </p>
      </div>
    </section>
  )
}