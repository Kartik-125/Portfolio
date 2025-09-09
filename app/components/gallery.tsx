"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Building2 } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Data Analyst",
      company: "NZ Essentials Pvt. Ltd.",
      period: "May - Aug 2025",
      location: "Remote",
      description: [
        "Collect, cleanse, and structure raw data from multiple sources to ensure high accuracy, completeness, and consistency, thereby supporting reliable analysis.",
        "Execute comprehensive data analysis and interpretation, applying statistical techniques to uncover actionable insights that support decision‑making and align with organizational objectives.",
        "Generate compelling reports and visualizations, delivering clear, data-driven findings through dashboards and presentations to stakeholders across departments.",
      ],
      icon: <Building2 className="w-6 h-6" />,
    },
    {
      title: "Full Stack Web Development",
      company: "Internpe",
      period: "July - Aug 2024",
      location: "Remote",
      description: [
        "Design and develop responsive, scalable web applications using a wide range of front-end and back-end frameworks, ensuring alignment with project goals and user requirements.",
        "Collaborate across the full development lifecycle, from system architecture and database design to testing and deployment, while adhering to best coding practices and Agile methodologies.",
      ],
      icon: <Building2 className="w-6 h-6" />,
    },
  ]

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Professional Experience</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My journey in building expertise across data analysis and full-stack development
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                    {exp.icon}
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-1">{exp.title}</h3>
                      <p className="text-blue-400 font-medium text-lg">{exp.company}</p>
                    </div>
                    <div className="flex flex-col md:items-end mt-2 md:mt-0">
                      <div className="flex items-center text-gray-400 mb-1">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-gray-400">
                        <MapPin className="w-4 h-4 mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {exp.description.map((desc, descIndex) => (
                      <div key={descIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-300 leading-relaxed">{desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
