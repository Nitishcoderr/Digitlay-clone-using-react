import React from 'react'
import banner from '../Assets/asset 3.jpeg'

const MainBanner = () => {
  return (
    <>
    <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={banner} className="d-block w-100" alt="banner"/>
    </div>
  </div>
</div>
      
    </>
  )
}

export default MainBanner
