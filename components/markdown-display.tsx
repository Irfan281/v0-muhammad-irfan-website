"use client"

import { useEffect, useRef } from "react"

interface MarkdownDisplayProps {
  content: string
}

export function MarkdownDisplay({ content }: MarkdownDisplayProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Scroll to top when content changes
    window.scrollTo(0, 0)
  }, [content])

  // Simple formatting for markdown content
  const formattedContent = content
    // Format headings
    .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>')
    .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mt-6 mb-3">$1</h2>')
    // Format bold text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    // Format list items
    .replace(/^- (.*$)/gm, '<li class="ml-6 mb-1">$1</li>')
    // Format paragraphs (lines that aren't headings or list items)
    .replace(/^(?!<h|<li)(.*$)/gm, (match) => {
      if (match.trim() === "") return '<div class="h-4"></div>'
      return `<p class="mb-4">${match}</p>`
    })
    // Wrap adjacent list items in ul tags
    .replace(/<li(.*?)(?=<li|<h|<p|<div|$)/gs, '<ul class="list-disc mb-4 space-y-2"><li$1</ul>')

  return <div ref={containerRef} className="markdown-content" dangerouslySetInnerHTML={{ __html: formattedContent }} />
}
