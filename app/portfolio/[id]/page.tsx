import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Github, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getProjectById } from "@/lib/mdx"
import { MarkdownDisplay } from "@/components/markdown-display"

export default async function ProjectPage({ params }: { params: { id: string } }) {
  try {
    const project = await getProjectById(params.id)

    return (
      <div className="container mx-auto px-4 py-24 sm:px-6 md:py-32">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8">
            <Button asChild variant="ghost" className="mb-4 text-green-300 hover:text-green-100 hover:bg-green-950/50">
              <Link href="/#portfolio">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
              </Link>
            </Button>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{project.title}</h1>
            <p className="mt-4 text-xl text-gray-400">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="border-green-800 bg-green-950/30 text-green-300">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="relative mb-12 h-64 w-full overflow-hidden rounded-lg sm:h-96">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>

          <div className="mb-8 flex gap-4">
            {project.github && (
              <Button asChild className="bg-gray-800 hover:bg-gray-700">
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> View on GitHub
                </Link>
              </Button>
            )}
            {project.liveUrl && (
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ArrowUpRight className="mr-2 h-4 w-4" /> Live Demo
                </Link>
              </Button>
            )}
          </div>

          <div className="prose prose-invert max-w-none prose-headings:text-green-300 prose-a:text-green-300">
            <MarkdownDisplay content={project.content} />
          </div>
        </div>
      </div>
    )
  } catch (error) {
    console.error(`Error loading project: ${error}`)
    notFound()
  }
}
