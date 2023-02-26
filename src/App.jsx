import { Route, Routes } from "react-router"
import SignInComponent from "./components/SignInComponent"
import {RequireAuth} from 'react-auth-kit';
import SignIn from "./routes/authorized/SignIn";
function App() {

  return (
    <Routes>
       <Route path={'/login'} element={<SignInComponent />} />
      <Route path={'/signed'} element={
        <RequireAuth loginPath={'/login'}>
          <SignIn />
        </RequireAuth>
      } />
      <Route  path={'*'} element={<>
        <div>
          Pagina de error
        </div>
      </>}></Route>
    </Routes>
  )
}

export default App
