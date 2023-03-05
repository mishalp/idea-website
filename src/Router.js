import React from 'react'
import { HashRouter, outer, Navigate, Route, Routes } from 'react-router-dom'
import CoursesIndex from './pages/courses/CourseIndex'
import CoursesHome from './pages/courses/coursesHome/CoursesHome'
import EventIndex from './pages/events/EventIndex'
import Home from './pages/home/Home'
import Index from './pages/index/Index'


function Router() {
  return (
    <HashRouter basename='/idea-website'>
        <Routes>
            <Route path='/' exact element={<Index />} >
              <Route index element={<Navigate to='home' />} /> {/* default route -> home */}
              <Route path='home' element={<Home />} />
              <Route path='courses' element={<CoursesIndex />} >
                <Route index element={<Navigate to='explore' />} />
                <Route path='explore' element={<CoursesHome />} />
                <Route path='*' element={<CoursesHome />} />
              </Route>
              <Route path='events' element={<EventIndex />} />
            </Route>
        </Routes>
    </HashRouter>
  )
}

export default Router