import Link from "next/link"
import { aiDomains } from "@/lib/ai-domains"
import { BookOpen, ArrowRight, Layers, Cpu, Building2, FlaskConical, Sparkles } from "lucide-react"

const categoryInfo = {
  core: { label: "Core AI", icon: Cpu, color: "from-primary to-primary/70" },
  advanced: { label: "Advanced", icon: Layers, color: "from-secondary to-secondary/70" },
  industry: { label: "Industry", icon: Building2, color: "from-accent to-accent/70" },
  research: { label: "Research", icon: FlaskConical, color: "from-chart-4 to-chart-4/70" },
  emerging: { label: "Emerging", icon: Sparkles, color: "from-chart-5 to-chart-5/70" },
}

export default function StudyPage() {
  const categories = ["core", "advanced", "industry", "research", "emerging"] as const

  return (
    <main className="min-h-screen pt-16">
      {/* Header */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-10 left-1/3 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-20 right-1/3 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">44 AI Domains</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Study AI Domains</span>
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Explore comprehensive learning materials across all major areas of artificial intelligence, from
              foundational concepts to cutting-edge research.
            </p>
          </div>
        </div>
      </section>

      {/* Domains by Category */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4">
          {categories.map((category) => {
            const info = categoryInfo[category]
            const domainsInCategory = aiDomains.filter((d) => d.category === category)

            if (domainsInCategory.length === 0) return null

            return (
              <div key={category} className="mb-16 last:mb-0">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${info.color} flex items-center justify-center`}
                  >
                    <info.icon className="w-5 h-5 text-background" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">{info.label}</h2>
                  <span className="text-muted-foreground">({domainsInCategory.length} domains)</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {domainsInCategory.map((domain) => (
                    <Link
                      key={domain.id}
                      href={`/study/${domain.id}`}
                      className="group glass rounded-xl p-5 hover:border-primary/30 transition-all hover:bg-muted/20"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {domain.name}
                        </h3>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{domain.introduction}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <BookOpen className="w-3 h-3" />
                        <span>{domain.topics.length} topics</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </main>
  )
}
