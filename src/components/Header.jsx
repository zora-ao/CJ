import React, { useState, useEffect } from 'react';
import { IoMdSunny } from "react-icons/io";
import { LuSunMoon } from "react-icons/lu";
import { TiThMenuOutline } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { useTheme } from '../contexts/themeContext';

const Header = () => {
    const [showNav, setShowNav] = useState(false);
    const [activeSection, setActiveSection] = useState('home'); // Home active by default
    const [highlightStyle, setHighlightStyle] = useState({ left: 0, width: 0 });

    const navigations = [
        { title: "Home", path: "#home" },
        { title: "Certificates", path: "#certi" },
        { title: "Projects", path: "#projects" },
        { title: "Skills", path: "#skills" },
        { title: "Contact", path: "#contact" },
    ];

    const { themeMode, lightMode, darkMode } = useTheme();
    const textColor = themeMode === "light" ? "text-black" : "text-white";

    // Update active section on scroll
    useEffect(() => {
        const handleScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        for (let nav of navigations) {
            const section = document.querySelector(nav.path);
            if (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                setActiveSection(nav.path.substring(1));
            }
            }
        }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Update highlight position whenever activeSection changes
    useEffect(() => {
        const activeNavItem = document.getElementById(`nav-${activeSection}`);
        if (activeNavItem) {
        setHighlightStyle({
            left: activeNavItem.offsetLeft,
            width: activeNavItem.offsetWidth,
        });
        }
    }, [activeSection]);

    // Handle click on nav link
    const handleNavClick = (section) => {
        setActiveSection(section);
        setShowNav(false); // close mobile menu if open
        const target = document.querySelector(`#${section}`);
        if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="backdrop-blur-2xl bg-white/10 dark:bg-black/30 py-3 md:px-14 fixed top-0 w-full shadow-sm z-50">
        <div className={`flex justify-between items-center inter px-8 md:my-0 my-2 relative ${textColor}`}>
            <h1 className='itim text-xl font-semibold'>Carl Jasper Ramos</h1>

            <div className='flex justify-between gap-x-4 items-center relative'>
            {/* Desktop navigation */}
            <ul className='md:flex hidden relative'>
                {/* Magic Highlight */}
                <div
                className="absolute bottom-0 h-0.5 bg-yellow-400 rounded transition-all duration-300"
                style={{ left: highlightStyle.left, width: highlightStyle.width }}
                />
                {navigations.map((nav) => (
                <li
                    key={nav.path}
                    id={`nav-${nav.path.substring(1)}`}
                    className="cursor-pointer mx-4 relative z-10"
                    onClick={() => handleNavClick(nav.path.substring(1))}
                >
                    {nav.title}
                </li>
                ))}
            </ul>

            {/* Theme toggle */}
            {themeMode === 'light' ? (
                <LuSunMoon onClick={darkMode} className={`text-xl mx-4 cursor-pointer ${textColor}`} />
            ) : (
                <IoMdSunny onClick={lightMode} className={`text-xl mx-4 cursor-pointer ${textColor}`} />
            )}

            {/* Mobile menu toggle */}
            {showNav ? (
                <IoClose className={`md:hidden flex ${textColor}`} onClick={() => setShowNav(false)} />
            ) : (
                <TiThMenuOutline className={`md:hidden flex ${textColor}`} onClick={() => setShowNav(true)} />
            )}
            </div>
        </div>

        {/* Mobile navigation */}
        <div className={`overflow-hidden ${showNav ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} md:hidden`}>
            <ul className={`text-center flex flex-col gap-4 py-4 ${textColor}`}>
            {navigations.map((nav) => (
                <li
                key={nav.path}
                className={`cursor-pointer mx-4 text-xl ${
                    activeSection === nav.path.substring(1) ? "font-bold bg-yellow-400/30 rounded px-2 py-1" : ""
                }`}
                onClick={() => handleNavClick(nav.path.substring(1))}
                >
                {nav.title}
                </li>
            ))}
            </ul>
        </div>
        </section>
    );
};

export default Header;
