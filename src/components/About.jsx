import Identification from './Identification'

const About = () => {
    return (
        <div className='h-screen inter flex flex-col justify-center items-center'>
            <h2 className='text-center text-2xl my-4'>About Me</h2>
            <div className='flex justify-evenly'>
                <div className='flex flex-col gap-4 w-1/2'>
                    <p className='indent-5'>With a background in computer science and a passion for creating beautiful, functional web applications, I specialize in 
                        full-stack development using modern JavaScript frameworks and technologies.</p>

                    <p className='indent-5'>My journey began with a curiosity about how websites work, which quickly evolved 
                        into a love for problem-solving and creating digital experiences that make a difference in people's lives.</p>

                    <p className='indent-5'>
                        When I'm not coding, you can find me contributing to open-source projects, 
                        learning new technologies, or sharing knowledge with the developer community through blog posts and mentoring.
                    </p>
                </div>

                
            </div>
        </div>
    )
}

export default About
