import React from 'react'
import './Title.css'

const Title = ({models,activeIndex,capacity}) => {

  let applePrice = parseInt(models[activeIndex].price);
  let compCoPrice = applePrice - 100;


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

        <h2>Buy {models[activeIndex].name}</h2>

        <div className="price-compare">

            <div className="price-item">

                <p className='apple'>Apple</p>

                <p>${applePrice}</p>

            </div>

            <div className="price-item">

                <p className='compco'>iPhones 4 Less</p>

                <p>${compCoPrice}</p>

            </div>

        </div>
        
    </div>
  )
}

export default Title
