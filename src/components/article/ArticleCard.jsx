import React from 'react'

const ArticleCard = ({ img, title, desc, date }) => {
  return (
    <div className="relative">
      <img
        src={img}
        alt={title}
        className="h-70 w-full rounded-xl object-cover md:h-80"
      />

      <div className="relative mx-auto -mt-10 w-[90%] rounded-3xl bg-white p-6 shadow-md md:p-8">
        <h2 className="text-xl md:text-2xl font-bold leading-snug text-[#211F54]">
          {title}
        </h2>

        <p className="mt-4 text-base leading-7 text-[#6E7191]">
          {desc}
        </p>

        <div className="mt-6 flex items-center justify-between">
          <p className="font-semibold text-[#211F54]">{date}</p>
          <div className="h-12 w-12 bg-blue-600"></div>
        </div>
      </div>
    </div>
  )
}

export default ArticleCard