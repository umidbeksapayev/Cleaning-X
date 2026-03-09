import React from 'react'
const AboutCard = ({img, title, pr}) => {
  return (
     
            <div className='flex flex-col items-center text-center p-4 shadow-md mx-5 mt-20'>
                <img src={img} className='' alt="" />
                <h2 className='text-[#211F54] text-center mt-10 text-2xl font-bold'>{title}</h2>
                <p className='text-[#6E7191] text-center px-20 my-5'>{pr}</p>
            </div>
  )
}

export default AboutCard