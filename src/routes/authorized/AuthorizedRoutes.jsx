import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Volunteers from '../Volunteers'
import Dashboard from './dashboard/Dashboard'
import Activities from '../Activities'
import Beneficiaries from '../Beneficiaries'



export default function AutorizedRoutes() {
  return (
    <Routes>
        <Route path='*' element={<Dashboard />}/>
        <Route path={'/voluntarios'} element={<Volunteers/>}/>
        <Route path={'/actividades'} element={<Activities/>}/>
        <Route path={'/beneficiarios'} element={<Beneficiaries/>}/>
    </Routes>
  )
}
