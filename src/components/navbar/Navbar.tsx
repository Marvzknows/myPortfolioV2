import { useState, useEffect } from "react";
import { FiDownload } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { RiMenu5Fill } from "react-icons/ri";
import myCv from '../../assets/myCv.pdf';

const Navbar = () => {
    const [hasShadow, setHasShadow] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const NavLinks = [
        { link: "#aboutme", name: "About Me" },
        { link: "#skills", name: "Skills" },
        { link: "#experience", name: "Experience" },
        { link: "#projects", name: "Project" },
        { link: "#contacts", name: "Contact Me" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setHasShadow(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const HandleOpenNavbar = () => {
        setIsOpen(true);
        document.body.style.overflow = "hidden";
    };

    const OnCloseNavbar = () => {
        setIsOpen(false);
        document.body.style.overflow = "";
    };

    const handleClickOutside = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if ((e.target as HTMLElement).classList.contains("overlay")) {
            OnCloseNavbar();
        }
    };

    return (
        <>
            <nav
                className={`z-20 p-4 text-primary-black fixed top-0 left-0 w-full bg-white transition-shadow ${hasShadow ? "shadow-md" : ""
                    }`}
            >
                <div className="max-w-[1280px] mx-auto flex items-center justify-between">
                    <a href="#header" className="font-bold text-xl">
                        Marvzknows
                    </a>

                    <ul className="hidden md:flex items-center gap-9 font-semibold">
                        {NavLinks.map((link) => (
                            <li className="hover:text-zinc-800 ease-out" key={link.name}>
                                <a href={`${link.link}`}>{link.name}</a>
                            </li>
                        ))}
                    </ul>

                    <a
                        href={myCv}
                        download="My_CV.pdf"
                        className="rounded bg-primary-black text-primary-white text-xs font-medium p-2.5 hidden md:flex items-center gap-1 hover:bg-zinc-800 active:bg-zinc-950"
                    >
                        Resume
                        <FiDownload size={12} />
                    </a>

                    <button onClick={HandleOpenNavbar} className="flex md:hidden hover:text-primary-neutral border-none">
                        <RiMenu5Fill size={30} />
                    </button>
                </div>
            </nav>

            {/* Mobile Nav bar */}
            <div
                className={`overlay fixed w-full h-full top-0 left-0 bg-black bg-opacity-50 z-40 transition-opacity duration-500 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={handleClickOutside}
            >
                <nav
                    className={`md:hidden p-4 min-h-screen absolute top-0 left-0 transform transition-transform duration-500 ${isOpen ? "translate-x-0" : "-translate-x-full"
                        } w-[260px] bg-[#333333] text-white shadow-xl z-50`}
                >
                    <button onClick={OnCloseNavbar} className="flex md:hidden hover:text-gray-400 ml-auto">
                        <IoClose size={30} />
                    </button>

                    <ul className="mt-6 space-y-4 font-semibold">
                        {NavLinks.map((link) => (
                            <li key={link.name}>
                                <a href={`${link.link}`} onClick={OnCloseNavbar}>
                                    {link.name}
                                </a>
                            </li>
                        ))}

                        <li>
                            <a
                                href={myCv}
                                download="My_CV.pdf"
                                className="w-full rounded bg-primary-black text-primary-white text-sm font-medium p-2.5 flex justify-center items-center gap-1 hover:bg-zinc-800 active:bg-zinc-950"
                            >
                                Resume
                                <FiDownload size={12} />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Navbar;
