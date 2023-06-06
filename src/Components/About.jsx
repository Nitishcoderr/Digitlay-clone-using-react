import React from 'react'
import '../Styles/About.css'
import aboutmainimg from '../Assets/about-us-banner-min.jpg'
import about1 from '../Assets/about-us1 (1).jpg'
import about2 from '../Assets/about-us2.jpg'

const About = () => {
  return (
    <section className='about'>
      <div className="about-main-img">
        <h1>About Us</h1>
      </div>

      <div className="about-upper">
        <h2>We are your powerhouse for Digital Marketing solutions. We make Ideas <br /> happen fast.</h2>
        <p>Digitlay has multiple years of experience in the field of app development and has helped hundreds of clients to make their mark <br /> on various digital platforms. Our team specializes in creating unique solutions which will meet all your long-term business goals <br /> and objectives.</p>
        <p>We are at the very forefront of the app development industry and have been able to maintain top position due to our ability to <br /> adapt according to the present trends that dominate the global market.</p>
        <p>Join hands with our professional team today to avail diverse solutions!</p>
      </div>

{/* all main content */}
      <div className="aboutmain pt-5">
      <div class="row featurette">
      <div class="col-md-7 order-md-2  aboutfirst">
        <h2 >Who We Are:</h2>
        <p>We are Delhi based Digital Marketing Agency that provides digital solutions worldwide. We are a growth-oriented and artistically driven agency dedicated to creating and developing tailored digital solutions for our clients while building strong connections with them. We offer integrated digital marketing services that make it easier to develop and strengthen online existence for your brand across the globe. We have a highly experienced team that can help you in growing your business to ace the industry.</p>
      </div>
      <div class="col-md-5 order-md-1  aboutfirstimg p-4">
        <img src={about1} alt="" />
      </div>
    </div>
      </div>



      <div className="aboutmain mt-3">
      <div class="row featurette">
      <div class="col-md-7 aboutfirst">
        <h2 >What we do:</h2>
        <p>We believe in upscaling client's businesses with our creative vision. We as one of the finest Digital Marketing Agencies in India are committed to providing you with complete services so you “Just give us ideas and we will make your ideas into reality”.</p>
        <p>We: (Create these points into image type)</p>
        <b>Conceptualize:</b>
        <p>Creating your imagination with our expert skills to achieve your goal</p>
        <b>Strategize:</b>
        <p>Forming a solid path for making your concept into reality and getting you a perfect digital solution.</p>
      </div>
      <div class="col-md-5 aboutfirstimg p-4">
        <img src={about2} alt="" />
      </div>
    </div>
      </div>



      <div className="aboutmain p-3">
      <div class="row featurette">
      <div class="col-md-7 order-md-2 aboutthird">
        <b >Communicate:</b>
        <p className=' lh-lg' >Creating transparency by communicating a clear vision to accomplish the planned result at the expected time.</p>
        <b>Design and Innovate:</b>
        <p className='lh-1'>We design as per your need and innovate as per our expertise.</p>
        <b>Integrate:</b>
        <p className='lh-1'>Joining the efforts of our dedicated team and your business to get upshot.</p>
        <b>Accomplish:</b>
        <p className='lh-1'>We make sure to make your idea perfect and the desired outcome.</p>
      </div>
      <div class="col-md-5 order-md-1 aboutfirstimg p-4">
        <img src={about1} alt="" />
      </div>
    </div>
      </div>
      
    </section>
  )
}

export default About
