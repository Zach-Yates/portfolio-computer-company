import React,{useState} from 'react'
import './Product.css'

import Model from '../Model/Model';
import Title from '../Title/Title';
import Finish from '../Finish/Finish';
import Gallery from '../Gallery/Gallery';
import Storage from '../Storage/Storage';
import Help from '../Help/Help';

const Product = ({phone}) => {

  const finishes = phone.finishes;

  const [finish,setFinish] = useState(finishes[0]);

  const [activeIndex, setActiveIndex] = useState(0);

  const [capacity,setCapacity] = useState(1);

  const [helping,setHelping] = useState(false);

  return (

    <div className='comp-products'>

      <div className="products-main">

        <div className="iphone-container">

          <Title models={phone.models} activeIndex={activeIndex} capacity={capacity}/>

          <Gallery finish={finish} activeIndex={activeIndex}/>

          <Model models={phone.models} activeIndex={activeIndex} setActiveIndex={setActiveIndex} setHelping={setHelping}/>

          <Finish finish={finish} setFinish={setFinish} finishes={finishes}/>

          <Storage capacity={capacity} setCapacity={setCapacity}/>

        </div>
      </div>
      <Help helping={helping} setHelping={setHelping}/>
    </div>
  )
}

export default Product
