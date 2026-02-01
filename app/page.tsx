import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturedCollections } from "@/components/featured-collections"
import { BrandStory } from "@/components/brand-story"
import { RecommendedProducts } from "@/components/recommended-products"
import { ContentArticles } from "@/components/content-articles"
import { SubscriptionModule } from "@/components/subscription-module"
import { CommunityGallery } from "@/components/community-gallery"
import { SustainabilitySection } from "@/components/sustainability-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturedCollections />
      <BrandStory />
      <RecommendedProducts />
      <ContentArticles />
      <SubscriptionModule />
      <CommunityGallery />
      <SustainabilitySection />
      <Footer />
    </main>
  )
}
