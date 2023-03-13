import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from 'react-auth-kit'
import refreshApi from './api/auth/refreshToken';

import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const queryClient = new QueryClient()
 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  </React.StrictMode>,
)
