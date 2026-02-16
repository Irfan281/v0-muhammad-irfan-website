"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      // Determine which section is currently in view
      const sections = ["home", "about", "portfolio", "resume", "contact"]
      const scrollPosition = window.scrollY + 100 // Offset for better detection

      // Check if we're at the bottom of the page
      const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100

      if (isAtBottom) {
        // If at the bottom, set the active section to contact
        setActiveSection("contact")
        return
      }

      // Otherwise check each section
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    // Trigger once on mount to set initial active section
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Add smooth scroll functionality
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for the fixed header
        behavior: "smooth",
      })
      setIsOpen(false) // Close mobile menu if open
    }
  }

  // Hide navbar on project detail pages
  if (pathname?.startsWith("/portfolio/") && pathname !== "/portfolio") {
    return null
  }

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-black/80 backdrop-blur-lg" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex h-16 items-center justify-center">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-6">
            <a
              href="#home"
              className={cn(
                "text-sm font-medium transition-colors",
                activeSection === "home"
                  ? "text-green-400 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:bg-green-400 after:content-['']"
                  : "text-gray-200 hover:text-green-400",
              )}
              onClick={(e) => scrollToSection(e, "home")}
            >
              Home
            </a>
            <a
              href="#about"
              className={cn(
                "text-sm font-medium transition-colors",
                activeSection === "about"
                  ? "text-green-400 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:bg-green-400 after:content-['']"
                  : "text-gray-200 hover:text-green-400",
              )}
              onClick={(e) => scrollToSection(e, "about")}
            >
              About
            </a>
            <a
              href="#portfolio"
              className={cn(
                "text-sm font-medium transition-colors",
                activeSection === "portfolio"
                  ? "text-green-400 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:bg-green-400 after:content-['']"
                  : "text-gray-200 hover:text-green-400",
              )}
              onClick={(e) => scrollToSection(e, "portfolio")}
            >
              Portfolio
            </a>
            <a
              href="#resume"
              className={cn(
                "text-sm font-medium transition-colors",
                activeSection === "resume"
                  ? "text-green-400 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:bg-green-400 after:content-['']"
                  : "text-gray-200 hover:text-green-400",
              )}
              onClick={(e) => scrollToSection(e, "resume")}
            >
              Resume
            </a>
            <a
              href="#contact"
              className={cn(
                "text-sm font-medium transition-colors",
                activeSection === "contact"
                  ? "text-green-400 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:bg-green-400 after:content-['']"
                  : "text-gray-200 hover:text-green-400",
              )}
              onClick={(e) => scrollToSection(e, "contact")}
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 bg-black/95 px-4 pb-4 pt-2 backdrop-blur-lg">
            <a
              href="#home"
              className={cn(
                "block py-2 text-base font-medium",
                activeSection === "home" ? "text-green-400" : "text-gray-200 hover:text-green-400",
              )}
              onClick={(e) => scrollToSection(e, "home")}
            >
              Home
            </a>
            <a
              href="#about"
              className={cn(
                "block py-2 text-base font-medium",
                activeSection === "about" ? "text-green-400" : "text-gray-200 hover:text-green-400",
              )}
              onClick={(e) => scrollToSection(e, "about")}
            >
              About
            </a>
            <a
              href="#portfolio"
              className={cn(
                "block py-2 text-base font-medium",
                activeSection === "portfolio" ? "text-green-400" : "text-gray-200 hover:text-green-400",
              )}
              onClick={(e) => scrollToSection(e, "portfolio")}
            >
              Portfolio
            </a>
            <a
              href="#resume"
              className={cn(
                "block py-2 text-base font-medium",
                activeSection === "resume" ? "text-green-400" : "text-gray-200 hover:text-green-400",
              )}
              onClick={(e) => scrollToSection(e, "resume")}
            >
              Resume
            </a>
            <a
              href="#contact"
              className={cn(
                "block py-2 text-base font-medium",
                activeSection === "contact" ? "text-green-400" : "text-gray-200 hover:text-green-400",
              )}
              onClick={(e) => scrollToSection(e, "contact")}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
