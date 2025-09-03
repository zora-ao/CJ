import { Github } from "lucide-react"
import Appwrite from "../assets/Appwrite.svg"
import CSS3 from "../assets/CSS3.svg"
import Git from "../assets/Git.svg"
import GitHub from "../assets/GitHub.svg"
import HTML5 from "../assets/HTML5.svg"
import Tailwind from "../assets/Tailwind CSS.svg"
import Vercel from "../assets/Vercel.svg"
import WordPress from "../assets/WordPress.svg"
import ReactSvg from "../assets/react.svg"
import JavaScript from "../assets/JavaScript.svg"
import Vite from "../assets/Vite.js.svg"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "../components/magicui/tooltip"



const Skills = () => {

    const techTools = [
        {name: "HTML", img: HTML5, color: "#FF6363"},
        {name: "CSS", img: CSS3, color: "#3674B5"},
        {name: "Tailwind CSS", img: Tailwind, color: "#3674B5"},
        {name: "JavaScript", img: JavaScript, color: "#FFDE63"},
        {name: "React", img: ReactSvg, color: "#578FCA"},
        {name: "Vite", img: Vite, color: "#AE75DA"},
        {name: "Git", img: Git, color: "#F97A00"},
        {name: "Github", img: GitHub, color: "#37353E"},
        {name: "Appwrite", img: Appwrite, color: "#FF0066"},
        {name: "Vercel", img: Vercel, color: "#37353E"},
        {name: "WordPress", img: WordPress, color: "#44444E"},
    ]

    return (
        <div id="skills" className='md:h-screen pt-20 inter flex flex-col '>
            <div className="text-center mb-10">
                <h1 className='text-3xl  font-semibold inter'>Technologies that I used</h1>
                <p>Learning and emproving skills everyday. </p>
            </div>

            <div className="grid md:grid-cols-5 grid-cols-3 gap-x-4 md:gap-x-10 gap-y-12 border-black md:w-1/2 mx-auto">
                {techTools.map((tool, index) => (
                    <div key={index} className="group">
                        <Tooltip key={index}>
                            <TooltipTrigger>
                                <div 
                                style={{ boxShadow: `0px 0px 15px ${tool.color}` }}
                                className={`bg-gray-100 shadow-2xl rounded mx-auto w-[80px] h-[80px] border border-black px-6 py-6`}>
                                    <img 
                                    className="group-hover:scale-125 duration-200 transition-all ease-in-out"
                                    src={tool.img} 
                                    alt={tool.name} />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                {tool.name}
                            </TooltipContent>
                        </Tooltip>
                    </div>
                ))}
            </div>

            <div>
                
            </div>
        </div>
    )
}

export default Skills
