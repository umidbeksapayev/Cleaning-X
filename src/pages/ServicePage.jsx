import React from 'react'
import Service from '../components/service/Service'
import Img1 from '../assets/Our_img.svg'
import Img2 from '../assets/Our2.svg'
import Img3 from '../assets/Our3.svg'
import Covid from '../components/service/Covid'
export const ServicePage = () => {
  return (
    <section className=''>
         <h1 className='text-[#211F54] text-4xl font-bold text-center my-5 mt-10'>Our Services</h1>
         <div className='mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3'>
            <Service img={Img1} title='House cleaning' pr="Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est." />
            <Service img={Img2} title='Office cleaning' pr="Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est." />
            <Service img={Img3} title='Industrial cleaning' pr="Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est." />
         </div>
         <Covid/>
    </section>
  )
}
