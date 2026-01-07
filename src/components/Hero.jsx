import { FiGithub, FiLinkedin } from "react-icons/fi";
import { CgMail } from "react-icons/cg";
import profile from "../assets/profile_pic.jpg";
import { useTheme } from "../contexts/themeContext";
import Button from "./Button";
import { Highlighter } from "../components/magicui/highlighter";

const Hero = () => {

  return (
    <section
      id="home"
      className="flex flex-wrap md:h-screen justify-center md:justify-evenly items-center scroll-mt-40 mt-32 md:mt-0 px-4 bg-white dark:bg-neutral-950 transition-colors duration-300"
    >
      {/* Text Section */}
      <div className="md:w-1/2 inter">
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, I'm Carl
        </h1>

        {/* Title with Magic UI (desktop) + CSS fallback (mobile) */}
        <div className="my-4">
          <h2 className="text-2xl md:text-3xl font-semibold">
            {/* Desktop: Magic UI Highlighter */}
            <span className="md:inline-block">
              <Highlighter action="underline" color="yellow">
                Website Developer
              </Highlighter>
            </span>

            
          </h2>
        </div>

        <p className="max-w-xl text-base md:text-lg">
          I create beautiful, responsive web applications using modern
          technologies. Passionate about clean code, user experience,
          and bringing ideas to life through development.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-4 my-8">
          <Button
            value="View My Work"
            bgColor="bg-black"
            textColor="text-white"
          />
          <Button
            value="Get In Touch"
            bgColor="bg-white"
            textColor="text-black"
          />
        </div>

        {/* Social Icons */}
        <ul className="flex items-center gap-x-8 text-2xl pb-4">
          <li className="cursor-pointer hover:scale-110 transition">
            <a href="https://github.com/zora-ao">
              <FiGithub />
            </a>
          </li>
          <li className="cursor-pointer hover:scale-110 transition">
            <a href="https://www.linkedin.com/in/carl-jasper-ramos-4262613a5/">
              <FiLinkedin />
            </a>
          </li>
          <li className="cursor-pointer hover:scale-110 transition">
            <a href="mailto:carljasperramos5@gmail.com">
              <CgMail />
            </a>
          </li>
        </ul>
      </div>

      {/* Image Section */}
      <div>
        <img
          className="w-[220px] h-[220px] md:w-[250px] md:h-[250px] my-10 rounded-full shadow-2xl"
          src={profile}
          alt="Profile picture"
        />
      </div>
    </section>
  );
};

export default Hero;
