import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { CgMail } from "react-icons/cg";
import profile from '../assets/profile_pic.jpg';
import { AnimatedGridPattern } from "../components/magicui/animated-grid-pattern";

const Hero = () => {
    return (
        <section className="flex h-screen justify-evenly items-center">
            
            <div className="w-1/2 inter">
                <h1 className="text-6xl">Hi, I'm Carl</h1>
                <h2 className="text-2xl my-2">Full Stack Web Developer</h2>

                <p>
                    I create beautiful, responsive web applications using modern technologies. 
                    Passionate about clean code, user experience, and bringing ideas to life through development.
                </p>

                <div className="flex items-center gap-x-2 my-8">
                    <button className="bg-black text-white px-3 py-2 rounded">View My Work</button>
                    <button className="border border-gray-300 px-3 py-2 rounded">Get In Touch</button>
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
                className="w-[400px] h-[400px] rounded-full"
                src={profile} 
                alt="Profile Picture" />
            </div>
        </section>
    )
}

export default Hero
