import Button from '../components/Button';
import { words } from '../constants'
import HeroExperience from '../components/HeroModels/HeroExperience';

const Hero = () => {
    return (
        <section id ="hero" className= "relative overflow-hidden">
            <div className="absolute top-0 left-0 z-10">
                <img src= "/images/bg.png" alt= "background" />
            </div>

            <div className="hero-layout">
                {/* Left Section : HERO CONTENT */}

                <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                    <div className="flex flex-col gap-7">
                        <div className="hero-text">
                            <h1>Transforming 
                               <span className="slide">
                                 <span className="wrapper">
                                    {words.map((word, index) => (
                                     <span
                                        key={index}
                                        className="flex items-center md:gap-3 gap-1 whitespace-nowrap"
                                 >
                                    <img
                                        src={word.imgPath}
                                        alt="person"
                                        className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                                     />
                                    <span>{word.text}</span>
                                 </span>
                                ))}
                            </span>
                        </span>
                                
                        </h1>
                        <h1>into real digital projects </h1>
                        <h1>that create value for people and teams </h1>

                        </div>
                        <p className='text-white-50 md:text-xl relative z-10'> Hi, I'm Yenni Delgado, I combine psychology and software engineering to support Agile teams, facilitate collaboration, and deliver meaningful digital solutions</p>
                        <Button
                        className="md:w-80 md:h-16 w-60 h-12" 
                        id = "button"
                        text="See my Work"/>
                    </div>
                </header>




                {/* Right Section : 3d model */}

                <figure className='hero-3d-container'>
                    <div className="hero-3d-layout border-red-200 border-2">
                        <HeroExperience/>
                    </div>
                </figure>



            </div>

        </section>
    )
}
export default Hero;