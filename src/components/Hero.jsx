import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { CgMail } from "react-icons/cg";
import profile from '../assets/profile_pic.jpg';
import { useTheme } from "../contexts/themeContext";
import Button from "./Button";
import { Highlighter } from "../components/magicui/highlighter";

const Hero = () => {

    const {themeMode} = useTheme();

    return (
        <section id="home" className="flex flex-wrap md:h-screen justify-center md:justify-evenly items-center mt-20 md:mt-0">
            
            <div className="md:w-1/2 inter">
                <h1 className="text-6xl">Hi, I'm Carl</h1>
                <div className="my-4">
                    <h2 className="text-3xl font-semibold inline-block">
                        <Highlighter action="underline" color="yellow">
                            Website Developer
                        </Highlighter>
                    </h2>
                </div>

                <p>
                    I create beautiful, responsive web applications using modern technologies. 
                    Passionate about clean code, user experience, and bringing ideas to life through development.
                </p>

                <div className="flex items-center gap-x-2 my-8">
                    <Button value={"View My Work"} bgColor={"bg-black"} textColor={"text-white"} />
                    <Button value={"Get In Touch"} bgColor={"bg-white"} textColor={"text-black"} />
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

            <div>
                <img 
                className='w-[250px] h-[250px] my-10 rounded-full shadow-2xl'
                src={profile} 
                alt="Profile picture" />
            </div>
        
        </section>
    )
}

export default Hero
