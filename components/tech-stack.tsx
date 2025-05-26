"use client"

import Image from "next/image"

const techStackData = [
  { name: "Kotlin", image: "/placeholder.svg?height=48&width=48" },
  { name: "Android", image: "/placeholder.svg?height=48&width=48" },
  { name: "Jetpack Compose", image: "/placeholder.svg?height=48&width=48" },
  { name: "MVVM", image: "/placeholder.svg?height=48&width=48" },
  { name: "Clean Architecture", image: "/placeholder.svg?height=48&width=48" },
  { name: "Kotlin Coroutines", image: "/placeholder.svg?height=48&width=48" },
  { name: "Dagger Hilt", image: "/placeholder.svg?height=48&width=48" },
  { name: "Retrofit", image: "/placeholder.svg?height=48&width=48" },
  { name: "Room Database", image: "/placeholder.svg?height=48&width=48" },
  { name: "Git", image: "/placeholder.svg?height=48&width=48" },
]

export function TechStack() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
      {techStackData.map((tech, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center rounded-lg border border-gray-800 bg-black/20 p-4 transition-all hover:border-green-600/30 hover:bg-black/30"
        >
          <div className="relative mb-2 h-12 w-12">
            <Image src={tech.image || "/placeholder.svg"} alt={`${tech.name} logo`} fill className="object-contain" />
          </div>
          <span className="text-sm font-medium text-gray-200">{tech.name}</span>
        </div>
      ))}
    </div>
  )
}
