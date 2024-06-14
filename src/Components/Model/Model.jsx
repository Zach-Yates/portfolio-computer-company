import React, { useState } from 'react'
import './Model.css'
import { CiCirclePlus } from "react-icons/ci";
import ModelButton from '../ModelButton/ModelButton';
import SectionTitle from '../SectionTitle/SectionTitle';
import { IconContext } from 'react-icons';


const Model = ({activeIndex,setActiveIndex}) => {

  const HandleClick =()=>{
    // console.log("click");
  }

  return (
    <div className='model'>
      
      <SectionTitle main={"Model. "} sub={"Which is best for you?"}/>

      <ModelButton isActive={activeIndex === 0} model={"iPhone 15 Pro"} display={"6.1-inch display'"} click={()=>setActiveIndex(0)}/>
      <ModelButton isActive={activeIndex === 1} model={"iPhone 15 Pro Max"} display={"6.7-inch display'"} click={()=>setActiveIndex(1)}/>

      <div className='button-container'>
          <button className='help-button' onClick={HandleClick}>

          <div className="top">
              <h3>Need help choosing a model?</h3>
              <CiCirclePlus />
          </div>
          <p>Explore the differences in screen size and battery life.</p>

          </button>
        </div>

    </div>
  )
}

export default Model
