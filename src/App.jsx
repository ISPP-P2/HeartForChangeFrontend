import { Route, Routes } from "react-router-dom"
import "./index.css";
import { RequireAuth } from 'react-auth-kit'
import CustomSecurePath from "./routes/login/CustomSecurePath";
import LoadingWrapper from "./components/LoadingWrapper";
import { lazy } from "react";


const Index = lazy(() => import('./routes/Index'))
const SignIn = lazy(() => import('./routes/login/SignIn'))

function App() {
  return (
      <Routes>
         <Route  element={<LoadingWrapper />}>
            <Route path={'*'} element={
                <CustomSecurePath login={'/login'}>
                    <Index  />
                </CustomSecurePath>}/>		
            <Route path={'/login'} element={<SignIn  />} />
          </Route>
      </Routes>
  )
}

export default App
