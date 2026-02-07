"use client"

import { Button } from "@/components/ui/button"
import { ProductCard } from "./product-card"

const products = [
  {
    id: 1,
    name: "Balíček KÁVOVEJ ČTYŘLÍSTEK",
    taste: "Čtyři šance na kofeinové štěstí",
    price: 669,
    badge: "Populární",
  },
  {
    id: 2,
    name: "Travel Tumbler Kinto 350ml",
    taste: "Termoska, co udrží kafe pod dohledem",
    price: 769,
    badge: "Novinka",
  },
  {
    id: 3,
    name: "Balíček V POKLUSU",
    taste: "Čtyři čtvrtkilovky pro všechny, kteří jedou na výkon",
    price: 1339,
    badge: "Akce",
    badgeType: "sale",
  },
]

export function RecommendedProducts() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="inline-block text-pink font-mono text-sm tracking-wider uppercase mb-2">Doporučujeme</span>
            <h2 className="text-3xl lg:text-5xl font-bold text-[#faf6f1]">NEJOBLÍBENĚJŠÍ VOLBY</h2>
          </div>
        </div>



        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              taste={product.taste}
              price={product.price}
              badge={product.badge}
              badgeType={product.badgeType}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-[#faf6f1] text-[#faf6f1] hover:bg-[#faf6f1] hover:text-background rounded-none bg-transparent"
          >
            Zobrazit vše
          </Button>
        </div>
      </div>
    </section >
  )
}
