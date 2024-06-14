import React from 'react'
import './SectionTitle.css'

const SectionTitle = ({main,sub}) => {
  return (
    <div className="section-title">
        <h2>
            <span className='main'>{main}</span> <span className='sub'>{sub}</span>
        </h2>
    </div>
  )
}

export default SectionTitle
