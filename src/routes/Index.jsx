import React, { lazy, useContext, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import SignInComponent from './SignInComponent'
import Dashboard from './authorized/dashboard/Dashboard';


function Index() {
  
    

    

    return (
            <Routes>
                <Route path={'/login'} element={<SignInComponent />}/>		
                <Route path={'/'} element={<Dashboard />}/>		
                <Route path={'*'} element={<div>Error</div>}/>		
            </Routes>
    )
}

export default Index