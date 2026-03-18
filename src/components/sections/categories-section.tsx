'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { categories } from '@/data/categories'
import { SectionIntro } from '@/components/motion/section-intro'

export function CategoriesSection() {
  return (
    <section className="bg-[#f7f3ec] px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Seçilmiş istiqamətlər"
          title="Kolleksiyalar vitrin kimi deyil, hekayə kimi açılır."
          text="DARAYI kateqoriyaları klassik mağaza qutuları ilə yox, material, hərəkət və işığın yaratdığı hiss üzərindən təqdim olunur."
        />

        <div className="grid gap-5 lg:grid-cols-12 lg:grid-rows-2">
          {categories.map((item, index) => (
            <motion.article
              key={item.id}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 180, damping: 20 }}
              className={[
                'group relative overflow-hidden rounded-[2rem] border border-black/8 bg-white/70 shadow-[0_20px_60px_rgba(0,0,0,0.05)]',
                index === 0 ? 'lg:col-span-7 lg:row-span-2 min-h-[520px]' : '',
                index === 1 ? 'lg:col-span-5 min-h-[250px]' : '',
                index === 2 ? 'lg:col-span-3 min-h-[250px]' : '',
                index === 3 ? 'lg:col-span-2 min-h-[250px]' : '',
              ].join(' ')}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `linear-gradient(to top, rgba(9,9,9,0.58), rgba(9,9,9,0.08)), url(${item.image})`,
                }}
              />
              <div className="relative flex h-full flex-col justify-between p-7 text-white md:p-9">
                <div className="inline-flex w-fit rounded-full border border-white/20 bg-white/10 px-3 py-2 text-[10px] uppercase tracking-[0.26em] backdrop-blur">
                  Seçilmiş kateqoriya
                </div>

                <div>
                  <h3 className="font-serif text-3xl tracking-[-0.04em] md:text-5xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-7 text-white/80">
                    {item.subtitle}
                  </p>
                  <button className="mt-6 inline-flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-white/90">
                    Kəşf et <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}