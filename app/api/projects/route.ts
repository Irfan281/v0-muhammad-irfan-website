import { NextResponse } from "next/server"
import { getAllProjects, getFallbackProjects } from "@/lib/mdx"

export async function GET() {
  try {
    const projects = await getAllProjects()

    // Ensure we're returning an array
    if (!Array.isArray(projects) || projects.length === 0) {
      console.warn("No projects found, returning fallback data")
      return NextResponse.json(getFallbackProjects())
    }

    return NextResponse.json(projects)
  } catch (error) {
    console.error("Error fetching projects:", error)
    // Return fallback data on error
    return NextResponse.json(getFallbackProjects())
  }
}
