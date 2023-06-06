import React from 'react'
import '../Styles/Experties.css'
import android from '../Assets/asset 15.png'
import ios from '../Assets/asset 16.png'
import php from '../Assets/asset 17.png'
import node from '../Assets/asset 18.png'
import angular from '../Assets/asset 19.png'
import react from '../Assets/asset 20.png'
import flutter from '../Assets/asset 21.png'
import html from '../Assets/asset 22.png'

const Experties = () => {
  return (
    <section className='experties-section container'>
      <div className="left col-lg-6 col-md-6 col-sm-12 d-flex align-items-center">
        <div className="left-content">
            <h2>Technology Expertise</h2>
            <p>Make a mark in the global market by joining hands with Digitlay, the best app development company in India. Take your business to the very next level by collaborating with our team.</p>
        </div>
      </div>
      <div className="right">
        <div className="right-content">
            <ul>
                <div className="first">
                <li><img src={android} alt="" />Android</li>
                <li><img src={ios} alt="" />iOS</li>
                </div>
                <div className='second'>
                <li><img src={php} alt="" />PHP</li>
                <li><img src={node} alt="" />Node Js</li>
                </div>
                
                <div className="third">
                <li><img src={angular} alt="" />Angular Js</li>
                <li><img src={react} alt="" />React Native</li>
                </div>
                
                <div className="forth">
                <li><img src={flutter} alt="" />Flutter</li>
                <li><img src={html} alt="" />HTML 5</li>
                </div>
                
                
            </ul>
        </div>
      </div>
    </section>
  )
}

export default Experties
