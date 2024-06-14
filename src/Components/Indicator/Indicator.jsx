import React from 'react'
import './Indicator.css'

const Indicator = ({currentIndex, myIndex}) => {

    if(currentIndex == myIndex){
        return(
            <div className='indicator-active'></div>
        )
    }
      return (
        <div className='indicator'></div>
      )
    }
    
    export default Indicator
