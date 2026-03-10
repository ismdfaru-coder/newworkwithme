import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="bg-muted/30 py-2 text-center text-sm">
        <span>WorkwithMe is now part of Meta — bringing AI to businesses worldwide</span>
        <span className="ml-1">→</span>
      </div>
      <main className="flex-1">
        <HeroSection />
      </main>
      <Footer />
    </div>
  )
}
