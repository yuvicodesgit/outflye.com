import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { SweatshirtPage } from '@/components/sweatshirt-page'

export default function SweatshirtsPage() {
  return (
    <>
      <Header />
      <SweatshirtPage />
      <Footer />
    </>
  )
}


