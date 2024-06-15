import React,{useState} from 'react'
import './Products.css'
import CompNav from '../Components/Navbar/CompNav'
import CompFooter from '../Components/Footer/CompFooter'
import Model from '../Components/Model/Model';
import Title from '../Components/Title/Title';
import Finish from '../Components/Finish/Finish';
import Gallery from '../Components/Gallery/Gallery';
import Storage from '../Components/Storage/Storage';
import Help from '../Components/Help/Help';

const Products = () => {

  const finishes = ['Natural Titanium','Blue Titanium', 'White Titanium', 'Black Titanium'];

  const [finish,setFinish] = useState(finishes[0]);

  const [activeIndex, setActiveIndex] = useState(0);

 const [capacity,setCapacity] = useState(1);

 const [helping,setHelping] = useState(false);

  return (

    <div className='comp-products'>

      <CompNav/>

      <div className="products-main">

        <div className="iphone-container">

          <Title activeIndex={activeIndex} capacity={capacity}/>

          <Gallery finish={finish} activeIndex={activeIndex}/>

          <Model activeIndex={activeIndex} setActiveIndex={setActiveIndex} setHelping={setHelping}/>

          <Finish finish={finish} setFinish={setFinish} finishes={finishes}/>

          <Storage capacity={capacity} setCapacity={setCapacity}/>

        </div>
      </div>
      <Help helping={helping} setHelping={setHelping}/>
      <CompFooter/>
    </div>
  )
}

export default Products
