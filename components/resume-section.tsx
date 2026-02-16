/** @jsxImportSource react */
"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollAnimation } from "@/components/scroll-animation"

export function ResumeSection() {
  const [activeTab, setActiveTab] = useState("experience")

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <h3 className="text-xl font-semibold text-green-300">Muhammad Irfan - Android Software Engineer</h3>
        <Button className="bg-green-600 hover:bg-green-700">
          <a href="/CV_Muhammad_Irfan_2026.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <Download className="mr-2 h-4 w-4" /> Download CV
          </a>
        </Button>
      </div>


      <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-8">
        <TabsList className="grid w-full grid-cols-4 bg-black/50 backdrop-blur-sm">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="certifications">Certifications</TabsTrigger>
        </TabsList>

        <TabsContent value="experience" className="mt-4 space-y-4">
          <ScrollAnimation>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Card className="border-gray-800 bg-black/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                    <div>
                      <CardTitle className="text-lg font-bold">BookCabin (Lion Group)</CardTitle>
                      <CardDescription className="text-gray-400">
                        Android Developer | Jul 2025 - Jan 2026
                      </CardDescription>
                    </div>
                    <Badge className="bg-green-600 text-white">Contract</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="ml-6 list-disc space-y-2 text-gray-200">
                    <li>
                      Led end-to-end revamp of the app&apos;s homepage using Kotlin and restructured architecture within a legacy codebase, completing the initiative in one month and improving app performance by 35%.
                    </li>
                    <li>
                      Migrated legacy Data Binding implementations to modern Kotlin-based alternatives, reducing technical debt by 60% and eliminating binding-related crashes entirely.
                    </li>
                    <li>
                      Collaborated with Product, Backend, and QA teams to deliver high-quality features, maintaining a 99% crash-free rate.
                    </li>
                    <li>
                      Implemented a new authentication system with enhanced session handling and refresh tokens, reducing unwanted session expirations by 100%.
                    </li>
                    <li>
                      Managed complete feature lifecycle from technical design to Google Play Console publishing, executing 30 production releases including features and bugfixes.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.1}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="border-gray-800 bg-black/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                    <div>
                      <CardTitle className="text-lg font-bold">PT. Phincon (MyTelkomsel)</CardTitle>
                      <CardDescription className="text-gray-400">
                        Android Developer | Aug 2023 - Jun 2025
                      </CardDescription>
                    </div>
                    <Badge className="bg-green-600 text-white">Full-time</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="ml-6 list-disc space-y-2 text-gray-200">
                    <li>
                      Contributed to MyTelkomsel Android app supporting seamless migration of 1M+ IndiHome users post-merger, achieving 100% successful user transition.
                    </li>
                    <li>
                      Implemented MVVM architecture with Kotlin, Koin DI and multi-module structure, improving codebase scalability and reducing build times by 40%.
                    </li>
                    <li>
                      Collaborated with Solution Architects, Backend teams, and QA to design and deliver 15+ features by analyzing technical specs and integrating APIs.
                    </li>
                    <li>
                      Resolved 50+ critical bugs across QA, staging, and production environments, reducing crash rates significantly.
                    </li>
                    <li>
                      Delivered pixel-perfect UI implementations matching Figma designs, enhancing user satisfaction scores.
                    </li>
                    <li>
                      Integrated third-party SDKs (analytics, payment, authentication) ensuring seamless functionality and maintaining app stability.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="border-gray-800 bg-black/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                    <div>
                      <CardTitle className="text-lg font-bold">Syiah Kuala University - Biology Department</CardTitle>
                      <CardDescription className="text-gray-400">
                        Android & Backend Developer | Aug 2022 - Jun 2023
                      </CardDescription>
                    </div>
                    <Badge className="bg-green-600 text-white">Freelance</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="ml-6 list-disc space-y-2 text-gray-200">
                    <li>
                      Designed and developed a biodiversity information system Android app with Express.js backend from scratch, serving 50+ researchers.
                    </li>
                    <li>
                      Optimized species database by 40% through data cleaning and deduplication, improving query performance by 50%.
                    </li>
                    <li>
                      Implemented MVVM with Kotlin Flow and Dagger-Hilt DI, adopting offline-first architecture with Room database caching.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.3}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="border-gray-800 bg-black/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                    <div>
                      <CardTitle className="text-lg font-bold">
                        Tsunami and Disaster Mitigation Research Center
                      </CardTitle>
                      <CardDescription className="text-gray-400">
                        Android Developer Intern | Jul 2022 - Aug 2022
                      </CardDescription>
                    </div>
                    <Badge className="bg-green-600 text-white">Internship</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="ml-6 list-disc space-y-2 text-gray-200">
                    <li>
                      Developed an Android app from scratch displaying 100+ tsunami mitigation locations across 5 regencies in Aceh within one month.
                    </li>
                    <li>
                      Implemented map integration with custom markers and offline data storage for emergency accessibility.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </ScrollAnimation>
        </TabsContent>

        <TabsContent value="education" className="mt-4">
          <ScrollAnimation>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Card className="border-gray-800 bg-black/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                    <div>
                      <CardTitle className="text-lg font-bold">Syiah Kuala University</CardTitle>
                      <CardDescription className="text-gray-400">
                        Bachelor of Informatics | Banda Aceh, Indonesia
                      </CardDescription>
                    </div>
                    <Badge className="bg-green-600 text-white">GPA: 3.93/4.00</Badge>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          </ScrollAnimation>
        </TabsContent>

        <TabsContent value="skills" className="mt-4">
          <ScrollAnimation>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Card className="border-gray-800 bg-black/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-bold">Technical Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="mb-2 text-sm font-medium text-gray-400">Languages</p>
                      <div className="flex flex-wrap gap-2">
                        {["Kotlin", "Java", "Python", "JavaScript", "PHP", "SQL"].map((s) => (
                          <Badge key={s} variant="secondary" className="bg-black/30 text-green-300">
                            {s}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="mb-2 text-sm font-medium text-gray-400">Android</p>
                      <div className="flex flex-wrap gap-2">
                        {["Android SDK", "Jetpack Components", "MVVM", "Clean Architecture", "Multi-Module"].map((s) => (
                          <Badge key={s} variant="secondary" className="bg-black/30 text-green-300">
                            {s}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="mb-2 text-sm font-medium text-gray-400">Libraries</p>
                      <div className="flex flex-wrap gap-2">
                        {["Koin", "Dagger-Hilt", "Retrofit", "OkHttp", "Room", "Kotlin Flow", "Coroutines"].map((s) => (
                          <Badge key={s} variant="secondary" className="bg-black/30 text-green-300">
                            {s}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="mb-2 text-sm font-medium text-gray-400">APIs & SDKs</p>
                      <div className="flex flex-wrap gap-2">
                        {["REST API Integration", "JSON", "Third-party SDK (Analytics, Payment, Auth)"].map((s) => (
                          <Badge key={s} variant="secondary" className="bg-black/30 text-green-300">
                            {s}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="mb-2 text-sm font-medium text-gray-400">Tools</p>
                      <div className="flex flex-wrap gap-2">
                        {["Android Studio", "Git", "Google Play Console", "Firebase", "Datadog", "Jira", "Figma"].map((s) => (
                          <Badge key={s} variant="secondary" className="bg-black/30 text-green-300">
                            {s}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="mb-2 text-sm font-medium text-gray-400">Practices</p>
                      <div className="flex flex-wrap gap-2">
                        {["Unit Testing", "CI/CD", "Code Review", "Agile/Scrum", "Documentation"].map((s) => (
                          <Badge key={s} variant="secondary" className="bg-black/30 text-green-300">
                            {s}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </ScrollAnimation>
        </TabsContent>

        <TabsContent value="certifications" className="mt-4">
          <ScrollAnimation>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Card className="border-gray-800 bg-black/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-bold">Certifications & Training</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="ml-6 list-disc space-y-4 text-gray-200">
                    <li>
                      <div className="flex flex-col">
                        <span className="font-medium text-white">Bangkit Academy 2022 (Android Mobile Development)</span>
                        <span className="text-gray-400">Distinction Graduate (Top 10% of 3,100 cohort)</span>
                      </div>
                    </li>
                    <li>
                      <div className="flex flex-col">
                        <span className="font-medium text-white">Google Developers Associate Android Developer Certification</span>
                        <span className="text-gray-400">2022 - 2025</span>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </ScrollAnimation>
        </TabsContent>
      </Tabs>
    </div>
  )
}
