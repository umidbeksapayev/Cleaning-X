import React from 'react'
import CallImg from '../../assets/Hero_call.svg'
import Input from './Input'
const Contact = () => {
  return (
    <div className='sm:text-start xl:flex bg-[#F7F9FC] py-30'>
        <div className='w-150 pr-30 pl-10 mt-20'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-[#211F54]'>
                Contact Us
            </h1>
            <p className='mt-4 text-base leading-7 text-[#6E7191]'>
                In dignissim euismod pretium amet enim a eu nam ut urna 
                accumsan pellentesque lacus duis pharetra eutortor.
            </p>
            <div className="flex items-center  md:justify-start my-10">
                        <img className="mr-3 w-15 h-15" src={CallImg} alt="Call icon" />
                        <div className="flex flex-col items-start">
                          <p className="uppercase text-stone-700 text-sm">Call us now</p>
                          <h3 className="text-lg sm:text-xl font-bold">(414) 567 - 2100</h3>
                        </div>
            </div>
            <hr className='mb-20 border-[#DCDDEB]' />
             <h1 className='text-xl md:text-2xl lg:text-3xl font-bold text-[#211F54]'>
               Not convinced yet?
            </h1>
            <p className='mt-4 text-base leading-7 text-[#6E7191]'>
                Massa bibendum consectetur maurisid gravida purus,
                 dolor dui amet morbi non nunc urna purus diam.
            </p>

            <button className=" mt-15 rounded-2xl border border-gray-200 bg-white px-6 py-4 font-semibold text-[#211F54] shadow-sm">
              Browse articles
            </button>
        </div>
        <div className='bg-white py-20 px-10 rounded-2xl'>
            <Input label1={'Full name'} label2={'Phone number'}/>
            <Input label1={'Adress'} label2={'Email'}/>
            <Input label1={'Requested service'} label2={'Day of service'}/>
            <div className='flex flex-col gap-5 mb-10'>
            <label htmlFor="">Add a node</label>
            <textarea rows={5} type="text" className='shadow-[0px_2px_12px_0px_#14142B14] px-5 py-3.5 rounded-xl outline-none' />
        </div>
         <button className="rounded-2xl bg-blue-600 px-6 py-4 font-semibold text-white shadow-sm">
              Submit message
            </button>
        </div>
    </div>
  )
}

export default Contact