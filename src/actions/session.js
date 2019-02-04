export function login(credentials) {
    if (credentials == null) {
        return {
            type: "LOGIN_FAILED",
            payload: {}
        }
    }
    else {
        return {
            type: "LOGIN",
            payload: credentials
        }
    }
}
export function logout() { 
    return {
        type: "LOGOUT",
        payload: {}
    }
}