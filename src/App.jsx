import React from 'react'
import './App.css'
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import Home from './Pages/CompHome.jsx'
import Products from './Pages/Products.jsx'
import Services from './Pages/Services.jsx'
import About from './Pages/CompAbout.jsx'
import Contact from './Pages/CompContact.jsx'


function App() {
  // const [count, setCount] = useState(0)

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
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
