import { TypeAnimation } from 'react-type-animation'
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
        <div className='border h-[50vh] flex flex-col items-center justify-center gap-6'>
          <h1 className='font-bold'>THE FOLLOWING ARE STILL UNDER DEVELOPMENT</h1>
        <TypeAnimation
              sequence={[
                "About me Section", // First text
                2000, // Pause for 1 second
                "Projects Section", // Second text
                2000, // Pause for 1 second
                "Contact me Section", // Third text
                2000, // Pause for 1 second
              ]}
              speed={50}
              repeat={Infinity}
            />
        </div>
        {/* MY PROJECTS */}

        {/* TESTIMONIAL (optional) */}

        {/* CONTACT ME */}
      </div>
    </>
  )
}

export default App
