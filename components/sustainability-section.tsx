import Image from "next/image"

export function SustainabilitySection() {
  return (
    <section className="py-16 lg:py-24 bg-[#3e8b6c]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-[#faf6f1]/80 font-mono text-sm tracking-wider uppercase mb-2">
            Naše hodnoty
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#faf6f1] mb-4">KVALITA BEZ KOMPROMISŮ</h2>
          <p className="text-[#faf6f1]/80 text-lg max-w-2xl mx-auto">
            Za každým šálkem stojí poctivá práce farmářů, pečlivý výběr a vášeň pro dokonalost
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="inline-flex p-4 bg-white rounded-full mb-6 shadow-lg transform transition-transform duration-300 group-hover:scale-110 border-2 border-black">
              <div className="w-20 h-20 relative">
                <Image src="/illustrations/sourcing.png" alt="Udržitelný sourcing" fill className="object-contain" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#faf6f1] mb-3">Udržitelný sourcing</h3>
            <p className="text-[#faf6f1]/70">Spolupracujeme pouze s farmáři, kteří dbají na životní prostředí a férové podmínky.</p>
          </div>

          <div className="text-center group">
            <div className="inline-flex p-4 bg-white rounded-full mb-6 shadow-lg transform transition-transform duration-300 group-hover:scale-110 border-2 border-black">
              <div className="w-20 h-20 relative">
                <Image src="/illustrations/direct_trade.png" alt="Direct trade" fill className="object-contain" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#faf6f1] mb-3">Direct trade</h3>
            <p className="text-[#faf6f1]/70">Platíme férové ceny přímo farmářům, bez zbytečných prostředníků.</p>
          </div>

          <div className="text-center group">
            <div className="inline-flex p-4 bg-white rounded-full mb-6 shadow-lg transform transition-transform duration-300 group-hover:scale-110 border-2 border-black">
              <div className="w-20 h-20 relative">
                <Image src="/illustrations/specialty_grade.png" alt="Specialty grade" fill className="object-contain" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#faf6f1] mb-3">Specialty grade</h3>
            <p className="text-[#faf6f1]/70">Vybíráme pouze kávy s hodnocením 80+ bodů na SCA stupnici kvality.</p>
          </div>

          <div className="text-center group">
            <div className="inline-flex p-4 bg-white rounded-full mb-6 shadow-lg transform transition-transform duration-300 group-hover:scale-110 border-2 border-black">
              <div className="w-20 h-20 relative">
                <Image src="/illustrations/small_batches.jpg" alt="Malé várky" fill className="object-contain" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#faf6f1] mb-3">Malé várky</h3>
            <p className="text-[#faf6f1]/70">Pražíme v malých dávkách pro maximální čerstvost a kontrolu kvality.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
