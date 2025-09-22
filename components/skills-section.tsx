export function SkillsSection() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript"],
    },
    {
      category: "Design Tools",
      skills: ["Figma", "Photoshop", "Sketch", "Adobe XD"],
    },
    {
      category: "Backend & Tools",
      skills: ["Node.js", "Git", "WordPress", "MongoDB"],
    },
  ]

  const allSkills = skillCategories.flatMap((category) =>
    category.skills.map((skill) => ({ skill, category: category.category })),
  )

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-balance">Skills & Technologies</h2>

          {/* Skills by Category */}
          <div className="space-y-12 mb-16">
            {skillCategories.map((category, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold text-foreground mb-6">{category.category}</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 bg-card text-card-foreground rounded-full border border-border hover:border-primary hover:bg-primary/5 transition-all duration-200 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* All Skills Mixed */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-foreground mb-6">All Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {allSkills.map((item, index) => (
                <span
                  key={index}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-200 hover:scale-105 ${
                    item.category === "Frontend"
                      ? "bg-primary text-primary-foreground"
                      : item.category === "Design Tools"
                        ? "bg-accent text-accent-foreground"
                        : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  {item.skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
