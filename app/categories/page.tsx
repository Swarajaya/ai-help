import Link from "next/link"
import { aiDomains } from "@/lib/ai-domains"
import { Cpu, Layers, Building2, FlaskConical, Sparkles, BookOpen, ArrowRight, FolderOpen } from "lucide-react"

const categories = [
  {
    id: "core",
    label: "Core AI",
    icon: Cpu,
    color: "from-primary to-primary/70",
    description:
      "Foundational concepts and techniques that form the backbone of artificial intelligence. Master these first.",
  },
  {
    id: "advanced",
    label: "Advanced AI",
    icon: Layers,
    color: "from-secondary to-secondary/70",
    description: "Sophisticated techniques and architectures that build upon core concepts for complex applications.",
  },
  {
    id: "industry",
    label: "Industry Applications",
    icon: Building2,
    color: "from-accent to-accent/70",
    description: "Real-world AI applications across various industries, from healthcare to finance to manufacturing.",
  },
  {
    id: "research",
    label: "Research Frontiers",
    icon: FlaskConical,
    color: "from-chart-4 to-chart-4/70",
    description: "Cutting-edge research areas pushing the boundaries of what's possible with artificial intelligence.",
  },
  {
    id: "emerging",
    label: "Emerging Technologies",
    icon: Sparkles,
    color: "from-chart-5 to-chart-5/70",
    description: "New and rapidly evolving AI technologies that are shaping the future of the field.",
  },
]

export default function CategoriesPage() {
  return (
    <main className="min-h-screen pt-16">
      {/* Header */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-10 right-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <FolderOpen className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">5 Categories</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">AI Categories</span>
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Explore AI domains organized by category. From foundational concepts to cutting-edge research, find the
              perfect starting point for your learning journey.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {categories.map((category) => {
              const domainsInCategory = aiDomains.filter((d) => d.category === category.id)
              const totalTopics = domainsInCategory.reduce((acc, d) => acc + d.topics.length, 0)

              return (
                <div key={category.id} className="glass rounded-2xl p-6 md:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Category Info */}
                    <div className="lg:w-1/3">
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}
                        >
                          <category.icon className="w-6 h-6 text-background" />
                        </div>
                        <div>
                          <h2 className="text-xl font-bold text-foreground">{category.label}</h2>
                          <p className="text-sm text-muted-foreground">
                            {domainsInCategory.length} domains · {totalTopics} topics
                          </p>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{category.description}</p>
                    </div>

                    {/* Domains List */}
                    <div className="lg:w-2/3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {domainsInCategory.map((domain) => (
                          <Link
                            key={domain.id}
                            href={`/study/${domain.id}`}
                            className="group flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <BookOpen className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                              <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                                {domain.name}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-muted-foreground">{domain.topics.length} topics</span>
                              <ArrowRight className="w-3 h-3 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
