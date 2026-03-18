import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { ProductCard } from '@/components/product/product-card'
import { products } from '@/data/products'

export default function EarringsPage() {
  const earrings = products.filter((item) => item.category === 'Sırğalar')

  return (
    <main className="bg-[var(--bg)] text-[var(--fg)]">
      <Navbar />

      <section className="px-4 pb-16 pt-32 md:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] uppercase tracking-[0.32em] text-neutral-500">
            Kolleksiya
          </p>
          <h1 className="mt-4 font-serif text-5xl tracking-[-0.04em] md:text-7xl">
            Sırğalar
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-600">
            DARAYI sırğa kolleksiyası hərəkət, işıq və səth arasında qurulan
            zərif bir kompozisiyadır. Bu səhifə klassik kataloq deyil, seçilmiş
            formaların rəqəmsal vitrini kimi işləyir.
          </p>
        </div>
      </section>

      <section className="px-4 pb-24 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-3">
          {earrings.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}