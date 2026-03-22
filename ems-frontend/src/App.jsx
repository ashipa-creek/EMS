import './App.css'
import EmployeeComponent from './components/EmployeeComponent'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import LandingPage from './components/LandingPage'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>

      <HeaderComponent />

      <div className="main-content">
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/employees' element={<ListEmployeeComponent/>}/>
          <Route path='/add-employee' element={<EmployeeComponent/>}/>
          <Route path='/edit-employee/:id' element={<EmployeeComponent/>}/>
        </Routes>
      </div>

      <FooterComponent />

    </BrowserRouter>
  )
}

export default App