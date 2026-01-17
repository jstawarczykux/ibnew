"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { AllIcon, EspressoIcon, FilterIcon, OtherIcon } from "./category-icons"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProductCard } from "./product-card"

const categories = [
  { id: "all", label: "Nejprodávanější", Icon: AllIcon },
  { id: "espresso", label: "Espresso", Icon: EspressoIcon },
  { id: "filter", label: "Filtr", Icon: FilterIcon },
  { id: "other", label: "Ostatní", Icon: OtherIcon },
]

const products = [
  {
    id: 1,
    name: "Ho ho ho Bourbon VÁNOČNÍ KÁVA",
    taste: "Chutná jako: jablečný štrúdl, mléčná čokoláda, kandovaný pomeranč",
    price: 379,
    category: "filter",
    badge: "Limitka",
    badgeType: "filter",
  },
  {
    id: 2,
    name: "Ho ho ho Bourbon VÁNOČNÍ KÁVA",
    taste: "Chutná jako: jablečný štrúdl, mléčná čokoláda, kandovaný pomeranč",
    price: 379,
    category: "espresso",
    badge: "Limitka",
    badgeType: "espresso",
  },
  {
    id: 3,
    name: "Etiopie Chelbesa",
    taste: "Chutná jako: kandovaný citron, zelený čaj, pražené mandle v medu",
    price: 399,
    category: "filter",
    badge: "Filtr",
    badgeType: "filter",
  },
  {
    id: 4,
    name: "Etiopie Chelbesa",
    taste: "Chutná jako: kandovaný citron, zelený čaj, pražené mandle v medu",
    price: 399,
    category: "espresso",
    badge: "Espresso",
    badgeType: "espresso",
  },
  {
    id: 5,
    name: "Kolumbie Mama Sierra",
    taste: "Chutná jako: mléčná čokoláda, vlašské ořechy, višeň",
    price: 389,
    category: "filter",
    badge: "Filtr",
    badgeType: "filter",
  },
  {
    id: 6,
    name: "Brazílie Serra da Mantiqueira",
    taste: "Chutná jako: mandle v čokoládě, crème caramel, sušené meruňky",
    price: 289,
    category: "espresso",
    badge: "Espresso",
    badgeType: "espresso",
  },
  {
    id: 7,
    name: "Deskpresso BLONDE",
    taste: "Chutná jako: kakao, vlašské ořechy, višeň",
    price: 229,
    category: "espresso",
    badge: "B2B",
    badgeType: "espresso",
  },
  {
    id: 8,
    name: "Deskpresso DARK",
    taste: "Chutná jako: hořká čokoláda, pražené mandle, višně v čokoládě",
    price: 229,
    category: "espresso",
    badge: "Novinka",
    badgeType: "new",
  },
]

export function FeaturedCollections() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProducts = activeCategory === "all" ? products : products.filter((p) => p.category === activeCategory)

  return (
    <section id="vyber" className="py-16 lg:py-24 bg-[#faf6f1]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-background mb-4">VYBER SI SVOJE KAFE</h2>
          <p className="text-background/70 text-lg max-w-2xl mx-auto">
            Čerstvě pražená specialty káva z nejlepších plantáží světa
          </p>
        </div>

        {/* Category tabs using shadcn Tabs */}
        <div className="flex justify-center mb-12">
          <Tabs defaultValue="all" onValueChange={setActiveCategory} className="w-auto">
            <TabsList className="bg-white p-1 rounded-2xl shadow-sm h-auto">
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat.id}
                  value={cat.id}
                  className="flex items-center gap-3 px-8 py-4 rounded-xl font-medium transition-all duration-300 data-[state=active]:bg-[#faf6f1] data-[state=active]:text-background data-[state=active]:shadow-sm data-[state=active]:scale-[1.02] text-background/60 hover:text-background border-none"
                >
                  <cat.Icon className="w-[30px] h-[30px] shrink-0 transition-transform duration-300" />
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Products grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
          {filteredProducts.slice(0, 8).map((product) => (
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
            size="lg"
            variant="outline"
            className="border-background text-background hover:bg-background hover:text-[#faf6f1] rounded-full px-8 bg-transparent"
          >
            Zobrazit všechny kávy
          </Button>
        </div>
      </div>
    </section>
  )
}
