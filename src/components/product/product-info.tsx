import type { Product } from '@/data/products'

export function ProductInfo({ product }: { product: Product }) {
  return (
    <div className="p-8 md:p-10 lg:p-14">
      <p className="text-[11px] uppercase tracking-[0.32em] text-neutral-500">
        Nümunə məhsul səhifəsi
      </p>
      <h1 className="mt-4 font-serif text-4xl tracking-[-0.04em] text-neutral-950 md:text-6xl">
        {product.name}
      </h1>
      <p className="mt-4 text-sm uppercase tracking-[0.22em] text-neutral-500">
        {product.material}
      </p>

      <p className="mt-6 text-lg leading-8 text-neutral-700">
        Yumşaq radiuslar və incə işıq oyunu ilə formalaşan bu model, gündəlik
        görünüşü səs-küylə deyil, zərif dəqiqliklə tamamlayır.
      </p>

      <div className="mt-8 grid gap-4 border-y border-black/8 py-8 md:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-neutral-500">Material</p>
          <p className="mt-3 text-sm leading-7 text-neutral-700">
            925 gümüş baza, 18K qızıl örtük, əl ilə yoxlanılmış səth keyfiyyəti.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-neutral-500">Detallar</p>
          <p className="mt-3 text-sm leading-7 text-neutral-700">
            Yüngül konstruksiya, gündəlik istifadə rahatlığı, yumşaq parlaqlıq.
          </p>
        </div>
      </div>

      <div className="mt-10 rounded-[1.5rem] border border-black/8 bg-[#f3eee6] p-6">
        <p className="text-xs uppercase tracking-[0.28em] text-neutral-500">Qiymət</p>
        <p className="mt-3 font-serif text-4xl tracking-[-0.04em] text-neutral-950">
          {product.price}
        </p>
        <p className="mt-3 text-sm leading-7 text-neutral-600">
          Pulsuz çatdırılma, 2 il zəmanət və uyğun məhsullar üçün online kredit
          imkanı təqdim olunur.
        </p>
      </div>
    </div>
  )
}