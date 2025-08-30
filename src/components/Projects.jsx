import { details, div, h1 } from "motion/react-client"
import cakeHero from "../01_cake-shop/cakeHero.png"
import cakeBanner from "../01_cake-shop/cakeBanner.png"
import cakeProducts from "../01_cake-shop/cakeProducts.png"
import cakeAbout from "../01_cake-shop/cakeAbout.png"
import cakeContact from "../01_cake-shop/cakeAbout.png"
import cakeCart from "../01_cake-shop/cakeCart.png"

import recipeSearch from "../02_recipe-site/recipeSearch.png"
import recipeDishes from "../02_recipe-site/recipeDishes.png"
import recipeFavs from "../02_recipe-site/recipeFavs.png"
import dish from "../02_recipe-site/dish.png"
import dishProc from "../02_recipe-site/dishProc.png"

import laptopHero from "../03_laptop-reco/laptopHero.png"
import laptopTips from "../03_laptop-reco/laptopTips.png"
import laptopList from "../03_laptop-reco/laptopList.png"
import laptopSpecs from "../03_laptop-reco/laptopSpecs.png"
import laptopDetails from "../03_laptop-reco/laptopDetails.png"

import ProjectCard from "./ProjectCard"

const Projects = () => {

    const projects = [
        {
            title: "Cake Shop",
            slides: [cakeHero, cakeBanner, cakeProducts, cakeAbout, cakeContact, cakeCart],
            details: "A full-featured e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
            tech: ["HTML", "CSS", "JavaScript"],
            code_link: "/",
            live_link: "https://zora-ao.github.io/e-commerce/index.html#hero"
        },{
            title: "Recipe Site Website",
            slides: [recipeSearch, recipeDishes, recipeFavs, dish, dishProc],
            details: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
            tech: ["React", "Vite", "Tailwind css", "Appwrite"],
            code_link: "/",
            live_link: "/https://recipes-rust-three.vercel.app/"
        },{
            title: "Laptop Recommendations",
            slides: [laptopHero, laptopTips, laptopList, laptopSpecs, laptopDetails],
            details: "A responsive portfolio website showcasing modern design principles and smooth animations. Built with performance and accessibility in mind.",
            tech: ["React", "Vite", "Tailwind css"],
            code_link: "/",
            live_link: "/https://zora-ao.github.io/laptop_recommendation"
        },
    ]

    return (
        <div className="py-10 inter px-4">
            <h1 className="text-4xl text-center font-bold">My Projects</h1>

            <ProjectCard projects={projects} />
        </div>
    )
}

export default Projects
