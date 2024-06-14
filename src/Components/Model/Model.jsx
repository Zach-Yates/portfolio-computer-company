import React, { useState } from 'react'
import './Model.css'
import { CiCirclePlus } from "react-icons/ci";
import ModelButton from '../ModelButton/ModelButton';
import SectionTitle from '../SectionTitle/SectionTitle';


const Model = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='model'>
      
      <SectionTitle main={"Model. "} sub={"Which is best for you?"}/>

      <ModelButton isActive={activeIndex === 0} model={"iPhone 15 Pro"} display={"6.1-inch display'"} click={()=>setActiveIndex(0)}/>
      <ModelButton isActive={activeIndex === 1} model={"iPhone 15 Pro Max"} display={"6.7-inch display'"} click={()=>setActiveIndex(1)}/>

      <div className='button-container'>
          <button className='help-button'>

          <div className="top">
              <h3>Need help choosing a model?</h3>
              <CiCirclePlus className='icon'/>
          </div>
          <p>Explore the differences in screen size and battery life.</p>

          </button>
        </div>

    </div>
  )
}

export default Model
