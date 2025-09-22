import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export function ProjectsSection() {
  const projects = [
    {
      title: "E-commerce Store",
      description:
        "A modern, responsive e-commerce platform built with Next.js and Stripe integration. Features include product catalog, shopping cart, and secure checkout.",
      image: "/placeholder-t154r.png",
      technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Restaurant Website",
      description:
        "An elegant restaurant website with online reservation system, menu showcase, and location details. Optimized for mobile and desktop experiences.",
      image: "/elegant-restaurant-website-with-menu-and-reservati.jpg",
      technologies: ["React", "Node.js", "MongoDB", "CSS3"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Portfolio Blog",
      description:
        "A personal blog platform with content management system, SEO optimization, and social sharing features. Built for performance and accessibility.",
      image: "/placeholder-4iai5.png",
      technologies: ["Gatsby", "GraphQL", "Contentful", "Styled Components"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-balance">My Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2 text-card-foreground">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </CardDescription>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0 flex gap-3">
                  <Button variant="default" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                  <Button variant="outline" size="sm">
                    <Github className="w-4 h-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
