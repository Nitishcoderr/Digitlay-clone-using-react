import React from 'react'
import '../Styles/Portfolio.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {SlideshowLightbox,initLightboxJS} from 'lightbox.js-react'
import 'lightbox.js-react/dist/index.css'
import { useEffect } from 'react';

const PortfolioCard = ({projectData}) => {
  AOS.init();


  useEffect(() => {
    initLightboxJS("work");
  }, []);
  return (
    <>

     <section className="card-section">
        {
            projectData.map((curElem)=>{
                const {id,image,about} = curElem;
                return (
                    <div data-aos="zoom-in"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000" key={id} className="pro-card">
                      <SlideshowLightbox className="container grid grid-cols-3 gap-2 mx-auto">
                      <img className="w-full rounded" src={image} alt='work' />
                      </SlideshowLightbox> 
                      <p className='project-about'>{about}</p>
                    </div>
                )
            })
        }
     
        </section> 
    </>
  )
}

export default PortfolioCard
