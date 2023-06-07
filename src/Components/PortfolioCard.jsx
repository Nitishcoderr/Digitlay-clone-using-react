import React from 'react'
import '../Styles/Portfolio.css'

const PortfolioCard = ({projectData}) => {
  return (
    <>

     <section className="card-section">
        {
            projectData.map((curElem)=>{
                const {id,image} = curElem;
                return (
                    <div key={id} className="card">
                    <img src={image} className="card-img-top" alt="img"/>
                    </div>
                )
            })
        }
     
        </section> 
    </>
  )
}

export default PortfolioCard
