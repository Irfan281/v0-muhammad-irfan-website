"use client"

import { useRef } from "react"
import { motion } from "framer-motion"

export function HeroAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black opacity-90" />

      {/* First wave circle */}
      <motion.div
        className="absolute rounded-full border border-green-500/40"
        style={{
          width: "200%",
          height: "200%",
          boxShadow: "0 0 30px 0 rgba(34, 197, 94, 0.1)",
        }}
        initial={{ scale: 0.8, opacity: 0.5 }}
        animate={{
          scale: [0.8, 1.1, 0.8],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Second wave circle */}
      <motion.div
        className="absolute rounded-full border border-green-500/50"
        style={{
          width: "150%",
          height: "150%",
          boxShadow: "0 0 30px 0 rgba(34, 197, 94, 0.2)",
        }}
        initial={{ scale: 0.8, opacity: 0.5 }}
        animate={{
          scale: [0.8, 1.1, 0.8],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          delay: 1.3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Third wave circle */}
      <motion.div
        className="absolute rounded-full border border-green-500/60"
        style={{
          width: "100%",
          height: "100%"
        }}
        initial={{ scale: 0.8, opacity: 0.5 }}
        animate={{
          scale: [0.8, 1.1, 0.8],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          delay: 2.6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
