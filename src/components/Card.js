import React, { useEffect, useState } from 'react';
import profile from '../images/face.png'
import {FaEnvelope, FaGithub, FaLinkedin} from 'react-icons/fa'

function Card()
{
    const [isAnimated,setIsAnimated] = useState(false);
    useEffect(() => {
        setIsAnimated(true);
    }, [])
    return (
        <div className={`${isAnimated ? "scale-150" : "translate-x-full translate-y-full"} w-full transform transition duration-1000 ease-in-out`}>
            <div className='flex-auto flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5 drop'>
                <div className= ''>
                    <img className='w-32 mx-auto shadow-xl rounded-full drop-shadow-sm' src={profile} alt='face'/>

                </div>

                <div className='text-center mt-5'>
                    <p className='text-xl sm:2xl text-gray-900'>
                            Aaron Auld
                        </p>

                        <p className='text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2'>
                            Data Science and Business Analytics Major
                        </p>

                    
                        <div className='flex align-center justify-center mt-4'>


                            <a target="_blank" className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300' href="https://github.com/aaronauld">
                                <FaGithub />
                                <span class = 'sr-only'>Github</span>
                            </a>

                            <a target="_blank" className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300' href="https://www.linkedin.com/in/aa2000/">
                                <FaLinkedin />
                                <span class = 'sr-only'>LinkedIn</span>
                            </a>

                        </div>

                </div>
            </div>
        </div>
    )
}

export default Card;