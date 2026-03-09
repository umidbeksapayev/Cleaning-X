import React from 'react'

const AboutCard = ({ img, title, pr }) => {
  return (
    <div className="flex flex-col items-center text-center p-4">
      
      <img
        src={img}
        alt={title}
        className="w-40 md:w-48"
      />

      <h2 className="text-[#211F54] mt-6 text-xl md:text-2xl font-bold">
        {title}
      </h2>

      <p className="text-[#6E7191] mt-3 leading-7 max-w-xs">
        {pr}
      </p>

    </div>
  )
}

export default AboutCard