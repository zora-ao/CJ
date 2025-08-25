import React from 'react'

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

    return (
        <section className='backdrop-blur-2xl py-3 px-14 fixed top-0 w-full shadow-sm'>
            <div className='flex justify-between items-center inter'>
                <h1 className='itim text-xl font-semibold'>Carl Jasper Ramos</h1>

                <ul className='flex gap-x-4 '>
                    {navigations.map((nav, index) => (
                        <li key={index}>{nav.title}</li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Header
