import { FiGithub } from "react-icons/fi"
import { FaExternalLinkAlt } from "react-icons/fa"
import ImageSlider from "./ImageSlider"


const ProjectCard = ({projects}) => {
    return (
        <div className="flex flex-wrap gap-x-4 gap-y-10 justify-evenly mt-8">
                {projects.map((project, index) => (
                    <div key={index} className="flex flex-col  w-[450px] border border-white rounded text-white pb-4">
                        
                        <ImageSlider images={project.slides} />

                        <div className="px-4 my-8">
                            <h1 className="my-4 text-lg font-semibold">{project.title}</h1>
                            <p>
                                {project.details}
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-x-2 gap-y-2 px-4 mb-8">
                            {project.tech.map((item, index) => (
                                <span key={index} className="border px-4 py-2 rounded-full text-sm">
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
    )
}

export default ProjectCard
