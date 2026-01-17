import { Leaf, Heart, Award, Globe } from "lucide-react"

const values = [
  {
    icon: Leaf,
    title: "Udržitelný sourcing",
    description: "Spolupracujeme pouze s farmáři, kteří dbají na životní prostředí a férové podmínky.",
  },
  {
    icon: Heart,
    title: "Direct trade",
    description: "Platíme férové ceny přímo farmářům, bez zbytečných prostředníků.",
  },
  {
    icon: Award,
    title: "Specialty grade",
    description: "Vybíráme pouze kávy s hodnocením 80+ bodů na SCA stupnici kvality.",
  },
  {
    icon: Globe,
    title: "Malé várky",
    description: "Pražíme v malých dávkách pro maximální čerstvost a kontrolu kvality.",
  },
]

export function SustainabilitySection() {
  return (
    <section className="py-16 lg:py-24 bg-[#2d7d4f]">
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
          {values.map((value, idx) => (
            <div key={idx} className="text-center group">
              <div className="inline-flex p-5 bg-[#faf6f1]/10 rounded-2xl mb-6 group-hover:bg-[#faf6f1]/20 transition-colors">
                <value.icon className="h-8 w-8 text-[#faf6f1]" />
              </div>
              <h3 className="text-xl font-bold text-[#faf6f1] mb-3">{value.title}</h3>
              <p className="text-[#faf6f1]/70">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
