"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MessageSquare, Send, MapPin, Clock, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@aiprojecthub.com",
    description: "We respond within 24 hours",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "San Francisco, CA",
    description: "Remote-first team",
  },
  {
    icon: Clock,
    title: "Hours",
    value: "Mon - Fri, 9am - 6pm PST",
    description: "Weekend support available",
  },
]

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
    setIsSubmitted(true)
  }

  return (
    <main className="min-h-screen pt-16">
      {/* Header */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-10 right-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute top-20 left-1/3 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <MessageSquare className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Get in Touch</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Contact Us</span>
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Have questions about AI Project Hub? We'd love to hear from you. Send us a message and we'll respond as
              soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {contactInfo.map((info) => (
              <div key={info.title} className="glass rounded-xl p-5 text-center">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-3">
                  <info.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                <p className="text-primary text-sm mb-1">{info.value}</p>
                <p className="text-xs text-muted-foreground">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="glass rounded-2xl p-6 md:p-8">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="bg-transparent border-border hover:bg-muted/50"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">
                        Name
                      </Label>
                      <Input id="name" placeholder="Your name" required className="bg-background border-border" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                        className="bg-background border-border"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-foreground">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      placeholder="What's this about?"
                      required
                      className="bg-background border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more..."
                      rows={5}
                      required
                      className="bg-background border-border resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 gap-2"
                  >
                    {isLoading ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
