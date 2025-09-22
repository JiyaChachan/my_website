"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-primary">Sarah Johnson</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-primary transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-foreground hover:text-primary transition-colors duration-200"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-foreground hover:text-primary transition-colors duration-200"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-t border-border">
              <button
                onClick={() => scrollToSection("about")}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 w-full text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 w-full text-left"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 w-full text-left"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 w-full text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
