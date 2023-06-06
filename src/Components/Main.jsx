import React from 'react'
import MainBanner from './MainBanner'
import AboutMain from './AboutMain'
import Service from './Service'
import Hiring from './Hiring'
import Experties from './Experties'
import data from '../Data/data.json'


const Main = () => {
  return (
    <>
      <MainBanner/>
      <AboutMain/>
      <Service data={data}/>
      <Hiring data={data}/>
      <Experties/>
    </>
  )
}

export default Main
