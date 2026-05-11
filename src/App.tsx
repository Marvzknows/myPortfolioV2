import './App.css'
import Experience from './components/experience/experience'
import Header from './components/Header/Header'
import Navbar from './components/navbar/Navbar'
import Skills from './components/skills/Skills'
import AboutMe from './components/aboutme/aboutMe'
import Projects from './components/projects/Projects'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <div className='min-h-screen py-1 max-w-[1280px] mx-auto'>
        <Navbar />
        <Header />
        <Skills />
      </div>

      {/* EXPERIENCE */}
      <div className='bg-primary-black min-h-screen w-full'>
        <Experience />
      </div>

      <div className='py-1 max-w-[1280px] mx-auto'>
        <AboutMe />
      </div>

      {/* PROJECTS */}
      <div className='py-8 w-full'>
        <Projects />
      </div>

      <Footer />
    </>
  )
}

export default App
