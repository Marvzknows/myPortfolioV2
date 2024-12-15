import hostinger from '../../assets/hostinger.svg';
import xampp from '../../assets/xampp.svg';

const Card = ({ imgUrl, name }: { imgUrl: string, name: string }) => {
    return (
        <div className="w-24 md:w-36 bg-primary-neutral p-3 md:p-5 rounded-lg overflow-hidden group flex flex-col gap-2">
            <img
                className="w-full h-full object-scale-down transition-transform duration-300 group-hover:scale-110"
                src={imgUrl}
                alt="Skill icon"
            />
            <span className="text-center text-primary-white text-xs font-medium">{name}</span>
        </div>
    );
};


const Skills = () => {

    const frontEndSkills = [
        { name: 'HTML', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
        { name: 'CSS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
        { name: 'SASS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg' },
        { name: 'Bootstrap', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg' },
        { name: 'React Bootstrap', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactbootstrap/reactbootstrap-original.svg' },
        { name: 'Tailwind CSS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg' },
        { name: 'JavaScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
        { name: 'JQuery', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-plain-wordmark.svg' },
        { name: 'React JS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
        { name: 'TypeScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
        { name: 'Redux', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg' },
    ]
    
    const backendSkills = [
        { name: 'PHP', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
        { name: 'MySQL ', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg' },
        { name: 'Node JS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg' },
        { name: 'Express JS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg' },
        { name: 'C#', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' },
    ]

    const tools = [
        { name: 'Vercel', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg' },
        {name: 'GitHub', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg'},
        {name: 'Git', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg'},
        { name: 'Hostinger', image: hostinger },
        {name: 'Postman API', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg'},
        { name: 'Visual Studeio Code', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original-wordmark.svg' },
        { name: 'Unity', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original-wordmark.svg' },
        {name: 'XAMPP', image: xampp},
    ]

    return (
        <div id='skills' className="flex flex-col p-4 gap-6">
            {/* Front-end */}

            <h1 className="text-primary-neutral text-4xl w-full text-start font-medium border-b-2 border-primary-neutral">
               Frontend
            </h1>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                {frontEndSkills.map(item => (
                   <Card imgUrl={item.image} name={item.name} />
               ))}
            </div>

            {/* Backend */}
            <h1 className="text-primary-neutral text-4xl w-full text-start font-medium border-b-2 border-primary-neutral">
               Backend
            </h1>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                {backendSkills.map(item => (
                   <Card imgUrl={item.image} name={item.name} />
               ))}
            </div>

            {/* Tools */}
            <h1 className="text-primary-neutral text-4xl w-full text-start font-medium border-b-2 border-primary-neutral">
               Tools
            </h1>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                {tools.map(item => (
                   <Card imgUrl={item.image} name={item.name} />
               ))}
            </div>
            
        </div>
    );
};

export default Skills;
