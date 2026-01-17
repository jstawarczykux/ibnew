"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Truck, ShieldCheck, MapPin, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const heroSlides = [
  {
    title: "KAFE, CO NENÍ",
    subtitle: "(PRO) SLABÝ POVAHY",
    description: "Pražíme pro tebe kávu, co tě ráno nakopne a odpoledne ti vrátí chuť žít.",
    cta: "Vybrat kafe",
    ctaSecondary: "Chci vás do podniku",
    image: "/hero_photo.jpg",
  },
  {
    title: "VÁNOČNÍ EDICE",
    subtitle: "HO HO HO BOURBON",
    description: "Vánoční limitka s chutí mléčné čokolády a kandovaného pomeranče.",
    cta: "Koupit limitku",
    ctaSecondary: "Vánoční kávy",
    image: "/christmas-coffee-bag-festive-specialty-coffee-pack.jpg",
  },
  {
    title: "DESKPRESSO",
    subtitle: "KAFE DO KANCELÁŘE",
    description: "Blend, co udrží tým v chodu i v pátek v 16:59. Pro firmy a kanceláře.",
    cta: "Objednat",
    ctaSecondary: "Více o B2B",
    image: "/espresso-blend-coffee-bag-dark-roast-specialty.jpg",
  },
]

const valueProps = [
  { icon: Truck, text: "Pošta grátis nad 1000 Kč" },
  { icon: ShieldCheck, text: "Garance doručení" },
  { icon: MapPin, text: "6000+ výdejních míst" },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)

  return (
    <section className="relative bg-black overflow-hidden">
      <div className="container mx-auto px-4 py-12 lg:py-24 font-poppins min-h-[600px] lg:min-h-[700px] flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left content */}
          <div className="space-y-8 z-10 transition-all duration-500 flex flex-col justify-center">
            <div className="space-y-0 min-h-[120px] sm:min-h-[150px] lg:min-h-[180px]">
              <h1 className="text-[64px] sm:text-[80px] lg:text-[100px] font-bebas text-white leading-[0.9] tracking-tight m-0 p-0 uppercase line-clamp-2">
                {heroSlides[currentSlide].title}
              </h1>
              <h2 className="text-[64px] sm:text-[80px] lg:text-[100px] font-bebas text-white leading-[0.9] tracking-tight m-0 p-0 uppercase line-clamp-1">
                {heroSlides[currentSlide].subtitle}
              </h2>
            </div>

            <div className="min-h-[90px]">
              <p className="text-xl text-white/90 max-w-md font-normal line-clamp-3">
                {heroSlides[currentSlide].description}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-[#f5b8d5] transition-colors font-bold text-lg px-8 py-7 rounded-none uppercase"
              >
                {heroSlides[currentSlide].cta}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black transition-colors font-bold text-lg px-8 py-7 rounded-none bg-transparent uppercase"
              >
                {heroSlides[currentSlide].ctaSecondary}
              </Button>
            </div>

            {/* Carousel controls - removed counter, kept stepper */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-4">
                <button
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-background transition-all"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <div className="flex gap-2.5 items-center">
                  {heroSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-[4px] rounded-full transition-all duration-500 ${idx === currentSlide ? "w-12 bg-[#f5b8d5]" : "w-3 bg-white/30 hover:bg-white/50"
                        }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-background transition-all"
                  aria-label="Next slide"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative flex items-center justify-center lg:justify-end overflow-hidden">
            <div key={currentSlide} className="relative w-full max-w-[600px] aspect-square lg:aspect-[4/3] animate-in fade-in slide-in-from-right-4 duration-700">
              <Image
                src={heroSlides[currentSlide].image}
                alt={heroSlides[currentSlide].title}
                fill
                priority
                className="object-contain lg:object-right"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Value propositions bar - kept as requested */}
      <div className="border-t border-white/10 bg-[#111111]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6">
            {valueProps.map((prop, idx) => (
              <div key={idx} className="flex items-center justify-center gap-3 text-white/90">
                <prop.icon className="w-5 h-5 text-[#f5b8d5]" />
                <span className="text-sm font-semibold uppercase tracking-wider">{prop.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
