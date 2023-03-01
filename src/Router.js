import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import CoursesIndex from './pages/courses/CourseIndex'
import CourcesHome from './pages/courses/sideMenu/coursesHome/CourcesHome'
import EventIndex from './pages/events/EventIndex'
import Home from './pages/home/Home'
import Index from './pages/index/Index'


function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' exact element={<Index />} >
              <Route index element={<Navigate to='home' />} /> {/* default route -> home */}
              <Route path='home' element={<Home />} />
              <Route path='courses' element={<CoursesIndex />} >
                <Route index element={<Navigate to='explore' />} />
                <Route path='explore' element={<CourcesHome />} />
              </Route>
              <Route path='events' element={<EventIndex />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router