"use client"

import { useState } from "react"
import Link from "next/link"
import { projects, difficultyColors } from "@/lib/projects-data"
import { FolderGit2, Clock, Tag, Filter, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const difficulties = ["all", "beginner", "intermediate", "advanced", "expert"] as const

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all")

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesDifficulty = selectedDifficulty === "all" || project.difficulty === selectedDifficulty

    return matchesSearch && matchesDifficulty
  })

  return (
    <main className="min-h-screen pt-16">
      {/* Header */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-10 left-1/3 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-20 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <FolderGit2 className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">{projects.length}+ AI Projects</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">AI Projects</span>
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Hands-on projects to build your AI skills. From beginner-friendly tutorials to expert-level challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 border-y border-border bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background border-border"
              />
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="w-4 h-4 text-muted-foreground" />
              {difficulties.map((difficulty) => (
                <Button
                  key={difficulty}
                  variant={selectedDifficulty === difficulty ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedDifficulty(difficulty)}
                  className={
                    selectedDifficulty === difficulty
                      ? "bg-primary text-primary-foreground"
                      : "bg-transparent border-border hover:bg-muted/50"
                  }
                >
                  {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4">
          <div className="mb-6 text-muted-foreground">
            Showing {filteredProjects.length} of {projects.length} projects
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="group glass rounded-xl p-6 hover:border-primary/30 transition-all hover:bg-muted/20"
              >
                <div className="flex items-start justify-between mb-3">
                  <span
                    className={`text-xs px-2 py-1 rounded-full font-medium ${difficultyColors[project.difficulty]}`}
                  >
                    {project.difficulty.charAt(0).toUpperCase() + project.difficulty.slice(1)}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <span>{project.estimatedHours}h</span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{project.description}</p>

                <div className="text-xs text-primary mb-3">{project.domain}</div>

                <div className="flex items-center gap-2 flex-wrap">
                  <Tag className="w-3 h-3 text-muted-foreground" />
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No projects found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
