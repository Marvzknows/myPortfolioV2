import hostinger from "../../assets/hostinger.svg";
import xampp from "../../assets/xampp.svg";

const Card = ({ imgUrl, name }: { imgUrl: string; name: string }) => {
  return (
    <div className="w-24 md:w-36 bg-primary-neutral p-3 md:p-5 rounded-lg overflow-hidden group flex flex-col gap-2">
      <img
        className="w-full h-full object-scale-down transition-transform duration-300 group-hover:scale-110"
        src={imgUrl}
        alt="Skill icon"
      />
      <span className="text-center text-primary-white text-xs font-medium">
        {name}
      </span>
    </div>
  );
};

const Skills = () => {
  const frontEndSkills = [
    {
      name: "HTML",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    },
    {
      name: "React JS",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      name: "Next JS",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Redux",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
    },
    {
      name: "React Router",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg",
    },
    {
      name: "TanStack Query",
      image: "https://files.svgcdn.io/logos/react-query-icon.svg",
    },
    {
      name: "Tailwind CSS",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Material UI",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
    },
    {
      name: "Bootstrap",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "SASS",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
    },
    {
      name: "JQuery",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-plain-wordmark.svg",
    },
    {
      name: "Vite",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
    },
  ];

  const backendSkills = [
    {
      name: "Node JS",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express JS",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    },
    {
      name: "PHP",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
    },
    {
      name: "Laravel",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
    },
    {
      name: "MySQL",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    },
    {
      name: "PostgreSQL",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "Supabase",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
    },
    {
      name: "Firebase",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg",
    },
    {
      name: "Prisma ORM",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
    },
    {
      name: "C#",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
    },
  ];

  const testingSkills = [
    {
      name: "Jest",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",
    },
    {
      name: "Vitest",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg",
    },
    {
      name: "React Testing Library",
      image: "https://testing-library.com/img/octopus-128x128.png",
    },
  ];

  const tools = [
    {
      name: "Git",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    },
    {
      name: "Postman",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    },
    {
      name: "Vercel",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
    },
    {
      name: "VS Code",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    },
    {
      name: "Unity",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg",
    },
    { name: "Hostinger", image: hostinger },
    { name: "XAMPP", image: xampp },
  ];

  return (
    <div id="skills" className="flex flex-col p-4 gap-6">
      {/* Front-end */}

      <h1 className="text-primary-neutral text-4xl w-full text-start font-medium border-b-2 border-primary-neutral">
        Frontend
      </h1>
      <div className="flex flex-wrap gap-4 justify-center md:justify-start">
        {frontEndSkills.map((item) => (
          <Card imgUrl={item.image} name={item.name} />
        ))}
      </div>

      {/* Backend */}
      <h1 className="text-primary-neutral text-4xl w-full text-start font-medium border-b-2 border-primary-neutral">
        Backend
      </h1>
      <div className="flex flex-wrap gap-4 justify-center md:justify-start">
        {backendSkills.map((item) => (
          <Card imgUrl={item.image} name={item.name} />
        ))}
      </div>

      {/* Testing */}
      <h1 className="text-primary-neutral text-4xl w-full text-start font-medium border-b-2 border-primary-neutral">
        Testing
      </h1>
      <div className="flex flex-wrap gap-4 justify-center md:justify-start">
        {testingSkills.map((item) => (
          <Card imgUrl={item.image} name={item.name} />
        ))}
      </div>

      {/* Tools */}
      <h1 className="text-primary-neutral text-4xl w-full text-start font-medium border-b-2 border-primary-neutral">
        Tools
      </h1>
      <div className="flex flex-wrap gap-4 justify-center md:justify-start">
        {tools.map((item) => (
          <Card imgUrl={item.image} name={item.name} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
