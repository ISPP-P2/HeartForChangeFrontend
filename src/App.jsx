import { Route, Routes } from "react-router-dom"
import Index from "./routes/Index"
import SignIn from "./routes/login/SignIn"



function App() {
  return (
      <Routes>
          <Route path={'/'} element={<Index  />}/>		
          <Route path={'/login'} element={<SignIn  />}/>		
      </Routes>
  )
}

export default App