import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock } from "lucide-react"

const articles = [
  {
    id: 1,
    title: "Jak na dokonalé espresso doma",
    excerpt: "Kompletní průvodce pro začátečníky i pokročilé. Naučíme tě, jak vytáhnout z tvého kávovaru maximum.",
    category: "Jak na to",
    readTime: "5 min",
    image: "/article_espresso_moody.png",
  },
  {
    id: 2,
    title: "Etiopie: kolébka kávy",
    excerpt: "Prozkoumej s námi místo, kde kávová magie začala. Historie, regiony a chutové profily.",
    category: "Původ kávy",
    readTime: "8 min",
    image: "/article_ethiopia_moody.png",
  },
  {
    id: 3,
    title: "Light vs Dark roast: co je lepší?",
    excerpt: "Věčná debata mezi coffee geeks. Rozebereme rozdíly a pomůžeme ti najít tvůj styl.",
    category: "Degustace",
    readTime: "4 min",
    image: "/article_roast_moody.png",
  },
]

export function ContentArticles() {
  return (
    <section className="py-16 lg:py-24 bg-[#faf6f1]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="inline-block text-[#2d7d4f] font-mono text-sm tracking-wider uppercase mb-2">
              Illegální blog
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-background">Illegální články</h2>
          </div>
          <Button
            variant="outline"
            className="border-background text-background hover:bg-background hover:text-[#faf6f1] rounded-none self-start md:self-auto bg-transparent"
          >
            Všechny články
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative overflow-hidden rounded-t-lg mb-0">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  width={400}
                  height={300}
                  className="w-full aspect-[4/3] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 px-4 py-1.5 bg-background text-[#faf6f1] text-xs font-bold rounded-full">
                  {article.category}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-sm text-background/60 mb-3">
                  <Clock className="h-4 w-4" />
                  <span>{article.readTime} čtení</span>
                </div>
                <h3 className="text-xl font-bold text-background mb-3 group-hover:text-[#2d7d4f] transition-colors leading-tight min-h-[3rem] flex items-center">
                  {article.title}
                </h3>
                <p className="text-background/70 mb-6 flex-grow">{article.excerpt}</p>
                <div className="mt-auto">
                  <span className="inline-flex items-center text-[#2d7d4f] font-medium group-hover:gap-3 gap-2 transition-all">
                    Číst dál
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
