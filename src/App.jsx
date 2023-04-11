import { useState } from 'react'

import './App.css'
import Header from './Components/Header/Header'
import { Outlet, useNavigation } from 'react-router-dom'
import Footer from './Components/Footer/Footer'

function App() {
 const navigation=useNavigation();
  return (
    <>
      <Header/>
      <div> {navigation.useState==='Loading' && 'Loading..'}</div>
      <Outlet/>
      
      <Footer/>
    </>
  )
}

export default App
