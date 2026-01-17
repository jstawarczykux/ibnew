import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const banners = [
  {
    title: "VÁNOČNÍ KOLEKCE",
    subtitle: "Balíček KÁVOVEJ ČTYŘLÍSTEK",
    description: "Čtyři šance na kofeinové štěstí",
    price: "669 Kč",
    cta: "Koupit",
    bgColor: "bg-[#2d7d4f]",
    textColor: "text-[#faf6f1]",
    image: "/christmas-specialty-coffee-bag-holiday-bourbon-fil.jpg",
  },
  {
    title: "COFFEE MERCH",
    subtitle: 'Tričko "Bean Boss"',
    description: "Růžový šéf, co má kávu pod kontrolou",
    price: "659 Kč",
    cta: "Nakoupit",
    bgColor: "bg-pink",
    textColor: "text-background",
    image: "/pink-tshirt-coffee-beans-typography-bean-boss-merc.jpg",
  },
  {
    title: "DÁRKOVÉ SETY",
    subtitle: "Balíček TĚŽKÝ VÁHY",
    description: "Čtyři čtvrtkilovky pro všechny, kteří jedou na výkon",
    price: "1 279 Kč",
    cta: "Vybrat dárek",
    bgColor: "bg-background",
    textColor: "text-[#faf6f1]",
    image: "/specialty-coffee-bag-ethiopia-espresso-pink-green-.jpg",
  },
]

export function PromoBanners() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {banners.map((banner, idx) => (
            <div
              key={idx}
              className={`${banner.bgColor} rounded-3xl overflow-hidden group cursor-pointer flex flex-col`}
            >
              <div className="relative h-48 overflow-hidden flex items-center justify-center p-4">
                <Image
                  src={banner.image || "/placeholder.svg"}
                  alt={banner.title}
                  width={200}
                  height={200}
                  className="object-contain transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <span className={`text-xs font-bold uppercase tracking-wider ${banner.textColor} opacity-70 mb-1`}>
                  {banner.title}
                </span>
                <h3 className={`text-xl font-bold ${banner.textColor} mb-2`}>{banner.subtitle}</h3>
                <p className={`${banner.textColor} opacity-80 mb-3 text-sm`}>{banner.description}</p>
                <p className={`${banner.textColor} font-bold text-lg mb-4`}>{banner.price}</p>
                <Button
                  variant="ghost"
                  className={`${banner.textColor} hover:bg-white/10 p-0 font-medium group/btn mt-auto self-start`}
                >
                  {banner.cta}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
