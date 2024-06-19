import React from 'react'
import CompNav from '../Components/Navbar/CompNav'
import CompFooter from '../Components/Footer/CompFooter'
import Product from '../Components/Product/Product'

import {phones} from '../Components/Phones'

const Iphone14 = () => {
const phone = phones[2];

  return (
    <div>
        <CompNav/>
        <Product phone={phone}/>
        <CompFooter/>
    </div>
  )
}

export default Iphone14
