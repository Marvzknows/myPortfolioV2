import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const NavLinks = [
    { link: "#header", name: "Home" },
    { link: "#aboutme", name: "About Me" },
    { link: "#skills", name: "Skills" },
    { link: "#experience", name: "Experience" },
    { link: "#projects", name: "Projects" },
  ];

  const Socials = [
    {
      icon: <FiGithub size={18} />,
      link: "https://github.com/",
      label: "GitHub",
    },
    {
      icon: <FiLinkedin size={18} />,
      link: "https://www.linkedin.com/",
      label: "LinkedIn",
    },
    {
      icon: <FaFacebookF size={18} />,
      link: "https://www.facebook.com/",
      label: "Facebook",
    },
    {
      icon: <FiMail size={18} />,
      link: "mailto:your.email@example.com",
      label: "Email",
    },
  ];

  return (
    <footer className="bg-primary-black text-primary-white w-full">
      <div className="max-w-[1280px] mx-auto px-6 py-10 flex flex-col gap-8">
        {/* Top section */}
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          {/* Brand / Intro */}
          <div className="flex flex-col gap-3 max-w-sm">
            <h2 className="text-2xl font-bold">Marvzknows</h2>
            <p className="text-xs text-zinc-300">
              Front-End Developer based in the Philippines. Building responsive,
              performant, and accessible web experiences with React, Next.js,
              and TypeScript.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {NavLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.link}
                    className="text-xs text-zinc-300 hover:text-primary-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex items-center gap-3">
              {Socials.map((social) => (
                <a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-500 hover:bg-primary-white hover:text-primary-black transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-zinc-500/40"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-zinc-300">
          <p>© {currentYear} Marvin Lim. All rights reserved.</p>
          <p>Built with React, TypeScript & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
