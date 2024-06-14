import React, {useState} from 'react'
import './FinishSelector.css'

const FinishSelector = ({isActive,finishImage, onSel, onMouse}) => {

    if(isActive){
        return (
            <li><button className='blue-border' ><img className='selector-img' src={finishImage} onMouseOver={onMouse}/></button></li>
      )
    }
  return (
        <li><button ><img className='selector-img' src={finishImage} onClick={onSel} onMouseOver={onMouse}/></button></li>
  )
}

export default FinishSelector
