'use client'

import { motion } from 'framer-motion'
import { SectionIntro } from '@/components/motion/section-intro'
import { products } from '@/data/products'
import { ProductCard } from '@/components/product/product-card'

export function FeaturedProductsSection() {
  return (
    <section className="bg-[#f2ede5] px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Seçilmiş məhsullar"
          title="Vitrində az, hissdə dərin seçilmiş formalar."
          text="Məhsul kartları klassik mağaza interfeysi kimi deyil, hər bir parçanın səth, işıq və material xarakterini göstərən premium səhnələr kimi qurulub."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {products.slice(0, 6).map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, delay: i * 0.04 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}