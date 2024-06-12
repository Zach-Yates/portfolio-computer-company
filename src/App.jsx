import React from 'react'
import './App.css'
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import Home from './Pages/CompHome.jsx'
import Products from './Pages/Products.jsx'
import Services from './Pages/Services.jsx'
import About from './Pages/CompAbout.jsx'
import Contact from './Pages/CompContact.jsx'


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/portfolio-computer-company/' exact Component={Home}></Route>
          <Route path='/comp_products' exact Component={Products}></Route>
          <Route path='/comp_services' exact Component={Services}></Route>
          <Route path='/comp_about' exact Component={About}></Route>
          <Route path='/comp_contact' exact Component={Contact}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
