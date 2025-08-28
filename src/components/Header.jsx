import React from 'react'
import { IoMdSunny } from "react-icons/io";
import { useTheme } from '../contexts/themeContext';
import { LuSunMoon } from "react-icons/lu";

const Header = () => {

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
        <section className='backdrop-blur-2xl py-3 px-14 fixed top-0 w-full shadow-sm'>
            <div className='flex justify-between items-center inter'>
                <h1 className='itim text-xl font-semibold'>Carl Jasper Ramos</h1>

                <ul className='flex gap-x-4 items-center'>
                    {navigations.map((nav, index) => (
                        <li 
                        className='cursor-pointer'
                        key={index}>{nav.title}</li>
                    ))}

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

                </ul>
            </div>
        </section>
    )
}

export default Header
