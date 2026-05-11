import { FiExternalLink, FiGithub } from "react-icons/fi";
import weatherApi from "../../assets/weatherApi.png";
import weblogo from "../../assets/weblogo.jpg";
import hero from "../../assets/hero.png";

type RepoLink = {
  label?: string;
  link: string;
};

type ProjectCardTypes = {
  image: string;
  title: string;
  description: string;
  liveLink?: string;
  repoLinks?: RepoLink[];
};

const Card = ({
  image,
  title,
  description,
  liveLink,
  repoLinks,
}: ProjectCardTypes) => {
  return (
    <div className="group flex flex-col bg-white border-2 border-primary-neutral rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Project image */}
      <div className="w-full h-48 md:h-56 overflow-hidden bg-zinc-100 flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        <h3 className="text-lg font-bold text-primary-black">{title}</h3>
        <p className="text-xs text-primary-neutral flex-1">{description}</p>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-2 mt-2">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded bg-primary-black text-primary-white text-xs font-medium px-3 py-2 hover:bg-zinc-800 active:bg-zinc-950 transition-colors"
            >
              <FiExternalLink size={14} />
              Live Demo
            </a>
          )}
          {repoLinks?.map((repo, index) => (
            <a
              key={index}
              href={repo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded border-2 border-primary-black text-primary-black text-xs font-medium px-3 py-2 hover:bg-primary-black hover:text-primary-white transition-colors"
            >
              <FiGithub size={14} />
              {repo.label ? `${repo.label} Repo` : "Repository"}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projectList: ProjectCardTypes[] = [
    {
      image: weatherApi,
      title: "Weather App",
      description:
        "A responsive weather application built with React and TypeScript that fetches real-time weather data from a public API. Features include location search, 5-day forecast, and dynamic UI based on weather conditions.",
      liveLink: "#",
      repoLinks: [{ link: "#" }],
    },
    {
      image: weblogo,
      title: "Portfolio Website",
      description:
        "My personal portfolio built with React, TypeScript, and Tailwind CSS. Showcases my skills, experience, and projects with a clean, responsive design and smooth animations.",
      liveLink: "#",
      repoLinks: [{ link: "#" }],
    },
    {
      image: hero,
      title: "Enrollment System",
      description:
        "A full-stack enrollment system developed as a capstone project for Kapitangan National High School. Built with Vanilla PHP, MySQL, Bootstrap, and jQuery — deployed on Hostinger.",
      liveLink: "#",
      repoLinks: [
        { label: "Frontend", link: "#" },
        { label: "Backend", link: "#" },
      ],
    },
  ];

  return (
    <div
      id="projects"
      className="py-4 px-2 max-w-[1280px] mx-auto flex flex-col gap-6"
    >
      <h1 className="mb-8 mt-4 text-4xl text-center">
        My <span className="font-bold">Projects</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
        {projectList.map((project, index) => (
          <Card
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            liveLink={project.liveLink}
            repoLinks={project.repoLinks}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
