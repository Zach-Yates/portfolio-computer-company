import React from 'react'
import './Title.css'

const Title = ({activeIndex,capacity}) => {

  let applePrice = 1499;
  let compCoPrice = 999;

  if(activeIndex == 1){
    applePrice +=100;
    compCoPrice +=100;
  }

  if(capacity == 2){
    applePrice +=100;
    compCoPrice +=100;
  }
  else if(capacity == 3){
    applePrice +=200;
    compCoPrice +=200;
  }


  return (
    <div className="title">

        <h2>Buy iPhone 15 Pro</h2>

        <div className="price-compare">

            <div className="price-item">

                <p className='apple'>Apple</p>

                <p>${applePrice}</p>

            </div>

            <div className="price-item">

                <p className='compco'>Compco</p>

                <p>${compCoPrice}</p>

            </div>

        </div>
        
    </div>
  )
}

export default Title
