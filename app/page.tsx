import { Github, Mail, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileMenu } from "@/components/mobile-menu"
import { AnimateInView } from "@/components/animate-in-view"
import { FloatingDots } from "@/components/floating-dots"

export default function Home() {
  const currentYear = new Date().getFullYear();
  // Organized skills by category
  const skillsByCategory = {
    Frontend: ["JavaScript", "TypeScript", "React", "Nextjs", "HTML5", "CSS3", "Tailwind CSS"],
    Backend: ["Nodejs", "Nestjs" ,"Express", "MongoDB", "PostgreSQL", "REST API", "GraphQL", "Firebase"],
    Shopify: ["Shopify App Development", "Theme Customization", "Shopify Admin API's"],
    Other: ["Git", "AWS", "Wordpress", "Big-Commerce"],
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-semibold">Portfolio</div>
          <nav className="hidden md:block">
            <ul className="flex gap-6">
              <li>
                <a href="#about" className="hover:text-primary transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary transition-colors duration-200">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            <MobileMenu
              links={[
                { href: "#about", label: "About" },
                { href: "#projects", label: "Projects" },
                { href: "#contact", label: "Contact" },
              ]}
            />
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <FloatingDots />
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <AnimateInView variant="slide-up" className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Hi, I'm <span className="text-primary dark:text-primary">Waqar Ahmad</span>
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  A passionate full-stack developer specializing in building exceptional digital experiences.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild className="transition-transform hover:translate-y-[-2px]">
                  <a href="#contact">Get in Touch</a>
                </Button>
                <Button variant="outline" asChild className="transition-transform hover:translate-y-[-2px]">
                  <a href="#projects">View My Work</a>
                </Button>
              </div>
            </AnimateInView>
            <AnimateInView variant="fade-in" delay={200} className="flex justify-center">
              <div className="relative h-[300px] w-[300px] overflow-hidden rounded-full border-4 border-primary/20 dark:border-primary/20">
                <Image
                  src="./hero-image.svg?height=600&width=600"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </AnimateInView>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-muted/50 py-12 md:py-24 lg:py-32">
          <div className="container space-y-12">
            <AnimateInView variant="slide-up" className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                I build accessible, responsive, and functional websites and applications.
              </p>
            </AnimateInView>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <AnimateInView variant="slide-in-right" delay={100}>
                <p className="mb-4">
                  With over 3 years of experience in web development, I've worked on a variety of projects from small
                  business websites to complex enterprise applications. I'm passionate about creating clean, efficient
                  code and intuitive user experiences.
                </p>
                <p>
                  When I'm not coding, you can find me hiking, reading, or experimenting with new technologies. I
                  believe in continuous learning and staying updated with the latest industry trends.
                </p>
              </AnimateInView>
              <AnimateInView variant="slide-in-right" delay={300} className="space-y-6">
                <h3 className="text-xl font-bold">My Skills</h3>

                {/* Skills by category */}
                <div className="space-y-6">
                  {Object.entries(skillsByCategory).map(([category, skills], categoryIndex) => (
                    <div key={category} className="space-y-3">
                      <h4 className="text-lg font-medium flex items-center">
                        <span className="inline-block w-8 h-[2px] bg-primary mr-3"></span>
                        {category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill, index) => (
                          <div
                            key={skill}
                            className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary transition-all duration-300 hover:bg-primary/20 hover:scale-105"
                            style={{
                              transitionDelay: `${index * 50 + categoryIndex * 100}ms`,
                              animationDelay: `${index * 50 + categoryIndex * 100}ms`,
                            }}
                          >
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </AnimateInView>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="container space-y-12">
            <AnimateInView variant="slide-up" className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Here are some of my recent projects. Each one was built with care and attention to detail.
              </p>
            </AnimateInView>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "IDB Banks Website",
                  description: "A multilingual, responsive banking website featuring RTL support and optimized for performance.",
                  tags: ["Nextjs", "Tailwind", "TypeScript"],
                  image: "idb-mock.png"
                },
                {
                  title: "CZ Store – eCommerce Platform",
                  description: "A modern eCommerce storefront integrated seamlessly with BigCommerce APIs for dynamic product and cart management.",
                  tags: ["Nextjs", "Tailwind", "TypeScript", "BigCommerce API's"],
                  image: "czstore-mock.png"
                },
                {
                  title: "Universal Product Feed",
                  description: "A Shopify app that syncs product and collection data to Facebook Google via GraphQL APIs scalable backend operations.",
                  tags: ["Reactjs", "Nodejs", "Shopify Admin API's"],
                  image: "feed-mock.png"
                },
                {
                  title: "Pushbot – Web Push Notification",
                  description: "A full-featured Shopify app that enables merchants to create & send push notification campaigns to segmented subscriber groups.",
                  tags: ["Reactjs", "Nodejs", "Shopify Admin API's"],
                  image: "pushbot-mock.png"
                },
                {
                  title: "Mailbot – Email Campaigns",
                  description: "A Shopify app that enables merchants to send personalized eamil campaigns & automated email's to subscribers using event triggers.",
                  tags: ["Reactjs", "Nodejs", "Shopify Admin API's"],
                  image: "mailbot-mock.png"
                },
              ].map((project, index) => (
                <AnimateInView key={index} variant="scale-in" delay={index * 100} duration={600}>
                  <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px]">
                    <div className="aspect-video w-full bg-muted overflow-hidden">
                      <Image
                        src={`./${project.image}?height=400&width=600&text=Project+${index + 1}`}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                      <p className="mb-4 text-gray-500 dark:text-gray-400">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-primary/10 px-2 py-1 text-xs text-primary transition-colors duration-300 hover:bg-primary/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </AnimateInView>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-muted/50 py-12 md:py-24 lg:py-32">
          <div className="container space-y-12">
            <AnimateInView variant="slide-up" className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Have a project in mind or just want to chat? Feel free to reach out!
              </p>
            </AnimateInView>
            <AnimateInView
              variant="fade-in"
              delay={200}
              className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-4 md:flex-row"
            >
              <a
                href="mailto:hello@example.com"
                className="flex w-full items-center justify-center gap-2 rounded-lg border bg-background p-4 text-center transition-all duration-300 hover:bg-muted hover:scale-105 md:w-auto"
              >
                <Mail className="h-5 w-5" />
                <span>ranawaqarahmad33@gmail.com</span>
              </a>
              <a
                href="https://github.com/ranawaqarahmad"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-lg border bg-background p-4 text-center transition-all duration-300 hover:bg-muted hover:scale-105 md:w-auto"
              >
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/ranawaqar-ahmad"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-lg border bg-background p-4 text-center transition-all duration-300 hover:bg-muted hover:scale-105 md:w-auto"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>
            </AnimateInView>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
            © {currentYear} Waqar Ahmad. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/ranawaqarahmad"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-transform duration-300 hover:scale-110 hover:text-primary"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/ranawaqar-ahmad"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-transform duration-300 hover:scale-110 hover:text-primary"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:ranawaqarahmad33@gmail.com"
              aria-label="Email"
              className="transition-transform duration-300 hover:scale-110 hover:text-primary"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
