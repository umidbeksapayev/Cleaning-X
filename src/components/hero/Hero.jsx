import React from 'react'
import CallImg from '../../assets/Hero_call.svg'
import HeroImg from '../../assets/Hero_img.svg'

const Hero = () => {
  return (
    <section className="flex flex-col-reverse items-center gap-10  py-10 md:flex-row md:justify-between ">
      
      <div className="text-center md:text-left max-w-xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#211F54] leading-tight">
          Quality cleaning <br /> for your home
        </h1>

        <p className="text-[#6E7191] mt-5 text-base sm:text-lg leading-7">
          Condimentum mauris sit cursus amet id non neque pharetra nulla ornare
          sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et
          nulla magna lacus penatibus.
        </p>

        <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-center md:justify-start">
          <button className="bg-blue-600 text-white px-5 py-3 rounded-2xl">
            Get a free quote
          </button>

          <div className="flex items-center justify-center md:justify-start">
            <img className="mr-3 w-15 h-15" src={CallImg} alt="Call icon" />
            <div className="flex flex-col items-start">
              <p className="uppercase text-stone-700 text-sm">Call us now</p>
              <h3 className="text-lg sm:text-xl font-bold">(414) 567 - 2100</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center md:w-1/2">
        <img
          src={HeroImg}
          className="w-64 sm:w-80 md:w-full max-w-md xl:max-w-2xl"
          alt="Cleaning service hero"
        />
      </div>
    </section>
  )
}

export default Hero