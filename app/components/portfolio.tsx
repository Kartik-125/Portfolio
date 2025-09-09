"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = ["all", "web-development", "e-commerce", "portfolio"]

  const projects = [
    {
      id: 1,
      title: "STYLEHUB – E-commerce Platform",
      category: "e-commerce",
      image: "/modern-e-commerce-clothing-website-interface.jpg",
      year: "2024",
      description:
        "Full-stack e-commerce clothing platform with dynamic product listings and shopping cart functionality",
      technologies: ["React", "Tailwind CSS", "MongoDB", "Node.js"],
      features: [
        "Dynamic product listings with filtering and search",
        "Shopping cart functionality with real-time updates",
        "Modular component structure for scalability",
        "Responsive design for all devices",
      ],
    },
    {
      id: 2,
      title: "Personal Portfolio Website",
      category: "portfolio",
      image: "/modern-developer-portfolio-website-dark-theme.jpg",
      year: "2024",
      description: "Full-stack portfolio website showcasing projects, skills, and professional experience",
      technologies: ["React", "Django/Flask", "MongoDB", "Tailwind CSS"],
      features: [
        "Interactive project showcase with detailed descriptions",
        "Contact form with backend integration",
        "Resume download functionality",
        "Smooth navigation and animations",
      ],
    },
    {
      id: 3,
      title: "Doctor Appointment Dashboard",
      category: "web-development",
      image: "/devops-ci-cd-pipeline-dashboard-interface.jpg",
      year: "2024",
      description: "Comprehensive healthcare management system for scheduling and managing doctor appointments",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Socket.io"],
      features: [
        "Real-time appointment scheduling and management",
        "Patient and doctor profile management",
        "Automated appointment reminders and notifications",
        "Medical history tracking and reporting",
      ],
    },
  ]

  const filteredProjects = projects.filter((project) =>
    selectedCategory === "all" ? true : project.category === selectedCategory,
  )

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h2>

        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="text-slate-500"
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </div>

        <motion.div layout className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="overflow-hidden bg-zinc-900 border-gray-700 hover:border-gray-600 transition-colors h-full">
                  <CardContent className="p-0">
                    <div className="group relative">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-semibold text-white line-clamp-2">{project.title}</h3>
                        <span className="text-sm text-gray-400 ml-2">{project.year}</span>
                      </div>

                      <p className="text-gray-300 text-sm mb-4 line-clamp-3">{project.description}</p>

                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-blue-400 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, index) => (
                            <span key={index} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-blue-400 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {project.features.slice(0, 2).map((feature, index) => (
                            <li key={index} className="text-gray-300 text-xs flex items-start gap-2">
                              <span className="w-1 h-1 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
