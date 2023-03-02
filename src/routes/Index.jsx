import React, { lazy, useContext, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import StickyHeadTable from './activities/activityList';
import Dashboard from './authorized/dashboard/Dashboard';
import SignIn from './login/SignIn';


function Index() {

    return (
            <Routes>
                <Route path={'/login'} element={<SignIn />}/>		
                <Route path={'/'} element={<StickyHeadTable />}/>		
                <Route path={'*'} element={<div>Error</div>}/>		
            </Routes>
    )
}

export default Index