import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { CgMail } from "react-icons/cg";
import profile from '../assets/profile_pic.jpg';
import { AnimatedGridPattern } from "../components/magicui/animated-grid-pattern";
import Identification from "./Identification";
import { TypingAnimation } from "../components/magicui/typing-animation";
import { useTheme } from "../contexts/themeContext";
import Button from "./Button";

const Hero = () => {

    const {themeMode} = useTheme();

    return (
        <section className="flex flex-wrap md:h-screen justify-center md:justify-evenly items-center px-6 mt-20 md:mt-0">
            
            <div className="md:w-1/2 inter">
                <h1 className="text-6xl">Hi, I'm Carl</h1>
                <TypingAnimation>
                    Website Developer
                </TypingAnimation>

                <p>
                    I create beautiful, responsive web applications using modern technologies. 
                    Passionate about clean code, user experience, and bringing ideas to life through development.
                </p>

                <div className="flex items-center gap-x-2 my-8">
                    <Button value={"View My Work"} bgColor={"bg-black"} textColor={"text-white"} />
                    <Button value={"View My Work"} bgColor={"bg-white"} textColor={"text-black"} />
                </div>

                <ul className="flex items-center gap-x-8 text-xl">
                    <li>
                        <FiGithub />
                    </li>
                    <li>
                        <FiLinkedin />
                    </li>
                    <li>
                        <CgMail />
                    </li>
                </ul>
            </div>

            
            <Identification />
        
        </section>
    )
}

export default Hero
