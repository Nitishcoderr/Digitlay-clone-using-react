import React from 'react'

const PortfolioCard = ({projectData}) => {
  return (
    <>

     <section className="card-container">
        {
            projectData.map((curElem)=>{
                const {id,image} = curElem;
                return (
                    <div key={id} className="card">
                    <img src={image.default} className="card-img-top" alt="img"/>
                    </div>
                )
            })
        }
     
        </section> 
    </>
  )
}

export default PortfolioCard
