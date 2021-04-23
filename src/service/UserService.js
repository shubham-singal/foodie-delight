import {HEROKU_SERVER_URL} from "../common/constants";

export const register = (user) =>
    fetch(`${HEROKU_SERVER_URL}/register`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include"
    }).then(response => response.json())


export const login = (user) =>
    fetch(`${HEROKU_SERVER_URL}/login`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include"
    }).then(response => {
        if (response.ok) {
            return response.json()
        } else {
            alert("The username or password is incorrect")
        }
    })


export const logout = () =>
    fetch(`${HEROKU_SERVER_URL}/logout`, {
        method: 'POST',
        credentials: "include"
    })

export const getProfile = () =>
    fetch(`${HEROKU_SERVER_URL}/profile`, {
        method: 'POST',
        credentials: "include"
    }).then(response => {
        if (response.ok) {
            return response.json()
        } else {
            return null
        }
    })

export const getUserProfile = (userId) =>
    fetch(`${HEROKU_SERVER_URL}/profile/${userId}`)
        .then(response => response.json())

export const getMembers = () =>
    fetch(`${HEROKU_SERVER_URL}/users`)
        .then(response => response.json())

export const updateProfile = async (user) => {
    let response = await fetch(`${HEROKU_SERVER_URL}/api/users/${user.id}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            "content-type": "application/json"
        },
        credentials: "include"
    })
    return await response.json()
}
