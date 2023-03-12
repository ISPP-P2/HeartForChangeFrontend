import jwtDecode from "jwt-decode"

export const parseTokens = (response) => {

    return {
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
            expiresIn: 1000000,
            authState:{
                "username": "usuario1",
                "rol": "ONG"
            },
            refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
            refreshTokenExpireIn: 1000000,
            tokenType: "Bearer",
    }
    let token = jwtDecode(response.data.token)
    let refresh = jwtDecode(response.data.refresh)   

    let tokens = {
        token: response.data.token,
        expiresIn: Math.floor((token.exp * 1000 - Date.now()) /60/1000),
        authState:{
            "username": token.sub,
            "rol": token.roles[0].authority
        },
        refreshToken: response.data.refresh,
        refreshTokenExpireIn: Math.floor((refresh.exp * 1000 - Date.now()) /60/1000),
        tokenType: "Bearer",
    }
    return tokens
}