import React from 'react'
import './CompHome.css'
import CompNav from '../Components/Navbar/CompNav'
import CompFooter from '../Components/Footer/CompFooter'

import {phones} from '../Components/Phones'

import Iphone from '../Components/Iphone/Iphone'

const CompHome = () => {

  let iphones = Object.values(phones)

  return (
    <div className='comp-home'>
      <CompNav/>
      <div className='home-main'>

      <div className='title'>

        <span className='titl'>Explore the lineup.1</span>
      </div>

        <div className="iphones">
          {iphones.map(iphone=>(
            <Iphone phone={iphone} key={iphone.id}/>
          ))}
        </div>


      </div>
      
      <CompFooter/>
    </div>
  )
}

export default CompHome
