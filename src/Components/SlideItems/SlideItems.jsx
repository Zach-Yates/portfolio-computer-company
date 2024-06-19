import React from 'react'
import './SlideItems.css'

const SlideItems = ({pics}) => {

  return (
    <div className='slider'>
        {Object.values(pics).map((image,i)=>
          <div className="slide-item" key={i}>
            <img src={image} ></img>
          </div>)}
    </div>
  )
}

export default SlideItems
