import React from 'react'
import ArticleCard from '../components/article/ArticleCard'
import Img1 from '../assets/article1.svg'
import Img2 from '../assets/article2.svg'

const Articles = () => {
  return (
    <section className=" px-4 py-12  mt-30">
      <div className="mx-auto max-w-7xl">
        
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#211F54]">
            Articles & resources
          </h1>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="rounded-2xl bg-blue-600 px-6 py-4 font-semibold text-white shadow-sm">
              Get a free quote
            </button>
            <button className="rounded-2xl border border-gray-200 bg-white px-6 py-4 font-semibold text-[#211F54] shadow-sm">
              Browse articles
            </button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <ArticleCard
            img={Img1}
            title="8 best vacuum cleaners to clean any mess for your home in 2022"
            desc="Lorem ipsum dolor sit amet conse tetur adip iscing elit justo quis odio sit sit ac port titor sit males."
            date="Jan 28, 2022"
          />

          <ArticleCard
            img={Img2}
            title="How to properly disinfect your phone and other electronics"
            desc="Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit ac port titor sit males."
            date="Feb 1, 2022"
          />
        </div>
      </div>
    </section>
  )
}

export default Articles