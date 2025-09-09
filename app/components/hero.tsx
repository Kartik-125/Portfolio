"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X, Linkedin, Github, Award, Users, Calendar, FileText } from "lucide-react"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [showAbout, setShowAbout] = useState(false)
  const { scrollY } = useScroll()

  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const y = useTransform(scrollY, [0, 300], [0, -50])

  const handleViewResume = () => {
    window.open("https://drive.google.com/file/d/1EH65a6v4KF8BraYXixeTknNftu7qKPN0/view?usp=sharing", "_blank")
  }

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Particle[] = []
    const particleCount = 100

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.1
        this.speedX = Math.random() * 2 - 1
        this.speedY = Math.random() * 2 - 1
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = "rgba(255, 255, 255, 0.5)"
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    function animate() {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const particle of particles) {
        particle.update()
        particle.draw()
      }

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      if (!canvasRef.current) return
      canvasRef.current.width = window.innerWidth
      canvasRef.current.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <motion.div className="relative h-screen w-full overflow-hidden" style={{ opacity, y }}>
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full bg-black" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.h1
          className="mb-6 text-6xl font-bold tracking-tighter sm:text-7xl lg:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          KARTIKAY SAINI
        </motion.h1>
        <motion.p
          className="max-w-[600px] text-lg text-gray-400 sm:text-xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Software Developer & DevOps Engineer
        </motion.p>

        <motion.div
          className="mb-6 flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            onClick={() => setShowAbout(true)}
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-black transition-colors"
          >
            About Me
          </Button>
          <Button
            onClick={handleViewResume}
            variant="outline"
            className="bg-transparent border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black transition-colors flex items-center gap-2"
          >
            <FileText size={16} />
            View Resume
          </Button>
        </motion.div>

        <motion.div
          className="flex items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="https://www.linkedin.com/in/kartikay-saini08/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors"
          >
            <Linkedin size={32} />
          </a>
          <a
            href="https://github.com/Kartik-125"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition-colors"
          >
            <Github size={32} />
          </a>
        </motion.div>
      </div>

      <AnimatePresence>
        {showAbout && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowAbout(false)}
          >
            <motion.div
              className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-600 shadow-2xl"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowAbout(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors z-10"
              >
                <X size={24} />
              </button>

              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-semibold mb-4 text-white flex items-center gap-2">
                        <Users className="text-blue-400" size={24} />
                        Who Am I?
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        Hey there! 👋 I'm Kartikay, a passionate Computer Science student who loves turning ideas into
                        reality through code. My journey started with web development, where I discovered the magic of
                        creating interactive experiences. But lately, I've been diving deep into the DevOps world -
                        there's something incredibly satisfying about automating processes and making deployments
                        seamless. When I'm not coding, you'll find me exploring new technologies or contributing to
                        open-source projects.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold mb-4 text-white flex items-center gap-2">
                        <Calendar className="text-blue-400" size={24} />
                        My Journey
                      </h3>
                      <div className="space-y-3">
                        <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-blue-400">
                          <h4 className="font-semibold text-white">Currently Studying</h4>
                          <p className="text-blue-400">Bachelor of Computer Science Engineering</p>
                          <p className="text-gray-400 text-sm">GJUS&T, HISAR • 2022 - 2026</p>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg">
                          <h4 className="font-semibold text-white">Foundation</h4>
                          <p className="text-blue-400">10+2 Non-Medical</p>
                          <p className="text-gray-400 text-sm">R C Green Field School • 2020 - 2021</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-semibold mb-4 text-white flex items-center gap-2">
                        <Award className="text-blue-400" size={24} />
                        Highlights & Recognition
                      </h3>
                      <div className="space-y-3">
                        <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-3 rounded-lg border border-purple-500/20">
                          <p className="text-purple-300 font-medium">🏆 GSSOC 2024 Contributor → 2025 Mentor</p>
                        </div>
                        <div className="bg-gradient-to-r from-green-900/30 to-teal-900/30 p-3 rounded-lg border border-green-500/20">
                          <p className="text-green-300 font-medium">🎯 2x Runner-up Visionathon</p>
                        </div>
                        <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 p-3 rounded-lg border border-orange-500/20">
                          <p className="text-orange-300 font-medium">👥 Team Leader - Infosys Drive (2025)</p>
                        </div>
                        <div className="bg-gray-800 p-3 rounded-lg">
                          <p className="text-gray-300 text-sm">• College Brand Ambassador at Technook</p>
                          <p className="text-gray-300 text-sm">• HackWithInfy Coordinator (2025)</p>
                          <p className="text-gray-300 text-sm">• Coding Club Core Team Member</p>
                          <p className="text-gray-300 text-sm">• SIH Participant (2024, 2025)</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold mb-4 text-white">What Drives Me</h3>
                      <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-4 rounded-lg border border-blue-500/20">
                        <p className="text-gray-300 text-sm leading-relaxed">
                          "I believe in the power of automation and clean code. My goal is to bridge the gap between
                          development and operations, creating seamless workflows that make everyone's life easier.
                          Every project is an opportunity to learn something new!"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
