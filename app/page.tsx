import Hero from "./components/hero"
import Experience from "./components/gallery"
import Portfolio from "./components/portfolio"
import Skills from "./components/skills"
import Contact from "./components/contact"
import Footer from "./components/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <Experience />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
