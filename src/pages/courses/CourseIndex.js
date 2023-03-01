import React from 'react'
import { Outlet } from 'react-router-dom'
import SideMenu from './sideMenu/SideMenu'
import './coursesIndex.css'

function CoursesIndex() {
  return (
    <div className='courses-index'>
      <SideMenu />
      <Outlet />
    </div>
  )
}

export default CoursesIndex