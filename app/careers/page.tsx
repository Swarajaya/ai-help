"use client"

import { useState } from "react"
import { careers, demandColors, experienceLabels } from "@/lib/careers-data"
import { Briefcase, DollarSign, TrendingUp, Search, Filter, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const categories = [
  "all",
  "Data Science & Analytics",
  "AI/ML Research",
  "Engineering",
  "Product & Strategy",
  "Specialized",
  "Industry-Specific",
  "Leadership",
]

export default function CareersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredCareers = careers.filter((career) => {
    const matchesSearch =
      career.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      career.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      career.skills.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesCategory = selectedCategory === "all" || career.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const groupedCareers = filteredCareers.reduce(
    (acc, career) => {
      if (!acc[career.category]) {
        acc[career.category] = []
      }
      acc[career.category].push(career)
      return acc
    },
    {} as Record<string, typeof careers>,
  )

  return (
    <main className="min-h-screen pt-16">
      {/* Header */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-10 right-1/3 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">{careers.length}+ AI Career Paths</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">AI Careers</span>
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Explore career paths in artificial intelligence. From entry-level positions to executive roles, find your
              path in the AI industry.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 border-y border-border bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-4">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search careers or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background border-border"
              />
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="w-4 h-4 text-muted-foreground" />
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-transparent border-border hover:bg-muted/50"
                  }
                >
                  {category === "all" ? "All" : category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Careers List */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4">
          <div className="mb-6 text-muted-foreground">
            Showing {filteredCareers.length} of {careers.length} careers
          </div>

          {Object.entries(groupedCareers).map(([category, categoryJobs]) => (
            <div key={category} className="mb-12 last:mb-0">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                {category}
                <span className="text-sm font-normal text-muted-foreground">({categoryJobs.length})</span>
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {categoryJobs.map((career) => (
                  <div
                    key={career.id}
                    className="glass rounded-xl p-5 hover:border-primary/30 transition-all hover:bg-muted/20"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-foreground">{career.title}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${demandColors[career.demand]}`}>
                        {career.demand === "growing" ? "Growing" : career.demand === "high" ? "High Demand" : "Medium"}
                      </span>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4">{career.description}</p>

                    <div className="flex items-center gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-1 text-accent">
                        <DollarSign className="w-4 h-4" />
                        <span>{career.salaryRange}</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <TrendingUp className="w-4 h-4" />
                        <span>{experienceLabels[career.experience]}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 flex-wrap">
                      {career.skills.map((skill) => (
                        <span key={skill} className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {filteredCareers.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No careers found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
