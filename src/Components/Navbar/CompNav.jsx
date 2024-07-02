import React, { useState } from 'react'
import './CompNav.css'
import { VscMenu } from "react-icons/vsc";
import { Link} from 'react-router-dom'


const CompNav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const ShowMenu = ()=>{
    setShowMenu(true);
  }

  const HideMenu = ()=>{
    if(showMenu){
      setShowMenu(false);
    }
  }

  return (
    <nav className='comp-nav' onClick={HideMenu}>

        <Link to="/portfolio-computer-company/"><div className='home'>iPhones 4 Less</div></Link>
        <ul className={`menu ${showMenu? '':'hide-menu'}`}>
            <Link to="/portfolio-computer-company/15Pro"><li><span>iPhone 15 Pro</span></li></Link>
            <Link to="/portfolio-computer-company/15"><li><span>iPhone 15</span></li></Link>
            <Link to="/portfolio-computer-company/14"><li><span>iPhone 14</span></li></Link>
            <Link to="/portfolio-computer-company/13"><li><span>iPhone 13</span></li></Link>
            <Link to="/portfolio-computer-company/SE"><li><span>iPhone SE</span></li></Link>
            {/* <Link to="/comp_services"><li>Services</li></Link> */}
            <Link to="/comp_about"><li>About</li></Link>
            <Link to="/comp_contact"><li>Contact</li></Link>
        </ul>
      <VscMenu className='burger-icon' onClick={ShowMenu}/>
    </nav>
  )
}

export default CompNav
