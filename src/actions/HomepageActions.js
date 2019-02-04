export function addComponayData(data) {

    return {
        type: "UPDATE_DETAILS",
        payload: data
    }

}
export function logout() {
    return {
        type: "LOGOUT",
        payload: {}
    }
}