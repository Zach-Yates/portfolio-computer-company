import React from 'react'
import './StorageButton.css'

const StorageButton = ({isActive,space,click}) => {
if(isActive){
    return (
        <div className='button-container'>
            <button className='storage-button active'><span className='storage-space'>{space}</span><span className='storage-postfix'>GB</span></button>
        </div>
      )
}
  return (
    <div className='button-container'>
        <button className='storage-button' onClick={click}><span className='storage-space'>{space}</span><span className='storage-postfix'>GB</span></button>
    </div>
  )
}

export default StorageButton
