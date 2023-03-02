import jwtDecode from "jwt-decode"

export const parseTokens = (response) => {

    return {
            token: "awdawd",
            expiresIn: 1000000,
            authState:{
                "username": "usuario1",
                "rol": "ONG"
            },
            refreshToken: "awdawd",
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