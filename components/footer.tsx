import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const footerLinks = {
  info: {
    title: "Info",
    links: [
      { label: "O Illegal beans", href: "/about" },
      { label: "Obchodní podmínky", href: "/terms" },
      { label: "Podmínky ochrany osobních údajů", href: "/privacy" },
    ],
  },
}

export function Footer() {
  return (
    <footer className="bg-[#faf6f1] border-t border-background/10">
      {/* Newsletter section integrated into footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Newsletter column */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-background mb-2">Odebírej newsletter</h3>
            <p className="text-background/70 mb-4">Nezmeškej žádné novinky či slevy!</p>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Tvoje e-mailová adresa"
                className="flex-1 px-4 py-3 rounded-lg border border-background/20 bg-white text-background placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-[#2d7d4f] h-12"
              />
              <Button
                type="submit"
                className="px-6 h-12 bg-background text-[#faf6f1] font-semibold rounded-lg hover:bg-background/90 transition-colors"
              >
                PŘIHLÁSIT SE
              </Button>
            </form>
            <p className="text-xs text-background/60 mt-2">
              Vložením e-mailu uděluješ souhlas s{" "}
              <a href="/privacy" className="text-[#2d7d4f] hover:underline">
                podmínkami ochrany osobních údajů
              </a>
            </p>
          </div>

          {/* Info links */}
          <div>
            <h4 className="font-bold text-background mb-4">{footerLinks.info.title}</h4>
            <ul className="space-y-3">
              {footerLinks.info.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#2d7d4f] hover:text-pink transition-colors flex items-center gap-1"
                  >
                    <span className="text-background/40">{">"}</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-bold text-background mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+420601592711"
                  className="flex items-center gap-2 text-[#2d7d4f] hover:text-pink transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  +420 601 592 711
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/illegalbeans"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#2d7d4f] hover:text-pink transition-colors"
                >
                  <Facebook className="h-4 w-4" />
                  Illegal Beans
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/illegal__beans"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#2d7d4f] hover:text-pink transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                  illegal__beans/
                </a>
              </li>
            </ul>

            {/* Instagram preview */}
            <div className="mt-6">
              <h5 className="font-bold text-background mb-3">Instagram</h5>
              <div className="grid grid-cols-2 gap-2">
                <Image
                  src="/coffee-latte-art-heart-shape-pink-foam.jpg"
                  alt="Instagram"
                  width={100}
                  height={100}
                  className="rounded-lg w-full aspect-square object-cover"
                />
                <Image
                  src="/specialty-coffee-bag-pink-green-stripes-punk-style.jpg"
                  alt="Instagram"
                  width={100}
                  height={100}
                  className="rounded-lg w-full aspect-square object-cover"
                />
                <Image
                  src="/christmas-coffee-gift-festive-holiday-packaging.jpg"
                  alt="Instagram"
                  width={100}
                  height={100}
                  className="rounded-lg w-full aspect-square object-cover"
                />
                <Image
                  src="/pour-over-coffee-brewing-specialty-coffee-drip.jpg"
                  alt="Instagram"
                  width={100}
                  height={100}
                  className="rounded-lg w-full aspect-square object-cover"
                />
              </div>
              <a
                href="https://instagram.com/illegal__beans"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#2d7d4f] hover:text-pink transition-colors mt-3 text-sm"
              >
                <Instagram className="h-4 w-4" />
                Sledovat na Instagramu
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-pink flex items-center justify-center">
                <span className="text-background font-bold text-sm">IB</span>
              </div>
              <span className="text-sm text-background/60">
                Copyright 2025 <strong className="text-background">Illegal beans</strong>. Všechna práva vyhrazena.
              </span>
            </div>
            <a href="/cookies" className="text-sm text-[#2d7d4f] hover:text-pink transition-colors">
              Upravit nastavení cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
