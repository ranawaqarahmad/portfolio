"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, Menu } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

interface MobileMenuProps {
  links: {
    href: string
    label: string
  }[]
}

export function MobileMenu({ links }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  // Close the menu when the screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Toggle menu"
        className="transition-transform duration-300 hover:scale-110"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        aria-hidden={!isOpen}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile menu panel */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-3/4 max-w-sm bg-background p-6 shadow-lg transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between mb-8">
          <p className="font-semibold text-lg">Menu</p>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="transition-transform duration-300 hover:scale-110"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
        </div>

        <nav className="space-y-6">
          <ul className="space-y-4">
            {links.map((link, index) => (
              <li
                key={link.href}
                style={{
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? "translateX(0)" : "translateX(20px)",
                  transition: `opacity 0.3s ease, transform 0.3s ease ${index * 0.1}s`,
                }}
              >
                <a
                  href={link.href}
                  className="block py-2 text-lg hover:text-primary transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="pt-6 border-t">
            <p className="text-sm text-muted-foreground mb-4">Get in touch</p>
            <div className="space-y-3">
              <Button
                className="w-full justify-start transition-transform duration-300 hover:translate-x-1"
                variant="outline"
                asChild
              >
                <a href="mailto:hello@example.com">hello@example.com</a>
              </Button>
              <Button
                className="w-full justify-start transition-transform duration-300 hover:translate-x-1"
                variant="outline"
                asChild
              >
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </Button>
              <Button
                className="w-full justify-start transition-transform duration-300 hover:translate-x-1"
                variant="outline"
                asChild
              >
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
