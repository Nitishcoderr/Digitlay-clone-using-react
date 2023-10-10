import React from 'react'
import '../Styles/Portfolio.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const PortfolioCard = ({projectData}) => {
  AOS.init();
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
                    <img  src={image} className="card-img-top" alt="img"/>
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
