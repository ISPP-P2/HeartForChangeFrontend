import { Route, Routes } from "react-router-dom"
import "./index.css";
import { RequireAuth } from 'react-auth-kit'
import CustomSecurePath from "./routes/login/CustomSecurePath";
import LoadingWrapper from "./components/LoadingWrapper";
import LegalTerms from "./components/LegalTerms";
import { lazy } from "react";


const Index = lazy(() => import('./routes/Index'))
const SignIn = lazy(() => import('./routes/login/SignIn'))
const Register = lazy(() => import('./routes/login/Register'))


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
                <Route path={'/admin/register'} element={<Register  />} />
          </Route>
          <Route path={'/privacidad'} element={<LegalTerms/>}></Route>
      </Routes>
  )
}

export default App
