import { Info, Target, Users, BookOpen, Lightbulb, Globe, Heart } from "lucide-react"

const values = [
  {
    icon: BookOpen,
    title: "Deep Understanding",
    description: "We prioritize conceptual depth over surface-level tutorials, building real expertise.",
  },
  {
    icon: Target,
    title: "Career-Focused",
    description: "Our content is aligned with industry needs and actual job requirements.",
  },
  {
    icon: Users,
    title: "Community-Driven",
    description: "We learn together, share knowledge, and support each other's growth.",
  },
  {
    icon: Lightbulb,
    title: "Practical Application",
    description: "Theory meets practice with hands-on projects and real-world examples.",
  },
]

const stats = [
  { value: "44", label: "AI Domains" },
  { value: "2300+", label: "Projects" },
  { value: "100+", label: "Career Paths" },
  { value: "50K+", label: "Learners" },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-16">
      {/* Header */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-20 right-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Info className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Our Story</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">About AI Project Hub</span>
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              We're building the most comprehensive platform for AI education, focused on deep understanding and
              real-world application.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 border-y border-border bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass rounded-2xl p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                AI Project Hub was founded with a simple belief: understanding AI deeply requires more than watching
                tutorials. It requires structured learning paths, hands-on projects, and a clear connection to
                real-world applications.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We curate and organize AI knowledge across 44 domains, providing learners with a comprehensive roadmap
                from fundamentals to cutting-edge research. Our goal is to make world-class AI education accessible to
                everyone, regardless of their background.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center glass rounded-xl p-6">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at AI Project Hub.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value) => (
              <div key={value.title} className="glass rounded-xl p-6 hover:border-primary/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                  <value.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Note */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center glass rounded-2xl p-8">
            <Heart className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-3">Built with Passion</h3>
            <p className="text-muted-foreground">
              AI Project Hub is built by a team of AI practitioners, researchers, and educators who are passionate about
              making AI knowledge accessible. We're constantly improving and expanding our content based on community
              feedback.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
