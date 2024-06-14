import React from 'react'
import './ModelButton.css'

const ModelButton = ({isActive,model,display,click}) => {

if(isActive){
    return (
        <div className='button-container'>
            <button className='model-button active'>
    
            <div className="left">
                <h3>{model}</h3>
                <p>{display}</p>
            </div>
    
            <p className='right'>Contact us to learn about available financing options.</p>
    
            </button>
        </div>
      )
}
  return (
    <div className='button-container'>
        <button className='model-button' onClick={click}>

        <div className="left">
            <h3>{model}</h3>
            <p>{display}</p>
        </div>

        <p className='right'>Contact us to learn about available financing options.</p>

        </button>
    </div>
  )
}

export default ModelButton
