import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import GameDev from './components/Projects'
import Experience from './components/Experience'
import Highlights from './components/Highlights'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Highlights />
        <GameDev />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App