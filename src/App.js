import React from 'react'
import BackToTop from './components/customer feedback2';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Thankyou from './components/thankyou';
import "./App.css"
// import FeedbackForm from './components/customerfeedback';


const App = () => {
  return (
    <div >
   
    <BrowserRouter>
    <div >
    <Routes>
      <Route extact path="/"  element={<BackToTop/>} /> 
      {/* <Route extact path="/"  element={<FeedbackForm/>} />  */}
      <Route extact path="/thankyou" element={<Thankyou/>} /> 
    </Routes>
    </div>
      
    </BrowserRouter>
    </div>
  )
}

export default App