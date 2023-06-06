import React from 'react'
import aboutMainImg from '../Assets/asset 4.jpeg'
import '../Styles/Aboutmain.css'
const AboutMain = ({mainabout}) => {
  return (
    <>
      <section className='about-main'>
        <div className="container">
        <div className="mb-3" >
  <div className="row g-0">
    
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Choose Digitlay - The Best App Development Company <br/> in India</h5>
        <span>Collaborate with Digitlay to grow your digital footprint across all platforms</span>
        <p className="card-text">Digitlay has multiple years of experience in the field of app development and has helped hundred of clients to make their mark on various digital platforms. Our team specializes in creating unique solutions which will meet all your long term business goals and objectives.</p>
       <a href="">Explore Now</a>
      </div>
    </div>
    <div className="col-md-4 aboutmainimg">
      <img src={aboutMainImg} className="img-fluid w-100" alt="..."/>
    </div>
  </div>
</div>
        </div>
      </section>
    </>
  )
}

export default AboutMain
