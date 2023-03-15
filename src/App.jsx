import { Route, Routes } from "react-router-dom"
import {Index} from "./routes/Index"
import SignIn from "./routes/login/SignIn"
import "./index.css";
import { RequireAuth } from 'react-auth-kit'
import CustomSecurePath from "./routes/login/CustomSecurePath";

function App() {
  return (
      <Routes>
          <Route path={'*'} element={
              <CustomSecurePath login={'/login'}>
                  <Index  />
              </CustomSecurePath>}/>		
          <Route path={'/login'} element={<SignIn  />}/>
      </Routes>
  )
}

export default App
