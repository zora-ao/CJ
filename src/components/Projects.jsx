import { details, div, h1 } from "motion/react-client"
import cakeHero from "../01_cake-shop/cakeHero.png"
import recipeSearch from "../02_recipe-site/recipeSearch.png"
import laptopHero from "../03_laptop-reco/laptopHero.png"
import { FiGithub } from "react-icons/fi"
import { FaExternalLinkAlt } from "react-icons/fa"

const Projects = () => {

    const projects = [
        {
            title: "Cake Shop",
            src: cakeHero,
            details: "A full-featured e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
            tech: ["HTML", "CSS", "JavaScript"],
            code_link: "/",
            live_link: "https://zora-ao.github.io/e-commerce/index.html#hero"
        },{
            title: "Recipe Site Website",
            src: recipeSearch,
            details: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
            tech: ["React", "Vite", "Tailwind css", "Appwrite"],
            code_link: "/",
            live_link: "/https://recipes-rust-three.vercel.app/"
        },{
            title: "Laptop Recommendations",
            src: laptopHero,
            details: "A responsive portfolio website showcasing modern design principles and smooth animations. Built with performance and accessibility in mind.",
            tech: ["React", "Vite", "Tailwind css"],
            code_link: "/",
            live_link: "/https://zora-ao.github.io/laptop_recommendation"
        },
    ]

    return (
        <div className="py-10 inter">
            <h1 className="text-4xl text-center font-bold">My Projects</h1>

            <div className="flex flex-wrap gap-4 justify-evenly mt-8">
                {projects.map((project) => (
                    <div className="flex flex-col  w-[350px] border border-white rounded text-white pb-4">
                        <img 
                        className="h-[200px]"
                        src={project.src}
                        alt="" />
                        <div className="px-4 my-8">
                            <h1 className="my-4 text-lg font-semibold">{project.title}</h1>
                            <p>
                                {project.details}
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-x-2 gap-y-2 px-4 mb-8">
                            {project.tech.map((item) => (
                                <span className="border px-4 py-2 rounded-full text-sm">
                                    {item}
                                </span>
                            ))}
                        </div>

                        <div className="px-4 my-4 flex gap-x-2 text-sm mt-auto">
                            <button className="flex gap-2 items-center border border-gray-200 px-3 py-2 rounded-lg">
                                <FiGithub />
                                <a href={project.code_link}>Code</a>
                            </button>

                            <button className="flex gap-2 items-center bg-white text-black px-3 py-2 rounded-lg">
                                <FaExternalLinkAlt />
                                <a href={project.live_link}>Live Demo</a>
                            </button>
                        </div>
                    </div>
                ))}

                
            </div>
        </div>
    )
}

export default Projects
