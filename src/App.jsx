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
         <Route element={<LoadingWrapper />}>
                <Route path={'/ong/*'} element={
                    <CustomSecurePath login={'/'} authorizedRol={"ONG"} mainPath={"/vol"}>
                        <Index  />
                    </CustomSecurePath>}/>		
                <Route path={'/vol/*'} element={
                    <CustomSecurePath login={'/'} authorizedRol={"VOLUNTEER"} mainPath={"/ong"}>
                        <Index  />
                    </CustomSecurePath>}/>	
                <Route path={'/'} element={<SignIn  />} />
          </Route>
      </Routes>
  )
}

export default App
