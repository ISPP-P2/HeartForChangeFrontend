import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ActivityVolunteerDetails from '../authorized/activities/ActivityDetailsVolunteers'

function IndexRoutes() {
  return (
    <Routes>
        <Route path={'/actividad'} element={<ActivityVolunteerDetails  />}/>
    </Routes>
  )
}

export default IndexRoutes