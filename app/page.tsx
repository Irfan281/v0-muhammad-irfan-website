import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { HeroAnimation } from "@/components/hero-animation"
import { BentoGrid } from "@/components/bento-grid"
import { ResumeSection } from "@/components/resume-section"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative w-full overflow-hidden bg-black py-20 md:py-32">
        <div className="absolute inset-0 z-0">
          <HeroAnimation />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6">
          <ScrollAnimation>
            <div className="flex flex-col items-center justify-center text-center min-h-[70vh] flex-1">
              <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Muhammad Irfan
              </h1>
              <p className="mt-4 max-w-3xl text-xl text-green-300">
                Android Developer with 2+ years of expertise in building robust and high-quality mobile applications
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button asChild className="bg-green-600 hover:bg-green-700">
                  <a href="#portfolio">
                    View Portfolio <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-green-600 text-green-300 hover:bg-green-950/50">
                  <a href="#contact">Contact Me</a>
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <Link href="https://github.com/irfan281" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-green-300 hover:text-green-100 hover:bg-green-950/50"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://linkedin.com/in/irfan281" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-green-300 hover:text-green-100 hover:bg-green-950/50"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="mailto:hi.irfan@outlook.com">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-green-300 hover:text-green-100 hover:bg-green-950/50"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <ScrollAnimation>
              <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            </ScrollAnimation>
            <ScrollAnimation delay={0.2}>
              <div className="rounded-xl bg-black/50 p-6 backdrop-blur-lg">
                <p className="text-lg leading-relaxed text-gray-200">
                  Meet Muhammad Irfan, an experienced Android Developer with 2+ years of expertise in building robust
                  and high-quality mobile applications. Currently at PT Phincon, he contributes to MyTelkomsel Indihome,
                  optimizing performance and user experience with Clean Architecture. Proficient in Kotlin and Jetpack
                  libraries, he focuses on developing scalable, maintainable, and efficient applications.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-semibold text-green-300">Tech Stack</h3>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
                  <div className="flex flex-col items-center justify-center rounded-lg border border-gray-800 bg-black/20 p-4 transition-all hover:border-green-600/30 hover:bg-black/30">
                    <div className="relative h-12 w-12 mb-2">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        alt="Kotlin logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-200">Kotlin</span>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-lg border border-gray-800 bg-black/20 p-4 transition-all hover:border-green-600/30 hover:bg-black/30">
                    <div className="relative h-12 w-12 mb-2">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        alt="Android logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-200">Android</span>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-lg border border-gray-800 bg-black/20 p-4 transition-all hover:border-green-600/30 hover:bg-black/30">
                    <div className="relative h-12 w-12 mb-2">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        alt="Jetpack Compose logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-200">Jetpack Compose</span>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-lg border border-gray-800 bg-black/20 p-4 transition-all hover:border-green-600/30 hover:bg-black/30">
                    <div className="relative h-12 w-12 mb-2">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        alt="MVVM architecture logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-200">MVVM</span>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-lg border border-gray-800 bg-black/20 p-4 transition-all hover:border-green-600/30 hover:bg-black/30">
                    <div className="relative h-12 w-12 mb-2">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        alt="Clean Architecture logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-200">Clean Architecture</span>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-lg border border-gray-800 bg-black/20 p-4 transition-all hover:border-green-600/30 hover:bg-black/30">
                    <div className="relative h-12 w-12 mb-2">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        alt="Kotlin Coroutines logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-200">Kotlin Coroutines</span>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-lg border border-gray-800 bg-black/20 p-4 transition-all hover:border-green-600/30 hover:bg-black/30">
                    <div className="relative h-12 w-12 mb-2">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        alt="Dagger Hilt logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-200">Dagger Hilt</span>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-lg border border-gray-800 bg-black/20 p-4 transition-all hover:border-green-600/30 hover:bg-black/30">
                    <div className="relative h-12 w-12 mb-2">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        alt="Retrofit logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-200">Retrofit</span>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-lg border border-gray-800 bg-black/20 p-4 transition-all hover:border-green-600/30 hover:bg-black/30">
                    <div className="relative h-12 w-12 mb-2">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        alt="Room Database logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-200">Room</span>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-lg border border-gray-800 bg-black/20 p-4 transition-all hover:border-green-600/30 hover:bg-black/30">
                    <div className="relative h-12 w-12 mb-2">
                      <Image src="/placeholder.svg?height=48&width=48" alt="Git logo" fill className="object-contain" />
                    </div>
                    <span className="text-sm font-medium text-gray-200">Git</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6">
          <ScrollAnimation>
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              My Projects
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={0.2}>
            <BentoGrid />
          </ScrollAnimation>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <ScrollAnimation>
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Resume</h2>
          </ScrollAnimation>
          <ScrollAnimation delay={0.2}>
            <ResumeSection />
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <ScrollAnimation>
              <h2 className="mb-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
            </ScrollAnimation>
            <ScrollAnimation delay={0.2}>
              <div className="rounded-xl bg-black/50 p-6 backdrop-blur-lg">
                <p className="mb-6 text-lg text-gray-200">
                  Interested in working together? Feel free to reach out through any of the following channels:
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Button asChild className="bg-green-600 hover:bg-green-700">
                    <Link href="mailto:hi.irfan@outlook.com">
                      <Mail className="mr-2 h-4 w-4" /> hi.irfan@outlook.com
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-green-600 text-green-300 hover:bg-green-950/50">
                    <Link href="https://wa.me/62895611088149" target="_blank" rel="noopener noreferrer">
                      +62 895 6110 88149
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-green-600 text-green-300 hover:bg-green-950/50">
                    <Link href="https://linkedin.com/in/irfan281" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-green-600 text-green-300 hover:bg-green-950/50">
                    <Link href="https://github.com/irfan281" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </Link>
                  </Button>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black py-6">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} Muhammad Irfan. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="https://github.com/irfan281" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/irfan281" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:hi.irfan@outlook.com">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
