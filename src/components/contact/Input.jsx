import React from 'react'

const Input = ({label1,label2}) => {
  return (
    <div className='text-[#211F54] xl:flex gap-20'>
        <div className='flex flex-col gap-5 mb-10'>
            <label htmlFor="">{label1}</label>
            <input type="text" className='shadow-[0px_2px_12px_0px_#14142B14] px-5 py-3.5 rounded-xl outline-none'/>
        </div>
        <div className='flex flex-col gap-5 mb-10'>
            <label htmlFor="">{label2}</label>
            <input type="text" className='shadow-[0px_2px_12px_0px_#14142B14] px-5 py-3.5 rounded-xl outline-none' />
        </div>
    </div>
  )
}

export default Input