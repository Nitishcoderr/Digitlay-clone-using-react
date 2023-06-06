import React from 'react'
import ServiceCard from './ServiceCard'
import '../Styles/Service.css'

const Service = ({data}) => {
  return (
    <>
    <section className='service-section p-5' style={{backgroundColor:"#E5F0FD"}}>
        <div className='header'>
        <div class="service-header pb-md-4 mx-auto text-center">
      <h2>Our Services</h2>
      <p>At Digitlay, we thrive -on delivering quality and suitable solutions that <br />
      meet your business requirements.</p>
    </div>
    </div>

        
      
    <ServiceCard data={data}/>
    </section >
    </>
  )
}

export default Service
