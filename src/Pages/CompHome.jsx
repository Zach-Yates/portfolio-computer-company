import React from 'react'
import './CompHome.css'
import CompNav from '../Components/Navbar/CompNav'
import CompFooter from '../Components/Footer/CompFooter'
import comp_pic from '../assets/apple-home.png'

const CompHome = () => {
  return (
    <div className='comp-home'>
      <CompNav/>
      <div className='home-main'>
        <img src={comp_pic}/>
        <h2>Store Hours</h2>
        <h3>rogers: monday - friday: 9:00 am - 6:00 pm, saturday: 10:00 am - 2:00 pm</h3>
      </div>
      
      <CompFooter/>
    </div>
  )
}

export default CompHome
