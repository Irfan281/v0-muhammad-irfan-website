import fs from "fs"
import path from "path"
import matter from "gray-matter"

// Define the project metadata type
export type ProjectMeta = {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  github?: string
  liveUrl?: string
}

// Define the project type with content
export type Project = ProjectMeta & {
  content: string // Changed to string instead of React.ReactNode
}

// Path to the projects directory
const projectsDirectory = path.join(process.cwd(), "content/projects")

// Get all project files
export async function getProjectFiles(): Promise<string[]> {
  try {
    // Check if directory exists first
    if (!fs.existsSync(projectsDirectory)) {
      console.warn(`Projects directory not found: ${projectsDirectory}`)
      return []
    }

    return fs.readdirSync(projectsDirectory).filter((file) => file.endsWith(".mdx"))
  } catch (error) {
    console.error("Error reading project files:", error)
    return []
  }
}

// Get all projects metadata
export async function getAllProjects(): Promise<ProjectMeta[]> {
  const projectFiles = await getProjectFiles()

  if (projectFiles.length === 0) {
    // Return fallback data if no files found
    return getFallbackProjects()
  }

  const projects = await Promise.all(
    projectFiles.map(async (fileName) => {
      const id = fileName.replace(/\.mdx$/, "")
      try {
        const filePath = path.join(projectsDirectory, fileName)
        const fileContent = fs.readFileSync(filePath, "utf8")
        const { data } = matter(fileContent)

        return {
          id,
          title: data.title || "Untitled Project",
          description: data.description || "",
          image: data.image || "/placeholder.svg",
          tags: Array.isArray(data.tags) ? data.tags : [],
          github: data.github,
          liveUrl: data.liveUrl,
        }
      } catch (error) {
        console.error(`Error processing project ${id}:`, error)
        // Return a minimal valid project object on error
        return {
          id,
          title: id,
          description: "Project details unavailable",
          image: "/placeholder.svg",
          tags: ["Error"],
        }
      }
    }),
  )

  return projects
}

// Get a project by ID
export async function getProjectById(id: string): Promise<Project> {
  const filePath = path.join(projectsDirectory, `${id}.mdx`)

  try {
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      throw new Error(`Project file not found: ${filePath}`)
    }

    const fileContent = fs.readFileSync(filePath, "utf8")
    const { data, content } = matter(fileContent)

    return {
      id,
      title: data.title || "Untitled Project",
      description: data.description || "",
      image: data.image || "/placeholder.svg",
      tags: Array.isArray(data.tags) ? data.tags : [],
      github: data.github,
      liveUrl: data.liveUrl,
      content: content, // Just return the raw markdown content
    }
  } catch (error) {
    console.error(`Error reading project ${id}:`, error)

    // Get fallback project data
    const fallbackProjects = getFallbackProjects()
    const fallbackProject = fallbackProjects.find((p) => p.id === id)

    if (fallbackProject) {
      return {
        ...fallbackProject,
        content: "Project content could not be loaded. Please try again later.",
      }
    }

    throw new Error(`Project with id ${id} not found`)
  }
}

// Fallback projects data
export function getFallbackProjects(): ProjectMeta[] {
  return [
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
}
