"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight, Github } from "lucide-react"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import type { ProjectMeta } from "@/lib/mdx"
import { ScrollAnimation } from "@/components/scroll-animation"

// Fallback projects data in case API fails
const fallbackProjects: ProjectMeta[] = [
  {
    id: "nanamyuk",
    title: "NANAMYUK",
    description: "Plant watering management and recommender app",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Android", "Kotlin", "Retrofit", "REST API"],
    github: "https://github.com/irfan281/NanamYuk",
  },
  {
    id: "story-app",
    title: "STORY APP",
    description: "Instagram-like image-sharing application",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Android", "Kotlin", "Google Maps API", "Location"],
    github: "https://github.com/irfan281/StoryApp",
  },
  {
    id: "biodiversity",
    title: "Biodiversity Information System",
    description: "Android app for biodiversity information",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Android", "Kotlin", "Express.js", "MVVM"],
  },
  {
    id: "tsunami-mitigation",
    title: "Tsunami Mitigation App",
    description: "App to display tsunami mitigation places",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Android", "Kotlin", "Maps", "GIS"],
  },
]

export function BentoGrid() {
  const [projects, setProjects] = useState<ProjectMeta[]>(fallbackProjects)
  const [selectedProject, setSelectedProject] = useState<ProjectMeta | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch("/api/projects")

        if (!response.ok) {
          throw new Error(`API returned status: ${response.status}`)
        }

        const data = await response.json()

        // Validate that data is an array
        if (Array.isArray(data) && data.length > 0) {
          setProjects(data)
        } else {
          console.warn("API returned empty or invalid data, using fallback projects")
          // Keep using fallback projects if API returns invalid data
        }
      } catch (error) {
        console.error("Error fetching projects:", error)
        setError("Failed to load projects. Using default data instead.")
        // Keep using fallback projects on error
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4].map((i) => (
          <Card key={i} className="overflow-hidden border-gray-800 bg-black/50 backdrop-blur-sm">
            <div className="relative h-48 w-full overflow-hidden bg-gray-900 animate-pulse"></div>
            <CardHeader className="p-4">
              <div className="h-6 w-2/3 bg-gray-800 rounded animate-pulse mb-2"></div>
              <div className="h-4 w-full bg-gray-800 rounded animate-pulse"></div>
            </CardHeader>
            <CardFooter className="flex flex-wrap gap-2 p-4 pt-0">
              <div className="h-6 w-16 bg-gray-800 rounded animate-pulse"></div>
              <div className="h-6 w-20 bg-gray-800 rounded animate-pulse"></div>
            </CardFooter>
          </Card>
        ))}
      </div>
    )
  }

  if (error) {
    // Show error message but still render projects from fallback data
    console.warn(error)
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ScrollAnimation key={project.id} delay={index * 0.1}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="cursor-pointer"
            >
              <Link href={`/portfolio/${project.id}`}>
                <Card className="overflow-hidden border-gray-800 bg-black/50 backdrop-blur-sm transition-all hover:border-green-600">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardHeader className="p-4">
                    <CardTitle className="flex items-center justify-between">
                      <span>{project.title}</span>
                      <ArrowUpRight className="h-4 w-4 text-green-400" />
                    </CardTitle>
                    <CardDescription className="text-gray-400">{project.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="flex flex-wrap gap-2 p-4 pt-0">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-green-800 bg-green-950/30 text-green-300">
                        {tag}
                      </Badge>
                    ))}
                  </CardFooter>
                </Card>
              </Link>
            </motion.div>
          </ScrollAnimation>
        ))}
      </div>

      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-h-[90vh] overflow-y-auto border-gray-800 bg-black/90 backdrop-blur-xl sm:max-w-2xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-white">{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-gray-400">{selectedProject.description}</DialogDescription>
              </DialogHeader>
              <div className="relative mt-4 h-64 w-full overflow-hidden rounded-lg sm:h-80">
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="border-green-800 bg-green-950/30 text-green-300">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="mt-6 flex gap-4">
                <Button asChild className="bg-green-600 hover:bg-green-700">
                  <Link href={`/portfolio/${selectedProject.id}`}>
                    <ArrowUpRight className="mr-2 h-4 w-4" /> View Details
                  </Link>
                </Button>
                {selectedProject.github && (
                  <Button asChild className="bg-gray-800 hover:bg-gray-700">
                    <Link href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </Link>
                  </Button>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
