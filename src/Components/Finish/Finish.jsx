import React, { useState } from 'react'
import './Finish.css'
import titanium from '../../assets/titanium.jpeg'
import blue_titanium from '../../assets/blue-titanium.jpeg'
import white_titanium from '../../assets/white-titanium.jpeg'
import black_titanium from '../../assets/black-titanium.jpeg'
import FinishSelector from '../FinishSelector/FinishSelector'
import SectionTitle from '../SectionTitle/SectionTitle'

const Finish = () => {

    const finishes = ['Natural Titanium','Blue Titanium', 'White Titanium', 'Black Titanium'];

    const [finish,setFinish] = useState(finishes[0]);
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
            <span className='main'>Color - <span>{potentialFinish}</span></span>
        </div>

        <ul className="color-selectors">
            <FinishSelector isActive={finish === finishes[0]} finishImage={titanium} onSel={() => HandleClick(0)} onMouse={()=>HandleMouseOver(0)}/>
            <FinishSelector isActive={finish === finishes[1]} finishImage={blue_titanium} onSel={() => HandleClick(1)} onMouse={()=>HandleMouseOver(1)}/>
            <FinishSelector isActive={finish === finishes[2]} finishImage={white_titanium} onSel={() => HandleClick(2)} onMouse={()=>HandleMouseOver(2)}/>
            <FinishSelector isActive={finish === finishes[3]} finishImage={black_titanium} onSel={() => HandleClick(3)} onMouse={()=>HandleMouseOver(3)}/>
        </ul>
        
    </div>
  )
}

export default Finish
