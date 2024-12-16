import me from '../../assets/meTwo.jpg';

const AboutMe = () => {
    return (
        <div className="md:h-[90vh] flex flex-col md:flex-row">
            
            {/* Image */}
            <div className="w-full md:w-[50%] p-5">
                <img
                    className="w-full h-full object-cover object-center rounded-3xl"
                    src={me}
                    alt="cover"
                />
            </div>
            
            {/* About me */}
            <div className="w-full md:w-[50%] p-6 flex items-center justify-center gap-2 flex-col text-xl md:text-4xl">
                <h2 className='text-2xl'>About <span className='font-bold'>Me</span></h2>

                <p className='text-sm mt-3 text-primary-neutral'>
                    I am a passionate and results-driven <span className="font-semibold">Junior Web Developer</span> with expertise in 
                    designing, developing, and implementing user-friendly web applications. With strong proficiency in 
                    <span className="font-semibold"> JavaScript</span>, <span className="font-semibold">React.js</span>, and <span className="font-semibold">TypeScript</span>, 
                    I thrive on delivering responsive, dynamic, and visually appealing web solutions.

                    <br /><br />
                    I specialize in creating clean and modern user interfaces, leveraging the power of <span className="font-semibold">Tailwind CSS </span> 
                    and React UI libraries like <span className="font-semibold">MUI (Material UI)</span> and <span className="font-semibold">Tailwind UI</span>. 
                    These tools allow me to accelerate development while maintaining consistency and enhancing user experience. 
                    I focus on building modular, reusable components that streamline workflows and ensure project scalability.

                    <br /><br />
                    My development process combines creativity and problem-solving to deliver high-quality applications. I have experience 
                    building full-stack solutions, working with <span className="font-semibold">Node.js</span>, <span className="font-semibold">PHP</span>, 
                    and <span className="font-semibold">MySQL</span> for robust backend functionality. I also work with RESTful APIs, ensuring seamless 
                    integration between frontend and backend systems.

                    <br /><br />
                    I am committed to continuous improvement, utilizing tools like <span className="font-semibold">Git</span> for version control and 
                    best practices such as testing and deployment to ensure code reliability. My work emphasizes clean design, optimized 
                    performance, and user satisfaction, with a strong focus on building interactive and responsive web applications.

                    <br /><br />
                    Whether collaborating in a team or working independently, I bring a proactive mindset, a passion for web technologies, 
                    and a drive to create innovative solutions that make an impact.
                </p>
            </div>
        </div>
    );
};

export default AboutMe;
