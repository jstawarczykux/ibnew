"use client"

import { useState } from "react"
import Image from "next/image"
import { Instagram, Quote } from "lucide-react"

const galleryImages = [
  { id: 1, image: "/ig-1.jpg" },
  { id: 2, image: "/ig-2.jpg" },
  { id: 3, image: "/ig-3.jpg" },
  { id: 4, image: "/ig-4.jpg" },
  { id: 5, image: "/ig-5.jpg" },
  { id: 6, image: "/ig-6.jpg" },
]

const testimonials = [
  {
    id: 1,
    text: "Nejlepší káva, co jsem kdy pil. Od té doby, co jsem objevil Illegal Beans, nemůžu pít nic jiného.",
    author: "Martin K.",
    role: "Coffee addict",
  },
  {
    id: 2,
    text: "Předplatné je geniální. Každý měsíc se těším na novou várku a nikdy jsem nebyl zklamaný.",
    author: "Petra S.",
    role: "Věrná zákaznice",
  },
  {
    id: 3,
    text: "Dodávají nám kávu do firmy a kolegové jsou nadšení. Produktivita šla nahoru!",
    author: "Tomáš H.",
    role: "Office manager",
  },
]

export function CommunityGallery() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  return (
    <section className="py-16 lg:py-24 bg-[#faf6f1]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-[#2d7d4f] font-mono text-sm tracking-wider uppercase mb-2">
            #IllegalBeans
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-background mb-4">NAŠE KOMUNITA</h2>
          <p className="text-background/70 text-lg max-w-2xl mx-auto">
            Sleduj nás na Instagramu a ukaž nám, jak si pochutnáváš na našem kafe
          </p>
        </div>

        {/* Instagram gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-16">
          {galleryImages.map((item) => (
            <div key={item.id} className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer">
              <Image
                src={item.image || "/placeholder.svg"}
                alt="Community photo"
                width={400}
                height={400}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram className="h-8 w-8 text-[#faf6f1]" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <a
            href="https://instagram.com/illegal__beans"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#2d7d4f] font-semibold hover:text-pink transition-colors"
          >
            <Instagram className="h-5 w-5" />
            Sledovat na Instagramu
          </a>
        </div>

        {/* Testimonials */}
        <div className="bg-background rounded-3xl p-8 lg:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <Quote className="h-12 w-12 text-pink mx-auto mb-6" />
            <p className="text-xl lg:text-2xl text-[#faf6f1] mb-8 leading-relaxed">
              &ldquo;{testimonials[activeTestimonial].text}&rdquo;
            </p>
            <div className="mb-8">
              <p className="font-bold text-[#faf6f1]">{testimonials[activeTestimonial].author}</p>
              <p className="text-muted-foreground">{testimonials[activeTestimonial].role}</p>
            </div>
            <div className="flex justify-center gap-3">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`h-3 rounded-full transition-all duration-300 ${idx === activeTestimonial ? "w-8 bg-pink" : "w-3 bg-muted hover:bg-muted-foreground"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
