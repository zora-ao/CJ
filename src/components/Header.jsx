import React, { useState } from 'react'
import { IoMdSunny } from "react-icons/io";
import { useTheme } from '../contexts/themeContext';
import { LuSunMoon } from "react-icons/lu";
import { TiThMenuOutline } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

const Header = () => {

    const [showNav, setShowNav] = useState(false);

    const navigations = [
        {
            title: "Home",
            path: "#"
        },{
            title: "Skills",
            path: "#"
        },{
            title: "About",
            path: "#"
        },{
            title: "Projects",
            path: "#"
        },{
            title: "Contact",
            path: "#"
        }
    ];

    const {themeMode, lightMode, darkMode} = useTheme();

    return (
        <section className='backdrop-blur-2xl py-3 md:px-14 px-8 fixed top-0 w-full shadow-sm z-50'>
            <div className='flex justify-between items-center inter'>
                <h1 className='itim text-xl font-semibold'>Carl Jasper Ramos</h1>


                <div className='flex justify-between gap-x-4 items-center'>
                    <ul className='md:flex hidden'>
                        {navigations.map((nav, index) => (
                            <li 
                            className='cursor-pointer mx-4'
                            key={index}>{nav.title}</li>
                        ))}
                    </ul>

                    {
                        themeMode === 'light' ? (
                            <LuSunMoon
                            onClick={darkMode} 
                            className='text-xl mx-4 cursor-pointer'
                            />
                        ) : (
                            <IoMdSunny
                            onClick={lightMode}
                            className='text-xl mx-4 cursor-pointer'
                            />
                        )
                    }

                    {showNav ? (
                        <IoClose
                        className='md:hidden flex'
                        onClick={() => setShowNav(prev => !prev)}
                        />
                    ) : (
                        <TiThMenuOutline
                        className='md:hidden flex'
                        onClick={() => setShowNav(prev => !prev)}
                        />
                    )}

                </div>
            </div>

            
            <div
            className={`overflow-hidden transition-all duration-500 ease-in-out  ${showNav ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
            >
                <ul className={`text-center flex flex-col gap-4 mt-4 py-4`}>
                    {navigations.map((nav, index) => (
                        <li 
                        className='cursor-pointer mx-4 text-xl'
                        key={index}>{nav.title}</li>
                    ))}
                </ul>
            </div>
            
        </section>
    )
}

export default Header
