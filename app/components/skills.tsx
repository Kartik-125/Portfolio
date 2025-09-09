"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("ALL")

  const categories = ["ALL", "FRONTEND", "BACKEND", "DATABASE", "LANGUAGE", "DEVOPS", "CLOUD", "TOOLS"]

  const skills = [
    // DevOps & CI/CD
    { name: "Terraform", category: "DEVOPS", color: "text-purple-400", bgColor: "bg-purple-500/20", icon: "🟣" },
    { name: "Jenkins", category: "DEVOPS", color: "text-blue-400", bgColor: "bg-blue-500/20", icon: "🔵" },
    { name: "Docker", category: "DEVOPS", color: "text-cyan-400", bgColor: "bg-cyan-500/20", icon: "🐳" },
    { name: "Git", category: "DEVOPS", color: "text-orange-400", bgColor: "bg-orange-500/20", icon: "🔶" },
    { name: "GitHub", category: "DEVOPS", color: "text-gray-400", bgColor: "bg-gray-500/20", icon: "⚫" },

    // Cloud & OS
    { name: "AWS", category: "CLOUD", color: "text-yellow-400", bgColor: "bg-yellow-500/20", icon: "🟡" },
    { name: "Linux", category: "CLOUD", color: "text-green-400", bgColor: "bg-green-500/20", icon: "🐧" },

    // Programming Languages
    { name: "Python", category: "LANGUAGE", color: "text-green-400", bgColor: "bg-green-500/20", icon: "🐍" },
    { name: "C++", category: "LANGUAGE", color: "text-blue-400", bgColor: "bg-blue-500/20", icon: "⚡" },
    { name: "JavaScript", category: "LANGUAGE", color: "text-yellow-400", bgColor: "bg-yellow-500/20", icon: "🟨" },
    { name: "TypeScript", category: "LANGUAGE", color: "text-cyan-400", bgColor: "bg-cyan-500/20", icon: "🔷" },

    // Frontend
    { name: "React", category: "FRONTEND", color: "text-cyan-400", bgColor: "bg-cyan-500/20", icon: "⚛️" },
    { name: "Next.js", category: "FRONTEND", color: "text-white", bgColor: "bg-gray-500/20", icon: "▲" },
    { name: "HTML5", category: "FRONTEND", color: "text-orange-400", bgColor: "bg-orange-500/20", icon: "🌐" },
    { name: "CSS3", category: "FRONTEND", color: "text-blue-400", bgColor: "bg-blue-500/20", icon: "🎨" },
    { name: "Tailwind CSS", category: "FRONTEND", color: "text-cyan-400", bgColor: "bg-cyan-500/20", icon: "💨" },

    // Backend
    { name: "Node.js", category: "BACKEND", color: "text-green-400", bgColor: "bg-green-500/20", icon: "🟢" },
    { name: "Express.js", category: "BACKEND", color: "text-gray-400", bgColor: "bg-gray-500/20", icon: "🚀" },
    { name: "Flask", category: "BACKEND", color: "text-white", bgColor: "bg-gray-500/20", icon: "🌶️" },
    { name: "REST APIs", category: "BACKEND", color: "text-purple-400", bgColor: "bg-purple-500/20", icon: "🔗" },

    // Database
    { name: "MongoDB", category: "DATABASE", color: "text-green-400", bgColor: "bg-green-500/20", icon: "🍃" },
    { name: "SQL", category: "DATABASE", color: "text-blue-400", bgColor: "bg-blue-500/20", icon: "🗄️" },
    { name: "MySQL", category: "DATABASE", color: "text-cyan-400", bgColor: "bg-cyan-500/20", icon: "🐬" },

    // Tools
    { name: "Postman", category: "TOOLS", color: "text-orange-400", bgColor: "bg-orange-500/20", icon: "📮" },
    { name: "VS Code", category: "TOOLS", color: "text-blue-400", bgColor: "bg-blue-500/20", icon: "💻" },
  ]

  const filteredSkills = activeCategory === "ALL" ? skills : skills.filter((skill) => skill.category === activeCategory)

  return (
    <section className="bg-black py-20 relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-32 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          My Skills
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-cyan-500/30 text-cyan-400 border border-cyan-500/50"
                  : "bg-gray-800/50 text-gray-400 border border-gray-700 hover:border-gray-600 hover:text-gray-300"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <div className="relative h-96 md:h-[500px]">
          {/* Central SKILLS badge */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          ></motion.div>

          {/* Grid skill badges */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={`${skill.name}-${activeCategory}`}
                initial={{ opacity: 0, scale: 0, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                <div
                  className={`
                  flex items-center gap-2 px-4 py-3 rounded-full 
                  ${skill.bgColor} ${skill.color} 
                  border border-gray-700/50 backdrop-blur-sm
                  hover:border-gray-500/50 transition-all duration-300
                  cursor-pointer select-none w-full justify-center
                `}
                >
                  <span className="text-lg">{skill.icon}</span>
                  <span className="text-sm font-medium whitespace-nowrap">{skill.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
