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
        <h3 className="text-xl font-semibold text-green-300">Muhammad Irfan - Android Developer</h3>
        <Button className="bg-green-600 hover:bg-green-700">
          <Download className="mr-2 h-4 w-4" /> Download CV
        </Button>
      </div>

      <ScrollAnimation>
        <Card className="border-gray-800 bg-black/50 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <CardTitle className="text-xl font-bold">Contact Information</CardTitle>
                <CardDescription className="text-gray-400">Get in touch with me</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium text-gray-400">Phone</span>
                <span className="text-gray-200">+62 895 6110 88149</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium text-gray-400">Email</span>
                <span className="text-gray-200">hi.irfan@outlook.com</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium text-gray-400">LinkedIn</span>
                <span className="text-gray-200">linkedin.com/irfan281</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium text-gray-400">GitHub</span>
                <span className="text-gray-200">github.com/irfan281</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </ScrollAnimation>

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
                      <CardTitle className="text-lg font-bold">PT. Phincon</CardTitle>
                      <CardDescription className="text-gray-400">
                        Android Developer | Oct 2023 - Present
                      </CardDescription>
                    </div>
                    <Badge className="bg-green-600 text-white">Full Time</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="ml-6 list-disc space-y-2 text-gray-200">
                    <li>
                      Contributed to the MyTelkomsel Android application as part of the IndiHome team, supporting the
                      seamless migration of over 1 million users after IndiHome was integrated into MyTelkomsel.
                    </li>
                    <li>
                      Implemented MVVM architecture with Koin for dependency injection and adopted a multi-module
                      structure to scale the codebase efficiently, while maintaining a focus on delivering pixel-perfect
                      UI designs.
                    </li>
                    <li>
                      Spearheaded the migration of key IndiHome hero features to Jetpack Compose, boosting development
                      efficiency and enhancing UI consistency across 5 critical user flows.
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
                      <CardTitle className="text-lg font-bold">Department of Biology, Syiah Kuala University</CardTitle>
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
                      Designed and developed an Android biodiversity information system using Kotlin and Express.js for
                      the backend, from scratch.
                    </li>
                    <li>
                      Optimized existing species data by 40% by cleaning up duplicate and unclear entries and
                      successfully implementing them into the system.
                    </li>
                    <li>
                      Utilized the MVVM architecture pattern with Kotlin Flow and dependency injection using
                      Dagger-Hilt, while adopting an offline-first approach by implementing data caching.
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
                      <CardTitle className="text-lg font-bold">
                        Tsunami and Disaster Mitigation Research Center
                      </CardTitle>
                      <CardDescription className="text-gray-400">
                        Android Developer | Jul 2022 - Aug 2022
                      </CardDescription>
                    </div>
                    <Badge className="bg-green-600 text-white">Internship</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="ml-6 list-disc space-y-2 text-gray-200">
                    <li>
                      Completed a solo internship project developing an Android application from scratch to display data
                      on over 100 tsunami mitigation places across 5 regencies in Aceh.
                    </li>
                    <li>
                      Designed the application interface, converted map shape data, and implemented essential features
                      within a one-month timeframe.
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
                      <CardTitle className="text-lg font-bold">Bangkit Academy 2022</CardTitle>
                      <CardDescription className="text-gray-400">
                        Android Mobile Development | Feb 2022 - Jul 2022
                      </CardDescription>
                    </div>
                    <Badge className="bg-green-600 text-white">Apprenticeship</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="ml-6 list-disc space-y-2 text-gray-200">
                    <li>Graduated as a Distinction Graduate, a top 10% from the 3,100 cohort.</li>
                    <li>
                      Collaborated with a 6-person team from Machine Learning and Cloud Computing learning path for the
                      final project utilizing Git.
                    </li>
                    <li>Successfully selected as one of the top 53 Capstone Final Projects from 433 teams.</li>
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
                        Bachelor of Informatics | Aug 2019 - Jun 2023
                      </CardDescription>
                    </div>
                    <Badge className="bg-green-600 text-white">GPA: 3.93/4.00</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="ml-6 list-disc space-y-2 text-gray-200">
                    <li>
                      Mentored over 80 students in fundamental and object-oriented programming as a laboratory mentor.
                    </li>
                    <li>Graduated with honors, achieving a GPA of 3.93 out of 4.00.</li>
                  </ul>
                </CardContent>
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
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                    <div className="rounded-lg border border-gray-800 bg-black/30 p-3 text-center">
                      <span className="text-green-300">Kotlin</span>
                    </div>
                    <div className="rounded-lg border border-gray-800 bg-black/30 p-3 text-center">
                      <span className="text-green-300">Java</span>
                    </div>
                    <div className="rounded-lg border border-gray-800 bg-black/30 p-3 text-center">
                      <span className="text-green-300">Android SDK</span>
                    </div>
                    <div className="rounded-lg border border-gray-800 bg-black/30 p-3 text-center">
                      <span className="text-green-300">Jetpack Compose</span>
                    </div>
                    <div className="rounded-lg border border-gray-800 bg-black/30 p-3 text-center">
                      <span className="text-green-300">MVVM</span>
                    </div>
                    <div className="rounded-lg border border-gray-800 bg-black/30 p-3 text-center">
                      <span className="text-green-300">Clean Architecture</span>
                    </div>
                    <div className="rounded-lg border border-gray-800 bg-black/30 p-3 text-center">
                      <span className="text-green-300">REST API</span>
                    </div>
                    <div className="rounded-lg border border-gray-800 bg-black/30 p-3 text-center">
                      <span className="text-green-300">Git</span>
                    </div>
                    <div className="rounded-lg border border-gray-800 bg-black/30 p-3 text-center">
                      <span className="text-green-300">SQL</span>
                    </div>
                    <div className="rounded-lg border border-gray-800 bg-black/30 p-3 text-center">
                      <span className="text-green-300">JavaScript</span>
                    </div>
                    <div className="rounded-lg border border-gray-800 bg-black/30 p-3 text-center">
                      <span className="text-green-300">HTML/CSS</span>
                    </div>
                    <div className="rounded-lg border border-gray-800 bg-black/30 p-3 text-center">
                      <span className="text-green-300">Python</span>
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
                  <CardTitle className="text-lg font-bold">Certifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="ml-6 list-disc space-y-4 text-gray-200">
                    <li>
                      <div className="flex flex-col">
                        <span className="font-medium text-white">Associate Android Developer Certification</span>
                        <span className="text-gray-400">Google Developers | 2022</span>
                        <p className="mt-1 text-sm text-gray-300">
                          Certified by Google as an Associate Android Developer, demonstrating proficiency in Android
                          development fundamentals.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="flex flex-col">
                        <span className="font-medium text-white">Bangkit Academy Graduate</span>
                        <span className="text-gray-400">Google, Tokopedia, Gojek, & Traveloka | 2022</span>
                        <p className="mt-1 text-sm text-gray-300">
                          Graduated with distinction (top 10%) from the Bangkit Academy program led by Google,
                          Tokopedia, Gojek, and Traveloka.
                        </p>
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
