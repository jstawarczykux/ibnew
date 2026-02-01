"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, User, ShoppingCart, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header id="header" className="relative z-50 w-full bg-black pt-[30px] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[30px] before:bg-[url('/markyza_dark.svg')] before:bg-repeat-x before:bg-contain before:z-[1]">
      <div className="container mx-auto px-4">
        <div className="flex h-[80px] items-center">
          {/* Group Logo and Navigation on the Left */}
          <div className="flex items-center flex-1">
            {/* Logo */}
            <Link href="/" className="relative z-10 flex items-center">
              <div className="relative h-[90px] w-[90px] -mt-4 transition-transform hover:scale-105">
                <Image
                  src="/illegal_beans_logo.svg"
                  alt="Illegal Beans Logo"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2 ml-12">
              {[
                { name: "E-shop", href: "/eshop" },
                { name: "O Illegal beans", href: "/about" },
                { name: "Kafe do podniku", href: "/b2b" },
                { name: "Kontakty", href: "/contact" },
                { name: "Illegální blog", href: "/blog" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-5 py-[22px] text-[16px] font-semibold text-white hover:text-[#f5b8d5] transition-colors uppercase tracking-wide"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right side icons */}
          <div className="flex items-center gap-4">
            {/* User Block */}
            <Link
              href="/login"
              className="flex items-center gap-2 h-[42px] px-4 bg-[#f5b8d5] rounded-full text-black hover:bg-[#ef9ec3] transition-colors"
            >
              <User className="h-5 w-5" />
              <span className="text-[14px] font-medium whitespace-nowrap">
                <span className="font-bold">B2B</span> - LENKA S.
              </span>
            </Link>

            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="text-white hover:text-[#f5b8d5] hover:bg-transparent">
                <Search className="h-5 w-5" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-[#f5b8d5] hover:bg-transparent relative"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Košík</span>
              </Button>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:text-[#f5b8d5] hover:bg-transparent"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-black">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link href="/eshop" className="text-lg font-semibold text-white hover:text-[#f5b8d5] transition-colors uppercase">
              E-shop
            </Link>
            <Link href="/about" className="text-lg font-semibold text-white hover:text-[#f5b8d5] transition-colors uppercase">
              O Illegal beans
            </Link>
            <Link href="/b2b" className="text-lg font-semibold text-white hover:text-[#f5b8d5] transition-colors uppercase">
              Kafe do podniku
            </Link>
            <Link href="/contact" className="text-lg font-semibold text-white hover:text-[#f5b8d5] transition-colors uppercase">
              Kontakty
            </Link>
            <Link href="/blog" className="text-lg font-semibold text-white hover:text-[#f5b8d5] transition-colors uppercase">
              Illegální blog
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
