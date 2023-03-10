import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Volunteers from './volunteers/Volunteers'
import Dashboard from './dashboard/Dashboard'
import Beneficiaries from './beneficiaries/Beneficiaries'
import BodyWrapper from '../../components/BodyWrapper'
import Activities from './activities/Activities'
import ActivityDetails from './activities/ActivityDetails'
import AssignParticipants from './activities/AssignParticipants'
import Subventions from './subventions/Subventions'
import VolunteersDetails from './volunteers/VolunteersDetails'


export default function AutorizedRoutes() {
  return (
    <Routes>
        <Route path='/' element={
          <BodyWrapper title={"Panel de control"}>
              <Dashboard />
          </BodyWrapper>
        }/>
        <Route path={'/voluntarios'} element={
          <BodyWrapper title={"Lista de voluntarios"}>
              <Volunteers/>
          </BodyWrapper>
        }/>
         <Route path={'/voluntarios/1'} element={
          <BodyWrapper title={"Detalles de voluntario"}>
              <VolunteersDetails/>
          </BodyWrapper>
        }/>     
        <Route path={'/actividades'} element={
          <BodyWrapper title={"Lista de actividades"}>
              <Activities/>
          </BodyWrapper>
        }/>
        <Route path={'/actividad/1'} element={
          <BodyWrapper title={"Detalles de actividad"}>
              <ActivityDetails/>
          </BodyWrapper>
        }/>       
        <Route path={'/actividad/1/asignarVoluntarios'} element={
          <BodyWrapper title={"Asignar voluntarios a actividad"}>
              <AssignParticipants/>
          </BodyWrapper>
        }/>
        <Route path={'/beneficiarios'} element={
          <BodyWrapper title={"Lista de beneficiarios"}>
              <Beneficiaries/>
          </BodyWrapper>
        }/>
         <Route path={'/subvenciones'} element={
          <BodyWrapper title={"Lista de subvenciones"}>
              <Subventions />
          </BodyWrapper>
        }/>
    </Routes>
  )
}