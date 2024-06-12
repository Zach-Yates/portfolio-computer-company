import React, { useState } from 'react'
import './Finish.css'
import titanium from '../../assets/titanium.jpeg'
import blue_titanium from '../../assets/blue-titanium.jpeg'
import white_titanium from '../../assets/white-titanium.jpeg'
import black_titanium from '../../assets/black-titanium.jpeg'

const Finish = () => {

    const colors = ['Natural Titanium','Blue Titanium', 'White Titanium', 'Black Titanium'];

    const [colorText,setColorText] = useState(colors[0]);

    const [selected, setSelected] = useState(false);

    const HandleMouseOver = (number) =>{
        setColorText(colors[number]);
    }

    const HandleClick = ()=>{
        console.log(selected);
        setSelected(!selected);
    }


  return (
    <div className='finish'>

        <div className="title">
            <h2>
                <span className='main'>Finish. </span> <span className='sub'>Pick your favorite.</span>
            </h2>
        </div>

        <div className="color-text">
            <span className='main'>Color - <span>{colorText}</span></span>
        </div>

        <ul className="color-selectors">
            <li><button className={`${selected? '':'blue-border'}`} onClick={HandleClick}><img src={titanium} onMouseOver={() => HandleMouseOver(0)}></img></button></li>
            <li><button className={`${selected? '':'blue-border'}`} onClick={HandleClick}><img src={blue_titanium} onMouseOver={()=> HandleMouseOver(1)}></img></button></li>
            <li><button className={`${selected? '':'blue-border'}`} onClick={HandleClick}><img src={white_titanium} onMouseOver={()=> HandleMouseOver(2)}></img></button></li>
            <li><button className={`${selected? '':'blue-border'}`} onClick={HandleClick}><img src={black_titanium} onMouseOver={()=> HandleMouseOver(3)}></img></button></li>
        </ul>
    </div>
  )
}

export default Finish
