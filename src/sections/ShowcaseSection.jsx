import React from 'react';


const ShowcaseSection = () => {
    return (
        <div id="work" className='app-showcase'>
            <div className='w-full'>

                <div className='showcaselayout'>
                    {/* Left Side - Text Content */}
                    <div className= "first-project-wrapper">

                        <div className="image-wrapper">
                           <img src= "/images/project1.png" alt= "Ryde"/>
                        </div>
                        <div className='text-content'>
                            <h2>On-Demand Rides simple with a powerful User-friendly</h2>
                            <p className='text-white-50 md:text-xl'>description about the app or the project </p>
                        </div>

                    </div>
                    {/* Right Side - Text Content */}

                    <div className='project-list-wrapper overflow-hidden'>
                        <div className='project'>
                            <div className='image-wrapper bg-[#ffefdb]'>
                                <img src='/images/project2.png' alt='Library Mangement'/>
                            </div>
                             <h2>On-Demand Rides simple with a powerful User-friendly</h2>
                        </div>
                        <div className='project'>
                            <div className='image-wrapper bg-[#ffe7eb]'>
                                <img src='/images/project3.png' alt='Library Mangement'/>
                            </div>
                             <h2>On-Demand Rides simple with a powerful User-friendly</h2>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ShowcaseSection;