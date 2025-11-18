import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Products } from '@/components/products'
import { CustomDesign } from '@/components/custom-design'
import { CTA } from '@/components/cta'
import { Footer } from '@/components/footer'
import { Questions } from '@/components/questions'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-foreground">
      <Header />
      <Hero />
      <Products />
      <CustomDesign />
      <CTA />
      <Questions />
      <Footer />
    </main>
  )
}
