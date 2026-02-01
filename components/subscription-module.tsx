import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, Building2, Repeat } from "lucide-react"

const subscriptionPerks = [
  "Čerstvě pražená káva každý měsíc",
  "Sleva 15% oproti jednorázovému nákupu",
  "Bezplatné doručení",
  "Flexibilní – změň nebo zruš kdykoliv",
]

const b2bPerks = [
  "Kafe přímo do vaší kanceláře",
  "Individuální cenová nabídka",
  "Školení pro váš tým",
  "Prémiová kvalita pro vaše zaměstnance",
]

export function SubscriptionModule() {
  return (
    <section className="py-16 lg:py-24 bg-[#f5b8d5]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Subscription card */}
          <div className="bg-[#faf6f1] rounded-lg p-8 lg:p-12 border border-black relative overflow-hidden group flex flex-col h-full">
            <div className="absolute -right-8 -bottom-8 lg:-right-4 lg:-bottom-12 w-64 h-64 lg:w-96 lg:h-96 opacity-100 transition-transform duration-500 group-hover:scale-105 pointer-events-none">
              <Image
                src="/illustrations/subscription.png"
                alt="Coffee Subscription Illustration"
                fill
                className="object-contain mix-blend-multiply"
              />
            </div>
            <div className="relative z-10 flex-1 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-pink rounded-2xl border border-black">
                  <Repeat className="h-6 w-6 text-black" />
                </div>
                <span className="text-pink font-mono text-sm tracking-wider uppercase font-bold">Předplatné</span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-black mb-4 uppercase">Nikdy ti nedojde kafe</h3>
              <p className="text-black/80 text-lg mb-8 max-w-md">
                Nastav si předplatné a my ti budeme pravidelně posílat čerstvě praženou kávu. Vyber si frekvenci a
                množství, my se postaráme o zbytek.
              </p>
              <ul className="space-y-4 mb-8">
                {subscriptionPerks.map((perk, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="p-1 bg-pink rounded-full border border-black">
                      <Check className="h-3 w-3 text-black" />
                    </div>
                    <span className="text-black font-medium">{perk}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-4">
                <Button size="lg" className="bg-pink text-black hover:bg-pink/90 border border-black rounded-none px-8 w-full sm:w-auto font-bold transition-all hover:translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#000000]">
                  Začít předplatné
                </Button>
              </div>
            </div>
          </div>

          {/* B2B card - DeskPresso */}
          <div className="bg-[#faf6f1] rounded-lg p-8 lg:p-12 border border-black relative overflow-hidden group flex flex-col h-full">
            <div className="absolute -right-8 -bottom-8 lg:-right-6 lg:-bottom-4 w-64 h-64 lg:w-80 lg:h-80 opacity-100 transition-transform duration-500 group-hover:scale-105 pointer-events-none">
              <Image
                src="/illustrations/b2b.png"
                alt="B2B Coffee Illustration"
                fill
                className="object-contain mix-blend-multiply"
              />
            </div>
            <div className="relative z-10 flex-1 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#2d7d4f] rounded-2xl border border-black">
                  <Building2 className="h-6 w-6 text-[#faf6f1]" />
                </div>
                <span className="text-[#2d7d4f] font-mono text-sm tracking-wider uppercase font-bold">DeskPresso</span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-black mb-4 uppercase">Kafe do vaší firmy</h3>
              <p className="text-black/80 text-lg mb-8 max-w-md">
                Blend, co udrží tým v chodu i v pátek v 16:59. Zajistíme prémiovou kávu pro vaši kancelář.
              </p>
              <ul className="space-y-4 mb-8">
                {b2bPerks.map((perk, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="p-1 bg-[#2d7d4f] rounded-full border border-black">
                      <Check className="h-3 w-3 text-[#faf6f1]" />
                    </div>
                    <span className="text-black font-medium">{perk}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-4">
                <Button
                  size="lg"
                  className="bg-[#2d7d4f] text-[#faf6f1] hover:bg-[#2d7d4f]/90 border border-black rounded-none px-8 w-full sm:w-auto font-bold transition-all hover:translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#000000]"
                >
                  Nezávazná poptávka
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Delivery banner */}
        <div className="bg-[#faf6f1] rounded-lg p-4 sm:p-6 lg:p-8 border border-black flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="flex items-center gap-6 md:gap-8 z-10 w-full md:w-auto">
            <div className="h-32 w-32 md:h-40 md:w-40 relative shrink-0 -my-4 md:-my-8">
              <Image
                src="/illustrations/delivery.png"
                alt="Delivery Truck"
                fill
                className="object-contain mix-blend-multiply scale-[2.5] origin-center"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h4 className="font-bold text-black text-xl md:text-2xl uppercase mb-1">Pošta grátis nad 1000 Kč</h4>
              <p className="text-black/70 text-base md:text-lg">Ty vybírej, my vezmeme dopravu na sebe</p>
            </div>
          </div>
          <div className="z-10 w-full md:w-auto flex justify-center md:block">
            <Button
              variant="outline"
              className="border border-black text-black hover:bg-black hover:text-[#faf6f1] rounded-none bg-transparent font-bold px-8 py-6 text-lg transition-colors w-full md:w-auto"
            >
              Více o doručení
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
