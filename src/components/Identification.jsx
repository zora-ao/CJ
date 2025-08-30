import { details } from 'motion/react-client';
import profile from '../assets/profile_pic.jpg';
import { useTheme } from '../contexts/themeContext';
import { Highlighter } from "../components/magicui/highlighter";

const Identification = () => {

    const {themeMode} = useTheme();

    const boxInfo = [
        {title: "Age", details: "18 Years Old"},
        {title: "Course", details: "Computer Science"},
        {title: "Year", details: "First Year"}
    ]

    return (
        <div className='flex flex-col items-center justify-between '>
            <img 
            className='w-[250px] h-[250px] my-10 rounded-full shadow-2xl'
            src={profile} 
            alt="Profile picture" />

            <div className='flex md:gap-x-4 gap-x-2 inter'>
                {boxInfo.map((info, index) => (
                    <div key={index} className={`md:px-4 px-2 py-3 text-center rounded shadow-lg md:w-[150px]`}>
                        <h1 className='text-sm my-2'>{info.title}:</h1>
                        <p className='font-semibold text-sm'>
                            <Highlighter action="underline" color="#FF9800">
                                {" "}{info.details}{" "}
                            </Highlighter>
                        </p>
                    </div>
                ))}
            </div>
        
        </div>
    )
}

export default Identification
