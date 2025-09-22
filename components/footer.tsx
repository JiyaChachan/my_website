import { Github, Linkedin, Twitter, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Left side - Copyright */}
            <div className="text-center md:text-left">
              <p className="text-muted-foreground flex items-center justify-center md:justify-start gap-2">
                © 2024 Sarah Johnson. Made with
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                and lots of coffee.
              </p>
            </div>

            {/* Right side - Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground mr-2">Follow me:</span>
              <Button variant="ghost" size="sm" className="p-2 hover:text-primary">
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:text-primary">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:text-primary">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
