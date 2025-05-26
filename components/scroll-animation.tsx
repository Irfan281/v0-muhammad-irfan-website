"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

interface ScrollAnimationProps {
  children: ReactNode
  delay?: number
}

export function ScrollAnimation({ children, delay = 0 }: ScrollAnimationProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: {
            duration: 0.6,
            delay: delay,
            ease: "easeOut",
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
