'use client'

import { useEffect, useRef } from 'react'
import { ChevronDown, Sparkles, ArrowUpRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { HeroCanvas } from '@/components/three/hero-canvas'

gsap.registerPlugin(ScrollTrigger)

function PremiumButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="group inline-flex items-center gap-3 rounded-full border border-black/10 bg-neutral-950 px-6 py-3 text-sm font-medium tracking-[0.18em] text-white transition hover:-translate-y-0.5">
      <span>{children}</span>
      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </button>
  )
}

function OutlineButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="inline-flex items-center gap-3 rounded-full border border-black/15 bg-white/40 px-6 py-3 text-sm font-medium tracking-[0.14em] text-neutral-900 backdrop-blur transition hover:-translate-y-0.5">
      {children}
    </button>
  )
}

export function Hero() {
  const heroRef = useRef<HTMLDivElement | null>(null)
  const imageRef = useRef<HTMLDivElement | null>(null)
  const copyRef = useRef<HTMLDivElement | null>(null)

useEffect(() => {
  const hero = heroRef.current
  const image = imageRef.current
  const copy = copyRef.current

  if (!hero || !image || !copy) return

  const ctx = gsap.context(() => {
    gsap.fromTo(
      image,
      { scale: 1.16, y: 60, opacity: 0.6 },
      { scale: 1, y: 0, opacity: 1, duration: 1.5, ease: 'power4.out' }
    )

    gsap.fromTo(
      copy.children,
      { y: 42, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.14,
        ease: 'power3.out',
        delay: 0.2,
      }
    )

    gsap.to(image, {
      yPercent: 12,
      ease: 'none',
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })
  }, hero)

  return () => ctx.revert()
}, [])

  return (
    <section ref={heroRef} className="relative min-h-screen overflow-hidden bg-[#f2ede5] text-neutral-900">
      <div
        ref={imageRef}
        className="absolute inset-0 scale-105"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(242,237,229,0.94) 16%, rgba(242,237,229,0.56) 46%, rgba(18,18,18,0.10) 100%), url(https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=1800&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-end gap-8 px-4 pb-14 pt-36 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:pb-20">
        <div ref={copyRef} className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/45 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-neutral-700 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Yeni estetik kolleksiya
          </div>

          <h1 className="max-w-4xl font-serif text-[14vw] leading-[0.9] tracking-[-0.05em] text-neutral-950 md:text-[7.2rem] lg:text-[8.4rem]">
            Sənəti <span className="block">gündəlik</span>
            <span className="block">həyatına qat.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-neutral-700 md:text-lg">
            DARAYI üçün zərgərlik sadəcə aksesuar deyil — məkan kimi qurulan,
            işıqla yaşayan və hər toxunuşda fərdiliyini göstərən bir formadır.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <PremiumButton>Kolleksiyanı izlə</PremiumButton>
            <OutlineButton>Yeni seçimi aç</OutlineButton>
          </div>
        </div>

        <div className="relative h-[48vh] min-h-[360px] overflow-hidden rounded-[2rem] border border-white/30 bg-white/20 shadow-[0_30px_90px_rgba(0,0,0,0.12)] backdrop-blur-xl lg:h-[70vh]">
          <HeroCanvas />
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-neutral-600">
        Aşağı sürüşdür <ChevronDown className="h-4 w-4 animate-bounce" />
      </div>
    </section>
  )
}