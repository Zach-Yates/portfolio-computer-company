import React, { useState } from 'react'
import './CompNav.css'
import { VscMenu } from "react-icons/vsc";
import { Link } from 'react-router-dom'


const CompNav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const ShowMenu = ()=>{
    // console.log(showMenu);
    setShowMenu(true);
  }

  const HideMenu = ()=>{
    // console.log(showMenu);
    if(showMenu){
      setShowMenu(false);
    }
  }

  return (
    <nav className='comp-nav' onClick={HideMenu}>
        <Link to="/comp_home"><div className='home'>CompCo Home</div></Link>
        <ul className={`menu ${showMenu? '':'hide-menu'}`}>
            <Link to="/comp_products"><li>Products</li></Link>
            <Link to="/comp_services"><li>Services</li></Link>
            <Link to="/comp_about"><li>About</li></Link>
            <Link to="/comp_contact"><li>Contact</li></Link>
        </ul>
      <VscMenu className='burger-icon' onClick={ShowMenu}/>
    </nav>
  )
}

export default CompNav
