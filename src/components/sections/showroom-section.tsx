import { MapPin } from 'lucide-react'

export function ShowroomSection() {
  return (
    <section className="bg-[#111111] px-4 py-24 text-white md:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10">
          <p className="text-[11px] uppercase tracking-[0.32em] text-white/45">
            Bakı showroom
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.04em] md:text-6xl">
            Məhsulları yalnız ekranda deyil, işığın içində görün.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/65">
            Şəhərin ritmində sakit lüks hissini yaşadan DARAYI məkanında seçilmiş
            kolleksiyalarla yaxından tanış olun.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/6 px-5 py-3 text-sm text-white/90">
            <MapPin className="h-4 w-4" /> Bakı / premium showroom təcrübəsi
          </div>
        </div>

        <div
          className="min-h-[360px] rounded-[2rem] border border-white/10 bg-cover bg-center"
          style={{
            backgroundImage:
              'linear-gradient(to top, rgba(9,9,9,0.4), rgba(9,9,9,0.08)), url(https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80)',
          }}
        />
      </div>
    </section>
  )
}