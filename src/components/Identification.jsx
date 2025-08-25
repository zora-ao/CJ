import profile from '../assets/profile_pic.jpg';

const Identification = () => {
    return (
        <div>
            <div className='w-[350px] h-[400px] rounded p-4 group border'>
                <div className='flex flex-col gap-x-2 text-center'>
                    <img 
                    className='h-[100px] w-[100px] flex mx-auto rounded-full'
                    src={profile} 
                    alt="Profile picture" />

                    <div className=' h-[50px] overflow-hidden group'>
                        <h2>Name:</h2>
                        <div className='flex gap-x-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-200 ease-in-out'>
                            <h2>
                                Carl Jasper Ramos
                            </h2>
                        </div>

                        <hr className='border' />
                    </div>

                    <div className=' h-[50px] overflow-hidden group'>
                        <h2>Age:</h2>
                        <div className='flex gap-x-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-200 ease-in-out'>
                            <h2>18 years old</h2>
                        </div>

                        <hr className='border' />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Identification
