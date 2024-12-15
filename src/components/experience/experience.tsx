import { GoDotFill } from 'react-icons/go';
import prosol from '../../assets/prosol.jpg';
import bulsu from '../../assets/bulsu.png';
import hero from '../../assets/hero.png'

type ExperienceCardTypes = {
    position: string,
    descriptions: string[],
    date: string,
    logo: string,
    location: string,
    setup: string,
    index: number
}

const Card = ({ position, descriptions, date, logo, location, setup, index }: ExperienceCardTypes) => {
    return (
        <div className="relative border-2 border-primary-neutral rounded-lg py-4 px-2.5">
            {/* Background Layer */}
            {index % 2 ? (
                <div className="absolute inset-0 bg-zinc-300 opacity-25 rounded-lg pointer-events-none"></div>
            ) : null}

            {/* Content Layer */}
            <div className="relative">
                <div className="flex items-center h-10 gap-3 text-base">
                    <img className="object-scale-down w-9 rounded-md" src={logo} alt={logo} />
                    <h4 className="text-sm md:text-base font-medium">{position}</h4>
                    <h5 className="text-xs ml-auto">{date}</h5>
                </div>

                <div className="flex flex-col mb-4 text-xs items-end mt-5 md:mt-1">
                    <h5>{location}</h5>
                    <h5>{setup}</h5>
                </div>

                <div className="flex flex-col gap-3 text-base my-1 py-3">
                    <Bullet decription={descriptions} />
                </div>
            </div>
        </div>
    );
};


const Bullet = ({decription}: {decription: string[]}) => {
    return (
        <>
            {decription.map((data, index) => (
                <p key={index} className='flex items-start gap-1 text-xs'>
                    <GoDotFill />
                    {data}
                </p>
            ))}
        </>
    )
}

const Experience = () => {

    const experienceList = [
        {
            position: 'Junior Front-End Developer', descriptions: [
                " Develop new system features, Maintained and enhanced existing system features using React JS with TypeScript while also spearheading the development of innovative new functionalities.",
                "Took concepts and produced design mockups and prototypes to strengthen designs, enhance user experiences and improve site interactions.",
                " Developed reusable components to facilitate faster development timelines and improve overall code quality",
                "Revamping existing systems and web applications",
            ], date: 'Feb 2024 - Present', logo: prosol, location: 'Malolos City, Central Luzon, Philippines', setup: 'Onsite'
        },
        {
            position: 'Freelance Full Stack Web Developer', descriptions: [
                "Took concepts and produced design mockups and prototypes to strengthen designs, enhance user experiences and improve site interactions.",
                "Delivered user support to clients to train, educate and answer questions.",
                "Oversaw back-end development using PHP to maintain website integrity.",
                "Coded websites using HTML, CSS, JavaScript, and jQuery languages."
            ], date: 'Jan 2023 - Present', logo: hero, location: 'Central Luzon, Philippines', setup: 'Remote'
        },
        {
            position: 'Capstone Full Stack Developer', descriptions: [
                "Used Vanilla PHP for Backend, Bootstrap for CSS framework, JavaScript and JQuery Library for faster development and SQL/MySQL to develop and manage databases.",
                "Used Hostinger for hosting dynamic website and deployment Built databases and table structures for web applications.",
                "Implemented continuous integration pipelines for automated testing and deployment of software updates.",
                "Tested and deployed scalable and highly available software products.",
                "Reduced page load times by optimizing front-end assets such as JavaScript files, stylesheets, and images.",
                "Developed functional databases, applications and servers to support websites on back-end."
            ], date: 'May 2023 - Nov 2023', logo: bulsu, location: 'Bulacan State University, Malolos Campus, Philippines', setup: 'Hybrid'
        },

    ]

    return (
        <div id='experience' className="py-4 px-2 max-w-[1280px] mx-auto text-white flex flex-col gap-3">
            <h1 className="text-white mb-12 mt-4 text-4xl text-center">My <span className="font-bold">Experience</span></h1>
            
            {experienceList.map((list, index) => (
                <Card key={index} position={list.position} descriptions={list.descriptions} date={list.date} logo={list.logo} location={list.location} setup={list.setup} index={index} />
            ))}
        </div>
    )
}

export default Experience;