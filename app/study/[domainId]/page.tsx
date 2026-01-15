import { notFound } from "next/navigation"
import Link from "next/link"
import { aiDomains } from "@/lib/ai-domains"
import { ArrowLeft, BookOpen, Building2, Lightbulb, Wrench, Target, CheckCircle2 } from "lucide-react"

export function generateStaticParams() {
  return aiDomains.map((domain) => ({ domainId: domain.id }))
}

export default async function DomainPage({ params }: { params: Promise<{ domainId: string }> }) {
  const { domainId } = await params
  const domain = aiDomains.find((d) => d.id === domainId)

  if (!domain) {
    notFound()
  }

  return (
    <main className="min-h-screen pt-16">
      {/* Header */}
      <section className="relative overflow-hidden py-12 md:py-16 border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <Link
            href="/study"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Study
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">{domain.name}</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">{domain.introduction}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 max-w-4xl">
            <div className="glass rounded-lg p-4">
              <div className="flex items-center gap-2 text-primary mb-2">
                <Lightbulb className="w-4 h-4" />
                <span className="font-medium text-sm">Why It Matters</span>
              </div>
              <p className="text-sm text-muted-foreground">{domain.whyItMatters}</p>
            </div>
            <div className="glass rounded-lg p-4">
              <div className="flex items-center gap-2 text-secondary mb-2">
                <Building2 className="w-4 h-4" />
                <span className="font-medium text-sm">Industry Usage</span>
              </div>
              <p className="text-sm text-muted-foreground">{domain.industryUsage}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-8">
            <BookOpen className="w-5 h-5 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Topics ({domain.topics.length})</h2>
          </div>

          <div className="space-y-6">
            {domain.topics.map((topic, index) => (
              <div key={topic.name} className="glass rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-sm font-bold text-primary shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{topic.name}</h3>
                    <p className="text-muted-foreground mb-4">{topic.description}</p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                      <div className="bg-muted/30 rounded-lg p-4">
                        <div className="flex items-center gap-2 text-primary mb-2">
                          <CheckCircle2 className="w-4 h-4" />
                          <span className="font-medium text-sm">Core Ideas</span>
                        </div>
                        <ul className="space-y-1">
                          {topic.coreIdeas.map((idea) => (
                            <li key={idea} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              {idea}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-muted/30 rounded-lg p-4">
                        <div className="flex items-center gap-2 text-secondary mb-2">
                          <Target className="w-4 h-4" />
                          <span className="font-medium text-sm">Real-World Usage</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{topic.realWorldUsage}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 flex-wrap">
                      <Wrench className="w-4 h-4 text-muted-foreground" />
                      {topic.tools.map((tool) => (
                        <span key={tool} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
