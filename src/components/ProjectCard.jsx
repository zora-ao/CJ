import { FiGithub } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useTheme } from "../contexts/themeContext";

const ProjectCard = ({ projects }) => {
  const { themeMode } = useTheme(); // Make sure to call useTheme()

  return (
    <div className="flex flex-wrap gap-x-4 gap-y-10 justify-center mt-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className={`flex flex-col w-[350px] border rounded pb-4 transition-colors duration-300
            bg-black text-white border-gray-800
            ${themeMode === "dark" ? "bg-neutral-900 border-neutral-700" : ""}`}
        >
          {/* Image Slider */}
          <div className="relative w-full h-[250px] overflow-hidden rounded-t">
            <img src={project.slides} alt="Image" className="w-full h-full object-cover absolute top-0 left-0" />
          </div>

          {/* Project Info */}
          <div className="px-4 my-4">
            <h1 className="mb-4 text-lg font-semibold">{project.title}</h1>
            <p>{project.details}</p>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-x-2 gap-y-2 px-4 mb-8">
            {project.tech.map((item, index) => (
              <span
                key={index}
                className="border border-gray-600 px-4 py-2 rounded-full text-sm text-white"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="px-4 my-4 flex gap-x-2 text-sm mt-auto">
            <a
              href={project.code_link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center border border-gray-600 px-3 py-2 rounded-lg hover:bg-white hover:text-black transition-colors duration-300 text-white"
            >
              <FiGithub />
              Code
            </a>

            <a
              href={project.live_link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center px-3 py-2 rounded-lg bg-white hover:bg-black hover:text-white hover:border transition-colors duration-300 text-black"
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
