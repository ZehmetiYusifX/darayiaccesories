import Link from 'next/link'
import type { Product } from '@/data/products'

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-black/8 bg-white/65 shadow-[0_20px_70px_rgba(0,0,0,0.05)]">
      <div className="relative h-[420px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${product.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-white/10" />
        <div className="absolute left-5 top-5 rounded-full border border-white/25 bg-white/15 px-3 py-2 text-[10px] uppercase tracking-[0.26em] text-white backdrop-blur">
          {product.accent}
        </div>

        <div className="absolute inset-x-5 bottom-5 rounded-[1.5rem] border border-white/20 bg-white/12 p-5 text-white backdrop-blur-xl">
          <div className="flex items-end justify-between gap-5">
            <div>
              <h3 className="font-serif text-3xl tracking-[-0.04em]">{product.name}</h3>
              <p className="mt-2 text-sm text-white/78">{product.material}</p>
            </div>
            <span className="text-sm uppercase tracking-[0.18em] text-white/85">
              {product.price}
            </span>
          </div>

          <Link
            href={`/mehsul/${product.slug}`}
            className="mt-4 inline-block text-xs uppercase tracking-[0.28em] text-white/90"
          >
            Məhsula bax
          </Link>
        </div>
      </div>
    </article>
  )
}