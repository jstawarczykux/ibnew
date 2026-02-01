"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Loader2, CheckCircle } from "lucide-react"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setStatus("success")
    setEmail("")
    setTimeout(() => setStatus("idle"), 3000)
  }

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-pink/20 via-pink/10 to-[#2d7d4f]/20 rounded-3xl p-8 lg:p-16 text-center border border-border">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#faf6f1] mb-4">ODEBÍREJ NEWSLETTER</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Nezmeškej žádné novinky, limitky nebo slevy. Žádný spam, jen to nejlepší z Illegal Beans.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Tvoje e-mailová adresa"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-14 px-6 bg-card border-border text-[#faf6f1] placeholder:text-muted-foreground rounded-none focus-visible:ring-pink"
            />
            <Button
              type="submit"
              size="lg"
              disabled={status === "loading" || status === "success"}
              className="h-14 px-8 bg-pink text-background hover:bg-pink/90 rounded-none font-medium"
            >
              {status === "loading" ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : status === "success" ? (
                <>
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Přihlášeno!
                </>
              ) : (
                <>
                  Přihlásit se
                  <Send className="h-4 w-4 ml-2" />
                </>
              )}
            </Button>
          </form>

          <p className="text-xs text-muted-foreground mt-4">
            Vložením e-mailu uděluješ souhlas s{" "}
            <a href="/privacy" className="text-pink hover:underline">
              podmínkami ochrany osobních údajů
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
