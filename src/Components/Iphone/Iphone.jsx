import React from 'react'
import './Iphone.css'
import { Link } from 'react-router-dom'


const Iphone = ({phone}) => {

    const finishes = phone.finishes.map((finish,i)=>
    <img className='iphone-finish' src={import.meta.env.BASE_URL + finish.location} key={i}></img>
    )

  return (
    <div className='iphone'>
        <img className='phone-img' src={phone.homeImage}/>
        <ul>
            {finishes}
        </ul>
        <span className='name'>{phone.title}</span>
        <span className='description'>{phone.description}</span>
        <span className='price'>4 Less ${phone.models[0].price - 100}</span>
        <Link to={phone.link}> <button>BUY</button> </Link>
    </div>
  )
}

export default Iphone
