"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function BrandStory() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Calculate parallax offsets - constrained to prevent too much horizontal movement
  const parallaxShift = Math.min(Math.max(scrollY * 0.05, 0), 40)
  const parallax1 = parallaxShift
  const parallax2 = -parallaxShift * 0.5
  const parallax3 = parallaxShift * 0.3

  return (
    <section className="py-16 lg:py-24 bg-[#faf6f1] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Layered Image Stack with Parallax */}
          <div className="relative h-[450px] sm:h-[550px] flex items-center justify-center z-10">
            {/* Background Pink Layer (Bottom) */}
            <div
              className="absolute w-[95%] h-[95%] bg-pink rounded-[40px]"
              style={{
                transform: `translate(${-15 + parallax2}px, ${-15 + parallax1}px) rotate(-2deg)`,
                opacity: 0.6
              }}
            />

            {/* Hidden/Peeking Card 1 - Smaller */}
            <div
              className="absolute w-3/5 h-3/5 bg-white p-2 rounded-2xl shadow-xl overflow-hidden"
              style={{
                transform: `translate(${30 + parallax3}px, ${-50 + parallax1}px) rotate(8deg)`,
                zIndex: 5
              }}
            >
              <Image
                src="/ig-4.jpg"
                alt="Illegal Beans Community"
                fill
                className="object-cover opacity-70"
              />
            </div>

            {/* Hidden/Peeking Card 2 - Smaller */}
            <div
              className="absolute w-3/5 h-3/5 bg-white p-2 rounded-2xl shadow-xl overflow-hidden"
              style={{
                transform: `translate(${-40 + parallax2}px, ${40 + parallax3}px) rotate(-6deg)`,
                zIndex: 6
              }}
            >
              <Image
                src="/ig-5.jpg"
                alt="Illegal Beans Roastery"
                fill
                className="object-cover opacity-70"
              />
            </div>

            {/* Main Top Card (Clear Team Photo) */}
            <div
              className="relative z-10 w-full h-full bg-black rounded-[40px] shadow-2xl overflow-hidden"
            >
              <Image
                src="/team.jpg"
                alt="Illegal Beans Team"
                fill
                className="object-cover"
                priority
              />

              {/* 2019 Badge - stays attached to the main card */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-[#2d7d4f] text-[#faf6f1] p-4 sm:p-6 rounded-2xl z-20 shadow-xl">
                <p className="text-3xl sm:text-4xl font-bold">2019</p>
                <p className="text-xs sm:text-sm opacity-80">od založení</p>
              </div>
            </div>
          </div>

          {/* Content side - Ensure higher z-index and relative positioning */}
          <div className="space-y-6 relative z-20 bg-[#faf6f1]/50 lg:bg-transparent p-4 lg:p-0 rounded-3xl backdrop-blur-sm lg:backdrop-blur-none">
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
