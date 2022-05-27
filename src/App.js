import React from 'react'
// import FedbackTrial from "./components/feebacktrail"
// import CustomerFeedback from './components/customer_feedback'
import BackToTop from './components/customer feedback2'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Thankyou from './components/thankyou'

const App = () => {
  return (
    <BrowserRouter>
    <div>
    <Routes>
      <Route extact path="/"  element={<BackToTop/>} /> 
      <Route extact path="/thankyou" element={<Thankyou/>} /> 
    </Routes>
    </div>
      
    </BrowserRouter>
  )
}

export default App