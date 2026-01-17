import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, Building2, Repeat, Truck } from "lucide-react"

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
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Subscription card */}
          <div className="bg-gradient-to-br from-pink/20 to-pink/5 rounded-3xl p-8 lg:p-12 border border-pink/30 relative overflow-hidden">
            <div className="absolute -right-16 -bottom-16 opacity-20">
              <Image
                src="https://illegalbeans.cz/user/documents/upload/etiopie%20chelbesa%20filtr.png"
                alt=""
                width={300}
                height={300}
                className="transform rotate-12"
              />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-pink rounded-2xl">
                  <Repeat className="h-6 w-6 text-background" />
                </div>
                <span className="text-pink font-mono text-sm tracking-wider uppercase">Předplatné</span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-[#faf6f1] mb-4">NIKDY TI NEDOJDE KAFE</h3>
              <p className="text-muted-foreground text-lg mb-8">
                Nastav si předplatné a my ti budeme pravidelně posílat čerstvě praženou kávu. Vyber si frekvenci a
                množství, my se postaráme o zbytek.
              </p>
              <ul className="space-y-4 mb-8">
                {subscriptionPerks.map((perk, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="p-1 bg-pink rounded-full">
                      <Check className="h-4 w-4 text-background" />
                    </div>
                    <span className="text-[#faf6f1]">{perk}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="bg-pink text-background hover:bg-pink/90 rounded-full px-8 w-full sm:w-auto">
                Začít předplatné
              </Button>
            </div>
          </div>

          {/* B2B card - DeskPresso */}
          <div className="bg-gradient-to-br from-[#2d7d4f]/20 to-[#2d7d4f]/5 rounded-3xl p-8 lg:p-12 border border-[#2d7d4f]/30 relative overflow-hidden">
            <div className="absolute -right-16 -bottom-16 opacity-20">
              <Image
                src="https://illegalbeans.cz/user/documents/upload/deskpresso%20blonde.png"
                alt=""
                width={300}
                height={300}
                className="transform rotate-12"
              />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#2d7d4f] rounded-2xl">
                  <Building2 className="h-6 w-6 text-[#faf6f1]" />
                </div>
                <span className="text-[#2d7d4f] font-mono text-sm tracking-wider uppercase">DeskPresso</span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-[#faf6f1] mb-4">KAFE DO VAŠÍ FIRMY</h3>
              <p className="text-muted-foreground text-lg mb-8">
                Blend, co udrží tým v chodu i v pátek v 16:59. Zajistíme prémiovou kávu pro vaši kancelář.
              </p>
              <ul className="space-y-4 mb-8">
                {b2bPerks.map((perk, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="p-1 bg-[#2d7d4f] rounded-full">
                      <Check className="h-4 w-4 text-[#faf6f1]" />
                    </div>
                    <span className="text-[#faf6f1]">{perk}</span>
                  </li>
                ))}
              </ul>
              <Button
                size="lg"
                className="bg-[#2d7d4f] text-[#faf6f1] hover:bg-[#2d7d4f]/90 rounded-full px-8 w-full sm:w-auto"
              >
                Nezávazná poptávka
              </Button>
            </div>
          </div>
        </div>

        {/* Delivery banner */}
        <div className="mt-8 bg-card rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border border-border">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-pink/20 rounded-xl">
              <Truck className="h-6 w-6 text-pink" />
            </div>
            <div>
              <p className="font-bold text-[#faf6f1]">Pošta grátis nad 1000 Kč</p>
              <p className="text-sm text-muted-foreground">Ty vybírej, my vezmeme dopravu na sebe</p>
            </div>
          </div>
          <Button
            variant="outline"
            className="border-[#faf6f1] text-[#faf6f1] hover:bg-[#faf6f1] hover:text-background rounded-full bg-transparent"
          >
            Více o doručení
          </Button>
        </div>
      </div>
    </section>
  )
}
