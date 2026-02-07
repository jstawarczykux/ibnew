import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-pink text-black pt-12 md:pt-16 pb-8">
      <div className="flex flex-col items-center">
        {/* Newsletter section */}
        <div className="w-full max-w-2xl mb-12 px-4">
          <h3 className="text-xl font-semibold text-center mb-6 uppercase tracking-tight">Přidej se k nám</h3>
          <form className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <div className="relative w-full sm:w-80">
              <Input
                type="email"
                placeholder="Zadej svůj e-mail..."
                className="w-full h-12 bg-white border border-black rounded-none px-6 text-black placeholder:text-black/50 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-black"
              />
            </div>
            <Button
              type="submit"
              className="w-full sm:w-auto h-12 px-8 bg-pink text-black font-bold rounded-none hover:bg-pink transition-all active:translate-y-1 active:translate-x-1"
            >
              ODEBÍRAT
            </Button>
          </form>
        </div>

        {/* Horizontal Links */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12 font-medium text-base px-4">
          <Link href="/about" className="hover:underline">
            O nás
          </Link>
          <Link href="/terms" className="hover:underline">
            Obchodní podmínky
          </Link>
          <Link href="/privacy" className="hover:underline">
            Ochrana údajů
          </Link>
          <Link href="/contact" className="hover:underline">
            Kontakt
          </Link>
        </nav>

        {/* Divider - Edge to edge */}
        <div className="w-full border-t border-black/10 mb-12" />

        {/* Social Icons Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-20 mb-16 px-4">
          <a
            href="https://instagram.com/illegal__beans"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-4 group"
          >
            <div className="h-14 w-14 rounded-full border border-black flex items-center justify-center transition-transform group-hover:scale-110">
              <Instagram className="h-6 w-6" />
            </div>
            <span className="font-medium text-base">illegal__beans</span>
          </a>

          <a
            href="https://facebook.com/illegalbeans"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-4 group"
          >
            <div className="h-14 w-14 rounded-full border border-black flex items-center justify-center transition-transform group-hover:scale-110">
              <Facebook className="h-6 w-6" />
            </div>
            <span className="font-medium text-base">Illegal Beans</span>
          </a>

          <a href="tel:+420601592711" className="flex flex-col items-center gap-4 group">
            <div className="h-14 w-14 rounded-full border border-black flex items-center justify-center transition-transform group-hover:scale-110">
              <Phone className="h-6 w-6" />
            </div>
            <span className="font-medium text-base">+420 601 592 711</span>
          </a>
        </div>

        {/* Large Logo Image - Scaled down on desktop */}
        <div className="relative w-full max-w-[400px] md:max-w-[300px] aspect-[4/3] mb-8">
          <Image
            src="/logo-walking.png"
            alt="Illegal Beans Character Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Copyright */}
        <div className="text-xs font-normal opacity-50 tracking-widest mt-4">
          © {new Date().getFullYear()} ILLEGAL BEANS
        </div>
      </div>
    </footer>
  )
}
