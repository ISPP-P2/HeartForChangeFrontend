import {createRefresh} from 'react-auth-kit'
import { axiosWithToken } from './axios'
import { parseTokens } from './tokenUtils'




const refreshApi = createRefresh({
  interval: 60, 
  refreshApiCallback: async (
    {
      refreshToken,
    }) =>  {
      const axios = axiosWithToken(refreshToken)
      const response = await axios.get('/accounts/refresh')
      if(response.status === 200){
        const tokens = parseTokens(response) 
        return {
          isSuccess: true, 
          newAuthToken: tokens.token,
          newAuthTokenExpireIn: tokens.expiresIn,
          newAuthToken: tokens.authState,
          newAuthUserState: tokens.refreshToken,
          newRefreshTokenExpiresIn: tokens.refreshTokenExpireIn 
        }
      }else{
        return {
          isSuccess: true
        }
      }
  
    }
   

})

export default refreshApi