import React from 'react'
import AboutCard from './AboutCard'
import Img1 from '../../assets/About_img.svg'
import Img2 from '../../assets/About2.svg'
import Img3 from '../../assets/About3.svg'

const About = () => {
  return (
    <section id='about' className="py-10">
      <h1 className="text-[#211F54] text-3xl md:text-4xl font-bold text-center">
        About Us
      </h1>

      <p className="text-[#6E7191] text-center text-base md:text-lg leading-7 max-w-3xl mx-auto mt-5">
        Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque
        nisi felis non ultrices massa id egestas quam velit pretium nu.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        <AboutCard
          img={Img1}
          title="1. Schedule online"
          pr="Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n"
        />
        <AboutCard
          img={Img2}
          title="2. Pay online easily"
          pr="Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus eleifend."
        />
        <AboutCard
          img={Img3}
          title="3. Get your house cleaned"
          pr="Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n"
        />
      </div>
    </section>
  )
}

export default About