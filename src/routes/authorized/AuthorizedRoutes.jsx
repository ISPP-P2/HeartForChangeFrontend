import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Volunteers from '../Volunteers'
import Dashboard from './dashboard/Dashboard'
import Activities from '../Activities'
import ActivityDetails from "../ActivityDetails.jsx";



export default function AutorizedRoutes() {
  return (
    <Routes>
        <Route path='*' element={<Dashboard />}/>
        <Route path={'/voluntarios'} element={<Volunteers/>}/>
        <Route path={'/actividades'} element={<Activities/>}/>
        <Route path={'/actividades/1'} element={<ActivityDetails/>}/>
    </Routes>
  )
}
