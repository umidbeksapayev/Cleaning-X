import React from "react";
import logo from '../../assets/Logo_.svg'
const Footer = () => {
  return (
    <footer className=" mt-20  py-16">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        
        <div>
          <h2 className="text-2xl font-bold text-[#211F54] mb-4">
            Quality cleaning for your home
          </h2>

          <p className="text-[#6E7191] leading-7">
            Lorem ipsum dolor sit amet ceturdo adipiscing elit, sed do eiusmod.
          </p>

          <div className="flex gap-4 mt-6">
            <div className="w-10 h-10 bg-gray-200 rounded"></div>
            <div className="w-10 h-10 bg-gray-200 rounded"></div>
            <div className="w-10 h-10 bg-gray-200 rounded"></div>
            <div className="w-10 h-10 bg-gray-200 rounded"></div>
            <div className="w-10 h-10 bg-gray-200 rounded"></div>
          </div>
        </div>

       
        <div>
          <h3 className="text-xl font-bold text-[#211F54] mb-4">Contact us</h3>

          <p className="text-[#6E7191] leading-7">
            1827 Nickel Road, Los Angeles, CA, 90017, United States
          </p>

          <p className="mt-4 text-[#6E7191]">(414) 567 - 2109</p>

          <p className="mt-2 text-[#6E7191]">contact@cleaning.com</p>
        </div>

      
        <div>
          <h3 className="text-xl font-bold text-[#211F54] mb-4">Hours</h3>

          <p className="font-semibold text-[#211F54]">
            Monday to Friday
          </p>

          <p className="text-[#6E7191]">
            6:00 AM - 9:00 PM
          </p>

          <p className="mt-4 font-semibold text-[#211F54]">
            Saturday & Sunday
          </p>

          <p className="text-[#6E7191]">
            8:00 AM - 8:00 PM
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-[#211F54] mb-4">
            Get a free estimate
          </h3>

          <p className="text-blue-600 text-2xl font-bold">
            (414) 567 - 2109
          </p>

          <p className="text-[#6E7191] mt-3 leading-7">
            Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do eiusmod.
          </p>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl mt-6">
            Request a free quote
          </button>
        </div>

      </div>

    
      <hr className="border-t border-gray-200 my-12" />

    
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">

        <div className="flex items-center gap-3">
          <img src={logo} alt="" />
        </div>

        <p className="text-[#6E7191] text-sm text-center md:text-right">
          Copyright © Cleaning X | Designed by
          <span className="text-blue-600"> Sapayev Umidbek </span>
         
          
      
        </p>

      </div>

    </footer>
  );
};

export default Footer;