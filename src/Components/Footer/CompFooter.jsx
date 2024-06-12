import React from 'react'
import './CompFooter.css'

const CompFooter = () => {
  return (
    <div className='comp-footer'>
      <p>479-867-5309 | 2024 55th Ave. Suite 12, Rogers, AR 72758</p>
      <p>Copyright © {new Date().getFullYear()} CompCo. All Rights Reserved.</p>
    </div>
  )
}

export default CompFooter
