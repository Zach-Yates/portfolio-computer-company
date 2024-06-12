import React from 'react'
import './Products.css'
import CompNav from '../Components/Navbar/CompNav'
import CompFooter from '../Components/Footer/CompFooter'
import Model from '../Components/StoreModel/Model';
import Title from '../Components/Title/Title';
import Finish from '../Components/Finish/Finish';
import Gallery from '../Components/Gallery/Gallery';
import Storage from '../Components/Storage/Storage';

const Products = () => {
  return (

    <div className='comp-products'>

      <CompNav/>

      <div className="products-main">

        <div className="iphone-container">

          <Title/>

          <Gallery/>

          <Model/>

          <Finish/>

          <Storage/>

        </div>
      </div>
      <CompFooter/>
    </div>
  )
}

export default Products
