import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Hero } from '@/components/sections/hero'
import { CategoriesSection } from '@/components/sections/categories-section'
import { ServicesSection } from '@/components/sections/services-section'
import { FeaturedProductsSection } from '@/components/sections/featured-products-section'
import { EditorialSection } from '@/components/sections/editorial-section'
import { StorySection } from '@/components/sections/story-section'
import { ShowroomSection } from '@/components/sections/showroom-section'

export default function HomePage() {
  return (
    <main className="bg-[var(--bg)] text-[var(--fg)]">
      <Navbar />
      <Hero />
      <CategoriesSection />
      <ServicesSection />
      <FeaturedProductsSection />
      <EditorialSection />
      <StorySection />
      <ShowroomSection />
      <Footer />
    </main>
  )
}