import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function BrandStory() {
  return (
    <section className="py-16 lg:py-24 bg-[#faf6f1] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side with actual brand imagery */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-full h-full bg-pink rounded-3xl" />
            <div className="relative">
              <div className="relative z-10 bg-background rounded-3xl p-8 flex items-center justify-center">
                <Image
                  src="/specialty-coffee-bag-ethiopia-chelbesa-filter-pink.jpg"
                  alt="Illegal Beans Coffee"
                  width={400}
                  height={500}
                  className="transform -rotate-6 hover:rotate-0 transition-transform duration-500"
                />
                <Image
                  src="/specialty-coffee-bag-colombia-pink-green-stripes-f.jpg"
                  alt="Illegal Beans Coffee"
                  width={400}
                  height={500}
                  className="absolute transform rotate-6 hover:rotate-0 transition-transform duration-500 opacity-90"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#2d7d4f] text-[#faf6f1] p-6 rounded-2xl z-20 shadow-xl">
                <p className="text-4xl font-bold">2019</p>
                <p className="text-sm opacity-80">od založení</p>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className="space-y-6">
            <span className="inline-block text-[#2d7d4f] font-mono text-sm tracking-wider uppercase">Náš příběh</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-background leading-tight">KAFE S PUNKOVÝM DUCHEM</h2>
            <div className="space-y-4 text-background/70 text-lg">
              <p>
                Illegal Beans vzniklo z lásky ke kvalitní kávě a touhy dělat věci jinak. Žádné nudné korporátní kecy –
                jen poctivě pražená specialty káva, která tě nakopne.
              </p>
              <p>
                Pražíme v malých várkách v Praze, vybíráme si jenom ty nejlepší zelené zrna a každou várku testujeme,
                dokud není přesně tak, jak má být.
              </p>
            </div>
            <div className="flex flex-wrap gap-8 py-4">
              <div>
                <p className="text-4xl font-bold text-[#2d7d4f]">50+</p>
                <p className="text-sm text-background/60">Různých káv</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-[#2d7d4f]">12</p>
                <p className="text-sm text-background/60">Zemí původu</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-[#2d7d4f]">100%</p>
                <p className="text-sm text-background/60">Specialty grade</p>
              </div>
            </div>
            <Button size="lg" className="bg-background text-[#faf6f1] hover:bg-background/90 rounded-full px-8 group">
              Celý náš příběh
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
