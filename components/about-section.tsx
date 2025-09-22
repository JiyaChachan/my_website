export function AboutSection() {
  const interests = [
    { icon: "☕", text: "Coffee" },
    { icon: "📸", text: "Photography" },
    { icon: "✈️", text: "Travel" },
    { icon: "💻", text: "Coding" },
  ]

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-balance">About Me</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - About Text */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                With over 5 years of experience in web development and design, I specialize in creating digital
                experiences that are both visually stunning and highly functional. My journey began with a fascination
                for how design and technology could work together to solve real-world problems.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                I believe that great websites are born from the perfect balance of beautiful design, clean code, and
                user-centered thinking. Whether it's a sleek corporate website or a dynamic web application, I approach
                every project with creativity, attention to detail, and a commitment to excellence.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                When I'm not coding or designing, you'll find me exploring new technologies, contributing to open-source
                projects, or mentoring aspiring developers in my local community.
              </p>
            </div>

            {/* Right Column - Interests */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground">What I Enjoy</h3>

              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 bg-card rounded-lg border border-border hover:shadow-md transition-shadow duration-200"
                  >
                    <span className="text-2xl">{interest.icon}</span>
                    <span className="text-lg font-medium text-card-foreground">{interest.text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
                <h4 className="text-lg font-semibold text-primary mb-3">Let's Work Together</h4>
                <p className="text-muted-foreground leading-relaxed">
                  I'm always excited to take on new challenges and collaborate with passionate people. If you have a
                  project in mind or just want to chat about web development, I'd love to hear from you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
