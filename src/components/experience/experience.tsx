import { GoDotFill } from "react-icons/go";
import prosol from "../../assets/prosol.jpg";
import bulsu from "../../assets/bulsu.png";
import hero from "../../assets/hero.png";
import bigben from "../../assets/bigben.png";

type ExperienceCardTypes = {
  position: string;
  descriptions: string[];
  date: string;
  logo: string;
  location: string;
  setup: string;
  index: number;
};

const Card = ({
  position,
  descriptions,
  date,
  logo,
  location,
  setup,
  index,
}: ExperienceCardTypes) => {
  return (
    <div className="relative border-2 border-primary-neutral rounded-lg py-4 px-2.5">
      {/* Background Layer */}
      {index % 2 ? (
        <div className="absolute inset-0 bg-zinc-300 opacity-25 rounded-lg pointer-events-none"></div>
      ) : null}

      {/* Content Layer */}
      <div className="relative">
        <div className="flex items-center h-10 gap-3 text-base">
          <img
            className="object-scale-down w-9 rounded-md"
            src={logo}
            alt={logo}
          />
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

const Bullet = ({ decription }: { decription: string[] }) => {
  return (
    <>
      {decription.map((data, index) => (
        <p key={index} className="flex items-start gap-1 text-xs">
          <GoDotFill />
          {data}
        </p>
      ))}
    </>
  );
};

const Experience = () => {
  const experienceList = [
    {
      position: "Front-End Developer — Big Ben Group",
      descriptions: [
        "Architected and maintained a comprehensive Enterprise Resource Planning (ERP) system used across multiple departments, consolidating fragmented workflows into a single unified platform.",
        "Engineered new features and maintained core functionalities using React.js, Next.js, and TypeScript, delivering responsive and performant interfaces.",
        "Pioneered the adoption of TypeScript and Shadcn UI across the team — improving type safety, reducing runtime errors, and establishing a consistent component system.",
        "Spearheaded the revamp of legacy web systems, modernizing the UI/UX for a more responsive, accessible, and visually consistent platform.",
        "Built and maintained a reusable component library using Material UI, Tailwind CSS, and Shadcn UI to accelerate feature development across ERP modules.",
        "Collaborated with UI/UX designers, department heads, and top management to translate business requirements into interactive prototypes and functional features.",
      ],
      date: "Dec 2024 - Present",
      logo: bigben,
      location: "Pulilan, Bulacan, Philippines",
      setup: "On-Site",
    },
    {
      position: "Front-End Developer — Pro-Solutions Technology, Co.",
      descriptions: [
        "Owned and maintained four major production systems — Accounting (AMS Lampara), LMS Lampara, Kiosk, and Student Portal/Enrollment (SMS Lampara) — ensuring high availability and stable performance.",
        "Diagnosed and resolved critical bugs across multiple modules by identifying root causes and shipping effective fixes, significantly improving system reliability.",
        "Participated actively in code reviews with senior developers, product managers, and product owners, optimizing features to meet technical standards and end-user needs.",
        "Developed and enhanced system features using React.js, Next.js, and TypeScript, contributing to scalable, maintainable codebases.",
        "Transformed concepts and requirements into design mockups and interactive prototypes, strengthening layouts before development handoff.",
        "Built reusable components and revamped existing systems to enhance performance, usability, and maintainability.",
      ],
      date: "Feb 2024 - Dec 2024",
      logo: prosol,
      location: "Malolos, Bulacan, Philippines",
      setup: "On-Site",
    },
    {
      position: "Freelance Full Stack Web Developer",
      descriptions: [
        "Translated concepts into interactive design mockups and prototypes to improve usability and strengthen layouts.",
        "Delivered user support and training to clients — primarily students working on capstone/thesis projects — guiding them through system usage.",
        "Oversaw back-end development using PHP, Next.js, Express.js, and database technologies (MySQL, PostgreSQL, Prisma, Supabase) to ensure data integrity and secure operations.",
        "Developed full-stack web applications using React, Next.js, HTML, CSS, JavaScript, and jQuery — implementing responsive designs and dynamic features.",
        "Integrated modern authentication and authorization solutions (BetterAuth) to secure user access and protect sensitive information.",
      ],
      date: "Jan 2023 - Nov 2024",
      logo: hero,
      location: "Philippines",
      setup: "Remote",
    },
    {
      position: "Full Stack Web Developer — Capstone (BulSU)",
      descriptions: [
        "Developed a full-stack Enrollment System for Kapitangan National High School as a client-based capstone project, handling frontend and backend end-to-end.",
        "Built and managed relational databases and table structures using MySQL, ensuring data integrity and efficient querying across modules.",
        "Developed the backend using Vanilla PHP, implementing server-side logic, RESTful endpoints, and database interactions.",
        "Designed and built a responsive frontend using Bootstrap, JavaScript, and jQuery, delivering a clean and accessible UI for school staff and students.",
        "Deployed and hosted the dynamic web application on Hostinger, managing domain configuration, server setup, and live deployment.",
        "Delivered a scalable and highly available product, tested thoroughly before handoff to the client institution.",
      ],
      date: "May 2023 - Nov 2023",
      logo: bulsu,
      location: "Bulacan State University, Malolos Campus, Philippines",
      setup: "Hybrid",
    },
  ];

  return (
    <div
      id="experience"
      className="py-4 px-2 max-w-[1280px] mx-auto text-white flex flex-col gap-3"
    >
      <h1 className="text-white mb-12 mt-4 text-4xl text-center">
        My <span className="font-bold">Experience</span>
      </h1>

      {experienceList.map((list, index) => (
        <Card
          key={index}
          position={list.position}
          descriptions={list.descriptions}
          date={list.date}
          logo={list.logo}
          location={list.location}
          setup={list.setup}
          index={index}
        />
      ))}
    </div>
  );
};

export default Experience;
