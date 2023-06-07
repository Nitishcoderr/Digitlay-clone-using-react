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
      <div className="main-container">
      <div className="cardsec">
  <div className="row">
    <div className="col-md-4 cardImg">
      <img src={androidimg} alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h2 className="card-title">{data.android.title}</h2>
        <p className="card-text">{data.android.about}</p>
      </div>
    </div>
  </div>
</div>
        
        <div className="cardsec">
  <div className="row">
    <div className="col-md-4 cardImg">
      <img src={appleimg} alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
      <h2 className="card-title">{data.iosapp.title}</h2>
        <p className="card-text">{data.iosapp.about}</p>
      </div>
    </div>
  </div>
</div>
        
        <div className="cardsec">
  <div className="row">
    <div className="col-md-4 cardImg">
      <img src={reactimg} alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
      <h2 className="card-title">{data.reactnativeapp.title}</h2>
        <p className="card-text">{data.reactnativeapp.about}</p>
      </div>
    </div>
  </div>
</div>
        
        <div className="cardsec">
  <div className="row">
    <div className="col-md-4 cardImg">
      <img src={websiteimg} alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
      <h2 className="card-title">{data.websitewevelopment.title}</h2>
        <p className="card-text">{data.websitewevelopment.about}</p>
      </div>
    </div>
  </div>
</div>
        
        <div className="cardsec">
  <div className="row">
    <div className="col-md-4 cardImg">
      <img src={uiux} alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
      <h2 className="card-title">{data.ui.title}</h2>
        <p className="card-text">{data.ui.about}</p>
      </div>
    </div>
  </div>
</div>
        
        <div className="cardsec">
  <div className="row">
    <div className="col-md-4 cardImg">
      <img src={digitalimg} alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
      <h2 className="card-title">{data.digitalmarketing.title}</h2>
        <p className="card-text">{data.digitalmarketing.about}</p>
      </div>
    </div>
  </div>
</div>

      </div>
    </>
  )
}

export default ServiceCard
