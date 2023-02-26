import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from 'react-auth-kit'
import refreshApi from './api/auth/refreshToken';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider
      authName='_auth'
      authType='cookie'
      cookieDomain={window.location.hostname}
      cookieSecure
      refresh={refreshApi}
      >
        <BrowserRouter >
          <App />
        </BrowserRouter>
        </AuthProvider>
  </React.StrictMode>,
)
