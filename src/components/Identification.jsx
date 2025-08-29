import { details } from 'motion/react-client';
import profile from '../assets/profile_pic.jpg';

const Identification = () => {

    const boxInfo = [
        {title: "Age", details: "18 Years Old"},
        {title: "Course", details: "Computer Science"},
        {title: "Year", details: "First Year"}
    ]

    return (
        <div className='flex flex-col items-center justify-between'>
            <img 
            className='w-[250px] h-[250px] my-10 rounded-full shadow-2xl'
            src={profile} 
            alt="Profile picture" />

            <div className='flex gap-x-4 inter'>
                {boxInfo.map((info, index) => (
                    <div key={index} className=' px-4 py-3 border text-center rounded shadow-lg w-[150px]'>
                        <h1 className='text-sm my-2'>{info.title}:</h1>
                        <p className='font-semibold text-sm'>{info.details}</p>
                    </div>
                ))}
            </div>
        
        </div>
    )
}

export default Identification
