import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      {/* Custom cursor (hidden on touch devices via CSS) */}
      <Cursor />

      {/* Fixed nav + scroll progress */}
      <Navbar />

      {/* Page sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Stats />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
