import React, { useState } from 'react'
import './Model.css'
import { CiCirclePlus } from "react-icons/ci";
import ModelButton from '../ModelButton/ModelButton';
import SectionTitle from '../SectionTitle/SectionTitle';


const Model = ({models,activeIndex,setActiveIndex,setHelping}) => {

  const HandleClick =()=>{
    setHelping(true);
  }


if(models.length > 1){
  return (
    <div className='model'>
      
      <SectionTitle main={"Model. "} sub={"Which is best for you?"}/>

      { models.length > 1 &&
        models.map(model=>(
        <ModelButton isActive={activeIndex === parseInt(model.index)} model={model.name} display={model.display} key={model.id} click={()=>setActiveIndex(parseInt(model.index))}/>
        ))
      }

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

}

export default Model
