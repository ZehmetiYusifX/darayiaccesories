'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed inset-x-0 top-0 z-50 px-4 py-4 md:px-8"
    >
      <div
        className={[
          'mx-auto flex max-w-7xl items-center justify-between rounded-full border px-5 py-3 transition-all duration-500 md:px-7',
          scrolled
            ? 'border-black/10 bg-white/75 shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur-xl'
            : 'border-white/20 bg-white/10 backdrop-blur-md',
        ].join(' ')}
      >
        <Link href="/" className="text-xs font-semibold uppercase tracking-[0.42em]">
          DARAYI
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/">Ana səhifə</Link>
          <Link href="/kolleksiya/sirgalar">Sırğalar</Link>
          <Link href="/mehsul/aurora-sirga">Məhsul</Link>
        </nav>

        <button className="rounded-full border border-black/10 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em]">
          Kəşf et
        </button>
      </div>
    </motion.header>
  )
}