import React, { useState } from 'react'
import './Finish.css'

import FinishSelector from '../FinishSelector/FinishSelector'
import SectionTitle from '../SectionTitle/SectionTitle'



const Finish = ({finish,setFinish,finishes}) => {

    const [potentialFinish,setPotentialFinish] = useState(finishes[0]);

    const HandleMouseOver = (number) =>{
        setPotentialFinish(finishes[number]);
    }

    const HandleClick = (number)=>{
        setPotentialFinish(finishes[number]);
        setFinish(finishes[number]);
    }



  return (
    <div className='finish'>

        <SectionTitle main={"Finish. "} sub={"Pick your favorite."}/>

        <div className="color-text">
            <span className='main'>Color - <span>{potentialFinish.name}</span></span>
        </div>

        <ul className="color-selectors">
        {finishes.map(color =>
            <FinishSelector isActive={finish.name === color.name} finishImage={color.location} onSel={() => HandleClick(parseInt(color.index))} onMouse={()=>HandleMouseOver(parseInt(color.index))} key={color.id}/>
        )}

        </ul>
        
    </div>
  )
}

export default Finish
