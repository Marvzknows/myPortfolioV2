import './App.css'
import Experience from './components/experience/experience'
import Header from './components/Header/Header'
import Navbar from './components/navbar/Navbar'
import Skills from './components/skills/Skills'

function App() {

  return (
    <>
      <div className=' border-error-500 min-h-screen py-1 max-w-[1280px] mx-auto'>

        {/* NAVBAR */}
        <Navbar />

        {/* HEADER */}
        <Header />

        {/* SKILLS */}
        <Skills />


      </div>
    
      {/* EXPERIENCE */}
      <div className='bg-primary-black min-h-screen w-full'>
        <Experience />
      </div>

      <div className=' border-error-500 py-1 max-w-[1280px] mx-auto'>
        {/* ABOUT ME */}

        {/* MY PROJECTS */}

        {/* TESTIMONIAL (optional) */}

        {/* CONTACT ME */}
      </div>
    </>
  )
}

export default App
