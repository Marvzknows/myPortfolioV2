const AboutMe = () => {
    return (
        <div className="md:min-h-[90vh] flex flex-col">
            {/* About me */}
            <div className="w-full p-6 flex items-center justify-center gap-2 flex-col text-xl md:text-4xl">
                <h2 className='text-2xl'>About <span className='font-bold'>Me</span></h2>

                <p className='text-sm mt-3 text-primary-neutral max-w-3xl'>
                    I'm <span className="font-semibold">Marvin Lim</span>, a results-driven
                    <span className="font-semibold"> Front-End Developer </span>
                    currently building enterprise software at
                    <span className="font-semibold"> Big Ben Group</span>, where I architect and maintain a
                    company-wide ERP system used across multiple departments. My day-to-day stack revolves around
                    <span className="font-semibold"> React.js</span>,
                    <span className="font-semibold"> Next.js</span>, and
                    <span className="font-semibold"> TypeScript</span> — delivering responsive, performant interfaces
                    that consolidate fragmented business workflows.

                    <br /><br />
                    I specialize in modern UI engineering with
                    <span className="font-semibold"> Tailwind CSS</span>,
                    <span className="font-semibold"> Material UI</span>, and
                    <span className="font-semibold"> Shadcn UI</span>, and I pioneered the adoption of TypeScript and
                    Shadcn across my current team to improve type safety and establish a consistent, scalable
                    component system. I'm equally comfortable producing design mockups and prototypes to validate UX
                    decisions before development handoff.

                    <br /><br />
                    On the full-stack side I work with
                    <span className="font-semibold"> Node.js (Express)</span>,
                    <span className="font-semibold"> PHP / Laravel</span>, and databases including
                    <span className="font-semibold"> MySQL</span>,
                    <span className="font-semibold"> PostgreSQL</span>,
                    <span className="font-semibold"> Supabase</span>, and
                    <span className="font-semibold"> Firebase</span> — typically with
                    <span className="font-semibold"> Prisma ORM</span> and authentication via
                    <span className="font-semibold"> BetterAuth</span>. For data and state I lean on
                    <span className="font-semibold"> Redux Toolkit</span>,
                    <span className="font-semibold"> RTK Query</span>,
                    <span className="font-semibold"> TanStack Query</span>, and
                    <span className="font-semibold"> Axios</span>, and I validate forms with
                    <span className="font-semibold"> React Hook Form</span> and
                    <span className="font-semibold"> Zod</span>.

                    <br /><br />
                    I write tests using
                    <span className="font-semibold"> Jest</span>,
                    <span className="font-semibold"> Vitest</span>, and
                    <span className="font-semibold"> React Testing Library</span>, and I rely on
                    <span className="font-semibold"> Git</span> and
                    <span className="font-semibold"> GitHub</span> for version control. Whether I'm collaborating with
                    UI/UX designers and department heads or shipping solo on a freelance project, I bring a proactive
                    mindset, a sharp eye for component architecture, and a drive to build interfaces that genuinely
                    improve the day-to-day for the people using them.
                </p>
            </div>
        </div>
    );
};

export default AboutMe;
