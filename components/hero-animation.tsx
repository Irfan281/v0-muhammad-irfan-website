"use client"

import { useRef } from "react"
import { motion } from "framer-motion"

export function HeroAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black opacity-90" />

      {/* Outermost circle - largest and darkest */}
      <motion.div
        className="absolute rounded-full border border-green-500/5"
        style={{
          width: "200%",
          height: "200%",
          boxShadow: "0 0 30px 0 rgba(34, 197, 94, 0.05)",
        }}
        initial={{ scale: 0.9 }}
        animate={{
          scale: [0.9, 1.05, 0.9],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Middle circle */}
      <motion.div
        className="absolute rounded-full border border-green-500/10"
        style={{
          width: "150%",
          height: "150%",
          boxShadow: "0 0 30px 0 rgba(34, 197, 94, 0.1)",
        }}
        initial={{ scale: 0.9 }}
        animate={{
          scale: [0.9, 1.05, 0.9],
        }}
        transition={{
          duration: 20,
          delay: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Innermost circle - smallest and brightest */}
      <motion.div
        className="absolute rounded-full border border-green-500/20"
        style={{
          width: "100%",
          height: "100%",
          boxShadow: "0 0 30px 0 rgba(34, 197, 94, 0.15)",
        }}
        initial={{ scale: 0.9 }}
        animate={{
          scale: [0.9, 1.05, 0.9],
        }}
        transition={{
          duration: 15,
          delay: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
