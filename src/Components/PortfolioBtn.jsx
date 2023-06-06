import React from 'react'
import '../Styles/Portfolio.css'

const PortfolioBtn = ({filterItem,projectList}) => {
  return (
    <>
      <div className="portfoliobtnSection">
        <div className="btn-group">
            {
                projectList.map((curElem)=>(
                    <button key={curElem} className="btn-group-item active" data-bs-toggle="button" aria-pressed="true" aria-disabled="true" onClick={()=>filterItem(curElem)} >
                    {curElem}
                    </button>
                ))
            }
        </div>
      </div>
    </>
  )
}

export default PortfolioBtn
