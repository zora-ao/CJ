import profile from '../assets/profile_pic.jpg';
import { BoxReveal } from "../components/magicui/box-reveal";

const Identification = () => {
    return (
        <div>
            <div className='w-[350px] h-[400px] rounded p-4 group border'>
                <div className='flex flex-col gap-x-2 text-center'>
                    <img 
                    className='h-[100px] w-[100px] flex mx-auto rounded-full'
                    src={profile} 
                    alt="Profile picture" />

                    <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                        <span>Name:</span>
                        <h1>Carl Jasper Ramos</h1>
                    </BoxReveal>

                    <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                        <span>Age:</span>
                        <h1>18 Years Old</h1>
                    </BoxReveal>
                    
                </div>
            </div>
        </div>
    )
}

export default Identification
