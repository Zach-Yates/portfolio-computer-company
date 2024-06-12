import React from 'react'
import './Model.css'
import { CiCirclePlus } from "react-icons/ci";


const Model = () => {
  return (
    <div className='model'>
      
        <h2>Model. <span>Which is best for you?</span></h2>

        <button className='model-button'>

        <div className="left">

            <h3>iPhone 15 Pro</h3>
            <p>6.1-inch display'</p>
        </div>

        <p className='right'>Contact us to learn about available financing options.</p>

        </button>

        <button className='model-button'>

        <div className="left">

            <h3>iPhone 15 Pro Max</h3>
            <p>6.7-inch display'</p>
        </div>

        <p className='right'>Contact us to learn about available financing options.</p>

        </button>


        <button className='help-button'>
        <div className="top">
            <h3>Need help choosing a model?</h3>
            <CiCirclePlus className='icon'/>
        </div>
        <p>Explore the differences in screen size and battery life.</p>
        </button>

    </div>
  )
}

export default Model
