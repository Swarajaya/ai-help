import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Brain, Layers, Target, Briefcase, ArrowRight, Sparkles } from "lucide-react"

const stats = [
  { value: "2300+", label: "AI Projects" },
  { value: "44", label: "AI Domains" },
  { value: "100+", label: "AI Career Paths" },
]

const valueCards = [
  {
    icon: Layers,
    title: "Structured Learning Paths",
    description:
      "Follow carefully designed curricula that take you from fundamentals to advanced AI concepts systematically.",
  },
  {
    icon: Brain,
    title: "System-Level Understanding",
    description:
      "Gain deep insights into how AI systems are architected, designed, and deployed in production environments.",
  },
  {
    icon: Target,
    title: "Career-Focused Knowledge",
    description: "Learn the skills and concepts that employers actively seek, mapped to real industry requirements.",
  },
  {
    icon: Briefcase,
    title: "Industry-Relevant AI Skills",
    description: "Master the AI domains and technologies that power today's most innovative companies and products.",
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-40 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Professional AI Education Platform</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-balance">
              <span className="gradient-text">Understand AI.</span>
              <br />
              <span className="text-foreground">From Fundamentals to Real Systems.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty">
              A structured platform to learn AI concepts, architectures, and industry-relevant systems — focused on deep
              understanding and practical knowledge.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/categories">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 gap-2"
                >
                  Explore AI Domains
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/projects">
                <Button size="lg" variant="outline" className="gap-2 border-border hover:bg-muted/50 bg-transparent">
                  Browse AI Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-border bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Cards Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Why AI Project Hub?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We focus on building deep, conceptual understanding of AI systems rather than surface-level tutorials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {valueCards.map((card) => (
              <div key={card.title} className="glass rounded-xl p-6 hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                  <card.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{card.title}</h3>
                <p className="text-muted-foreground">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center glass rounded-2xl p-10 md:p-14">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Ready to Master AI?</h2>
            <p className="text-muted-foreground mb-8">
              Start your journey through 44 AI domains, 2300+ projects, and 100+ career paths.
            </p>
            <Link href="/register">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 gap-2"
              >
                Get Started Free
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
