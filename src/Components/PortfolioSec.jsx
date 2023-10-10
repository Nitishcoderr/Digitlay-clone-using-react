import React,{useState} from 'react'
import '../Styles/Portfolio.css'
import Project from '../Data/portfolioApi.js'
import PortfolioBtn from './PortfolioBtn'
import PortfolioCard from './PortfolioCard'

const uniqueList = [...new Set(
    Project.map((curElem)=>{
        return curElem.category
    })
),'All',
]

const PortfolioSec = () => {

    const [projectData, setProjectData] = useState(Project)
// eslint-disable-next-line
    const [projectList, setProjectList] = useState(uniqueList)

    const filterItem = (category) =>{
        if(category === 'All'){
            setProjectData(Project)
            return
        }

        const updateList = Project.filter((curElem)=>{
            return curElem.category === category;
        })
        setProjectData(updateList)
    }

  return (
    <section className='portfolio-section'>
        <div className="portfolio-bannner">
            <h1>Portfolio</h1>
        </div>
            <div className='portfolio-mainitems'>
                <p>Get a sight of all the custom web & mobile applications we have successfully delivered using disruptive technologies to solve challenging problems.</p>
        <PortfolioBtn filterItem={filterItem} projectList={projectList}/>
        <PortfolioCard projectData={projectData}/>
        </div>
    </section>
  )
}

export default PortfolioSec
