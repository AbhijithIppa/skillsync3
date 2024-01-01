import React from 'react'
import NavBar from './NavBar'
import Footer from './footer/Footer'
import {Outlet} from 'react-router-dom'

function RootLayout() {
  return (
    <div>
        <NavBar/>
        <div style={{minHeight:"100vh"}}>
        <Outlet />
        {/* <Footer/> */}
        </div>
    </div>
    
  )
}

export default RootLayout