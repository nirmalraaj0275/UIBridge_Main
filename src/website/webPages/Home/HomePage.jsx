import AboutUs from '@/website/webComponents/Aboutus'
import Businessmodel from '@/website/webComponents/Businessmodel'
import Capabilities from '@/website/webComponents/Capabitity'
import Contactus from '@/website/webComponents/Contactus'
import HomeHero from '@/website/webComponents/HomeHero'
import Industries from '@/website/webComponents/Industries'
import LifeatUI from '@/website/webComponents/LifeatUI'
import Offering from '@/website/webComponents/Offering'
import CalibrationPreview from '@/website/webComponents/Caliration'
import CareersPreview from '@/website/webComponents/Career'
// import Blogs from '@/website/webComponents/Blogs'
import React from 'react'

const HomePage = () => {
  return (
    <div className="">

      <section id="home">
        <HomeHero />
      </section>

      <section id="about">
        <AboutUs />
      </section>

      <section id="capabilities">
        <Capabilities />
      </section>

      <section id="industries">
        <Industries />
      </section>

      <section id="offerings">
        <Offering />
      </section>

      <section id="business">
        <Businessmodel />
      </section>

      <section id="calibration-preview">
        <CalibrationPreview />
      </section>

      {/* <section id="blogs">
        <Blogs />
      </section> */}

      <section id="life">
        <LifeatUI />
      </section>

      <section id="careers">
  <CareersPreview />
</section>


      <section id="contact">
        <Contactus />
      </section>

    </div>
  )
}

export default HomePage
