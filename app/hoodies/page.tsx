import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HoodieCategories } from "@/components/hoodie-categories";
import { HoodieHero } from '@/components/hoodie-hero'


export default function HoodiesPage() {
  return (
    <>
      <Header />
      <HoodieHero />
      <HoodieCategories />
      <Footer />
    </>
  )
}


