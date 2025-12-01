import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../pages/Shared/Footer'
import Navbar from '../pages/Shared/Navbar'

function RootLayout() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#ffe9ec,#e8f3ff,#f4fff0,#fff6e5)] backdrop-blur-xl bg-opacity-60">
      <div className="backdrop-blur-2xl bg-white/20">
        {' '}
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default RootLayout
