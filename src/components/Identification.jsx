import profile from '../assets/profile_pic.jpg';

const Identification = () => {
    return (
        <div className='flex flex-col items-center justify-between'>
            <img 
            className='w-[250px] h-[250px] my-10 rounded-full shadow-2xl'
            src={profile} 
            alt="Profile picture" />

            <div className='flex gap-x-4 inter'>
                <div className='bg-white px-4 py-3 border text-center rounded shadow-lg w-[150px]'>
                    <h1>Age:</h1>
                    <p className='font-semibold text-sm'>18 Years Old</p>
                </div>

                <div className='bg-white px-4 py-3 border text-center rounded shadow-lg w-[150px]'>
                    <h1 >Course:</h1>
                    <p className='font-semibold text-sm'>Computer Science</p>
                </div>

                <div className='bg-white px-4 py-3 border text-center rounded shadow-lg w-[150px]'>
                    <h1 >Year:</h1>
                    <p className='font-semibold text-sm'>First Year</p>
                </div>
            </div>
        
        </div>
    )
}

export default Identification
