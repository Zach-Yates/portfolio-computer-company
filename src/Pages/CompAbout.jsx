import React from 'react'
import './CompAbout.css'
import CompNav from '../Components/Navbar/CompNav'
import CompFooter from '../Components/Footer/CompFooter'

const CompAbout = () => {
  return (
    <div className='comp-about'>
      <CompNav/>
      <div className="comp-about-main">
        <p className='top'>CompCo has been locally owned and operated in Northwest Arkansas since 1985.  
        With three full-time salespersons, 
        four full-time certified repair technicians and a full-time office manager in addition to three-part time staff members, 
        we are prepared to handle all your business-related as well as personal Apple retail,  repair and training needs.  
        We are also a Meraki Cisco network dealer offering sales, service, design and implementation.
        Not only will you receive professional and courteous service, 
        you will also appreciate the convenience of our store locations in Rogers, Arkansas.</p>

        <div className="location">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3214.7706671830106!2d-94.18905022277804!3d36.31786779473774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c9110230155939%3A0x38ddacbb97351cdc!2s2003%20S%2052nd%20St%2C%20Rogers%2C%20AR%2072758!5e0!3m2!1sen!2sus!4v1717537101132!5m2!1sen!2sus" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>
      </div>
      <CompFooter/>
    </div>
  )
}

export default CompAbout
