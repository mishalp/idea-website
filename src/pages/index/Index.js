import React from 'react'
import { Outlet } from 'react-router-dom'
import SideMenu from '../../components/sideMenu/SideMenu'

function Index() {
  return (
    <div className='index'>
      <SideMenu />
      {/* Outlet will render the inner component of the route */}
      {/* default route -> home */}
      <Outlet />
    </div>
  )
}

export default Index