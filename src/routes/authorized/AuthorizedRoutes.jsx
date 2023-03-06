import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Volunteers from './volunteers/Volunteers'
import Dashboard from './dashboard/Dashboard'
import Activities from './activities/Activities'
import Beneficiaries from './beneficiaries/Beneficiaries'
import Subventions from './subventions/Subventions'




export default function AutorizedRoutes() {
  return (
    <Routes>
        <Route path='*' element={<Dashboard />}/>
        <Route path={'/voluntarios'} element={<Volunteers/>}/>
        <Route path={'/actividades'} element={<Activities/>}/>
        <Route path={'/beneficiarios'} element={<Beneficiaries/>}/>
        <Route path={'/subvenciones'} element={<Subventions/>}/>
    </Routes>
  )
}
