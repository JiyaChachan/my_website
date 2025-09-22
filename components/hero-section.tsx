"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
                {"Hi, I'm "}
                <span className="text-primary">Jiya Chachan</span>
              </h1>
              <h2 className="text-xl sm:text-2xl text-muted-foreground font-medium">Data Scientist</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                I transform complex data into actionable insights that drive business decisions. With expertise in
                machine learning, statistical analysis, and data visualization, I help organizations unlock the power of
                their data.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => scrollToSection("projects")} className="text-lg px-8 py-3">
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="text-lg px-8 py-3"
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Right Content - Professional Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <Image
                  src="/data-scientist-headshot.png"
                  alt="Jiya Chachan - Professional Photo"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}