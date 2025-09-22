"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Star } from "lucide-react"

interface Feedback {
  id: string
  name: string
  message: string
  rating: number
  created_at: string
}

export function FeedbackSection() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    rating: 5,
  })
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    // Mock existing feedback - replace with Supabase fetch later
    const mockFeedbacks: Feedback[] = [
      {
        id: "1",
        name: "John Doe",
        message: "Great work on the portfolio! The design is clean and professional.",
        rating: 5,
        created_at: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
      },
      {
        id: "2",
        name: "Jane Smith",
        message: "Love the interactive elements and smooth animations. Very impressive!",
        rating: 4,
        created_at: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
      },
    ]
    setFeedbacks(mockFeedbacks)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const newFeedback: Feedback = {
      id: Date.now().toString(), // Use UUID in production with Supabase
      name: formData.name,
      message: formData.message,
      rating: formData.rating,
      created_at: new Date().toISOString(),
    }

    // TODO: Replace with Supabase insert
    // const { data, error } = await supabase
    //   .from('feedback')
    //   .insert([newFeedback])

    setFeedbacks((prev) => [newFeedback, ...prev])

    // Reset form
    setFormData({ name: "", message: "", rating: 5 })
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.type === "number" ? Number.parseInt(e.target.value) : e.target.value
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: value,
    }))
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
    ))
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <section id="feedback" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-balance">Feedback</h2>

          <Card className="border-border mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground">Share Your Feedback</CardTitle>
              <CardDescription>I'd love to hear your thoughts about my work and website!</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Feedback Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Share your thoughts, suggestions, or comments..."
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="border-border resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="rating">Rating (1-5 stars)</Label>
                  <div className="flex items-center space-x-4">
                    <Input
                      id="rating"
                      name="rating"
                      type="number"
                      min="1"
                      max="5"
                      value={formData.rating}
                      onChange={handleChange}
                      required
                      className="border-border w-20"
                    />
                    <div className="flex space-x-1">{renderStars(formData.rating)}</div>
                  </div>
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Feedback"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Recent Feedback</h3>

            {feedbacks.length === 0 ? (
              <Card className="border-border">
                <CardContent className="py-8 text-center">
                  <p className="text-muted-foreground">No feedback yet. Be the first to share your thoughts!</p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-6">
                {feedbacks.map((feedback) => (
                  <Card key={feedback.id} className="border-border">
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="font-semibold text-foreground">{feedback.name}</h4>
                          <div className="flex items-center space-x-2 mt-1">
                            <div className="flex space-x-1">{renderStars(feedback.rating)}</div>
                            <span className="text-sm text-muted-foreground">({feedback.rating}/5)</span>
                          </div>
                        </div>
                        <span className="text-sm text-muted-foreground">{formatDate(feedback.created_at)}</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{feedback.message}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
