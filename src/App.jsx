
import './App.css'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Hero from './components/Hero'
import StatsBanner from './components/StatsBanner'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Footer from './components/Footer'
function App() {

  return (
    <>
    <Navbar />
      <Hero />
      <StatsBanner></StatsBanner>
      <About></About>
      <Education></Education>
      <Experience></Experience>
      <Projects></Projects>
      <Skills></Skills>
      <Footer></Footer>
      </>
  )
}

export default App
