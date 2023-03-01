import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'

function Index() {
  return (
    <div className='index'>
      <Navbar /> {/* navbar */}
      {/* Outlet will render the inner component of the route */}
      {/* default route -> home */}
      <Outlet />
    </div>
  )
}

export default Index