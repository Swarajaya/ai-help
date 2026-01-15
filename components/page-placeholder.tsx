import { Brain } from "lucide-react"

interface PagePlaceholderProps {
  title: string
  description?: string
}

export function PagePlaceholder({ title, description }: PagePlaceholderProps) {
  return (
    <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
      <div className="text-center">
        <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center glass">
          <Brain className="w-10 h-10 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{title}</h1>
        {description && <p className="text-muted-foreground text-lg max-w-md mx-auto">{description}</p>}
        <div className="mt-8 flex items-center justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" style={{ animationDelay: "150ms" }} />
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" style={{ animationDelay: "300ms" }} />
        </div>
      </div>
    </div>
  )
}
