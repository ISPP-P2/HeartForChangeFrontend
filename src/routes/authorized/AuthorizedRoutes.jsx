import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Volunteers from '../Volunteers'
import Dashboard from './dashboard/Dashboard'


export default function AutorizedRoutes() {
  return (
    <Routes>
        <Route path='*' element={<Dashboard />}/>
        <Route path={'/volunteers'} element={<Volunteers/>}/>
    </Routes>
  )
}
