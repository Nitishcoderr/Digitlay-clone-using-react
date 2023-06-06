import React from 'react'
import androidimg from '../Assets/asset 5.png'
import appleimg from '../Assets/asset 6.png'
import reactimg from '../Assets/asset 7.png'
import websiteimg from '../Assets/asset 8.png'
import uiux from '../Assets/asset 9.png'
import digitalimg from '../Assets/asset 10.png'
import '../Styles/ServiceCard.css'


const ServiceCard = ({data}) => {
  return (
    <>
      <div className="container main-container">
      <div class="cardsec">
  <div class="row">
    <div class="col-md-4 cardImg">
      <img src={androidimg} alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h2 class="card-title">{data.android.title}</h2>
        <p class="card-text">{data.android.about}</p>
      </div>
    </div>
  </div>
</div>
        
        <div class="cardsec">
  <div class="row">
    <div class="col-md-4 cardImg">
      <img src={appleimg} alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <h2 class="card-title">{data.iosapp.title}</h2>
        <p class="card-text">{data.iosapp.about}</p>
      </div>
    </div>
  </div>
</div>
        
        <div class="cardsec">
  <div class="row">
    <div class="col-md-4 cardImg">
      <img src={reactimg} alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <h2 class="card-title">{data.reactnativeapp.title}</h2>
        <p class="card-text">{data.reactnativeapp.about}</p>
      </div>
    </div>
  </div>
</div>
        
        <div class="cardsec">
  <div class="row">
    <div class="col-md-4 cardImg">
      <img src={websiteimg} alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <h2 class="card-title">{data.websitewevelopment.title}</h2>
        <p class="card-text">{data.websitewevelopment.about}</p>
      </div>
    </div>
  </div>
</div>
        
        <div class="cardsec">
  <div class="row">
    <div class="col-md-4 cardImg">
      <img src={uiux} alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <h2 class="card-title">{data.ui.title}</h2>
        <p class="card-text">{data.ui.about}</p>
      </div>
    </div>
  </div>
</div>
        
        <div class="cardsec">
  <div class="row">
    <div class="col-md-4 cardImg">
      <img src={digitalimg} alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <h2 class="card-title">{data.digitalmarketing.title}</h2>
        <p class="card-text">{data.digitalmarketing.about}</p>
      </div>
    </div>
  </div>
</div>

      </div>
    </>
  )
}

export default ServiceCard
