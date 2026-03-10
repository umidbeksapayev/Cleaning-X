import React from 'react'
import BG from '../../assets/bg.svg'
import CallImg from '../../assets/Hero_call.svg'
const Covid = () => {
  return (
    <div className='bg-[#211F54] rounded-2xl sm:text-center xl:flex mt-30'>
        <img src={BG} alt="bg" />
        <div className="text-center md:text-left max-w-xl text-white  sm:ml-10 xl:ml-20 mt-30  xl:mr-20">
                <h1 className=" px-4 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                  We follow guidelines to keep you safe from the COVID-19 virus
                </h1>
        
                <p className=" px-4 mt-5 text-base sm:text-lg leading-7">
                  Lobortis mattis odio leo eget mauris met aliquet semper molestie sollicitudin congue massa mauris lectus.
                </p>
        
                <div className=" p-4 mt-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-center md:justify-start">
                  <button className="bg-blue-600 text-white px-5 py-3 rounded-2xl">
                    Get a free quote
                  </button>
        
                  <div className="flex items-center justify-center md:justify-start">
                    <img className="mr-3 w-15 h-15" src={CallImg} alt="Call icon" />
                    <div className="flex flex-col items-start">
                      <p className="uppercase text-sm">Call us now</p>
                      <h3 className="text-lg sm:text-xl font-bold">(414) 567 - 2100</h3>
                    </div>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default Covid