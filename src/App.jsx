import React from 'react'
import './App.css'
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import Home from './Pages/CompHome.jsx'

import Iphone_15 from './Pages/Iphone15.jsx'
import Iphone_15Pro from './Pages/Iphone15Pro.jsx'
import Iphone_14 from './Pages/Iphone14.jsx'
import Iphone_13 from './Pages/Iphone13.jsx'
import Iphone_SE from './Pages/IphoneSE.jsx'

import Services from './Pages/Services.jsx'
import About from './Pages/CompAbout.jsx'
import Contact from './Pages/CompContact.jsx'


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/portfolio-computer-company/' exact Component={Home}></Route>

          <Route path='/portfolio-computer-company/15Pro' exact Component={Iphone_15Pro}></Route>
          <Route path='/portfolio-computer-company/15' exact Component={Iphone_15}></Route>
          <Route path='/portfolio-computer-company/14' exact Component={Iphone_14}></Route>
          <Route path='/portfolio-computer-company/13' exact Component={Iphone_13}></Route>
          <Route path='/portfolio-computer-company/SE' exact Component={Iphone_SE}></Route>

          <Route path='/comp_services' exact Component={Services}></Route>
          <Route path='/comp_about' exact Component={About}></Route>
          <Route path='/comp_contact' exact Component={Contact}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
