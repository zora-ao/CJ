import { Github } from "lucide-react";
import Appwrite from "../assets/Appwrite.svg";
import CSS3 from "../assets/CSS3.svg";
import Git from "../assets/Git.svg";
import GitHub from "../assets/GitHub.svg";
import HTML5 from "../assets/HTML5.svg";
import Tailwind from "../assets/Tailwind CSS.svg";
import Vercel from "../assets/Vercel.svg";
import WordPress from "../assets/WordPress.svg";
import ReactSvg from "../assets/react.svg";
import JavaScript from "../assets/JavaScript.svg";
import Vite from "../assets/Vite.js.svg";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../components/magicui/tooltip";

const Skills = () => {
  const techTools = [
    { name: "HTML", img: HTML5, color: "#FF6363" },
    { name: "CSS", img: CSS3, color: "#3674B5" },
    { name: "Tailwind CSS", img: Tailwind, color: "#3674B5" },
    { name: "JavaScript", img: JavaScript, color: "#FFDE63" },
    { name: "React", img: ReactSvg, color: "#578FCA" },
    { name: "Vite", img: Vite, color: "#AE75DA" },
    { name: "Git", img: Git, color: "#F97A00" },
    { name: "Appwrite", img: Appwrite, color: "#FF0066" },
    { name: "Vercel", img: Vercel, color: "#37353E" },
    { name: "WordPress", img: WordPress, color: "#44444E" },
  ];

  return (
    <div
      id="skills"
      className="md:h-screen pt-20 inter flex flex-col bg-white dark:bg-neutral-950 transition-colors duration-300"
    >
      {/* Section Header */}
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-neutral-800"></div>
          <span className="text-neutral-500 tracking-wider uppercase text-sm">
            Skills
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-neutral-800"></div>
        </div>
        <p className="text-center">Learning and improving skills everyday.</p>
      </div>

      {/* Skill Cards */}
      <div className="grid md:grid-cols-5 grid-cols-3 gap-x-4 md:gap-x-10 gap-y-12 md:w-1/2 mx-auto">
        {techTools.map((tool, index) => (
          <div key={index} className="group">
            <Tooltip key={index}>
              <TooltipTrigger>
                <div
                  style={{ boxShadow: `0px 0px 15px ${tool.color}` }}
                  className="bg-white/20 dark:bg-neutral-800/50 shadow-2xl rounded mx-auto w-[80px] h-[80px] border  px-6 py-6 
                             hover:bg-gray-300/80 dark:hover:bg-gray-700/50 transition-colors duration-300 flex items-center justify-center"
                >
                  <img
                    src={tool.img}
                    alt={tool.name}
                    className="group-hover:scale-125 duration-200 transition-all ease-in-out w-12 h-12"
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent>{tool.name}</TooltipContent>
            </Tooltip>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
