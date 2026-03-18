import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-[#0d0d0d] px-4 py-10 text-white md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 border-t border-white/10 pt-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.36em] text-white/45">DARAYI</p>
          <p className="mt-3 max-w-md text-sm leading-7 text-white/60">
            Müasir zərgərlik üçün rəqəmsal showroom konsepti. Sakit lüks,
            zərif hərəkət və redaksiya estetikası ilə qurulub.
          </p>
        </div>

        <div className="grid gap-3 text-sm text-white/60 md:text-right">
          <Link href="/">Ana səhifə</Link>
          <Link href="/kolleksiya/sirgalar">Kolleksiya</Link>
          <Link href="/mehsul/aurora-sirga">Məhsul</Link>
        </div>
      </div>
    </footer>
  )
}