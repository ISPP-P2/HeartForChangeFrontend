import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ActivityVolunteerDetails from '../authorized/activities/ActivityDetailsVolunteers'
import DashboardVolunteers from './Dashboard/DashboardVolunteers'
import MyActivities from './MyList/MyActivities'

function IndexRoutes() {
  return (
    <Routes>
        <Route path={'/'} element={<DashboardVolunteers  />}/>
        <Route path={'/activities'} element={<MyActivities  />} />
        <Route path={'/actividad'}>
          <Route path={':id'} element={<ActivityVolunteerDetails  />}/>
        </Route>
  </Routes>
  )
}

export default IndexRoutes