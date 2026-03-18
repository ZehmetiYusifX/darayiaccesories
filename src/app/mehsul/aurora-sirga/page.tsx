import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { ProductGallery } from '@/components/product/product-gallery'
import { ProductInfo } from '@/components/product/product-info'
import { products } from '@/data/products'

export default function ProductDetailPage() {
  const product = products.find((item) => item.slug === 'aurora-sirga')

  if (!product) return null

  return (
    <main className="bg-[#f7f3ec] text-[var(--fg)]">
      <Navbar />

      <section className="px-4 pb-24 pt-32 md:px-8">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] border border-black/8 bg-[#fcfaf6] shadow-[0_25px_90px_rgba(0,0,0,0.05)] lg:grid-cols-[1.05fr_0.95fr]">
          <ProductGallery images={product.gallery} />
          <ProductInfo product={product} />
        </div>
      </section>

      <Footer />
    </main>
  )
}