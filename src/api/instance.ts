import axios from 'axios'

const settings = {
    withCredentials: true,
}
const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    ...settings
})

//types

export type RegistrType = {
    "addedUser": {
        "_id": string
        "email": string
        "rememberMe": false,
        "isAdmin": boolean
        "name": string    // defolt == email
        "verified": boolean
        "publicCardPacksCount": number
        "created": string
        "updated": string
        "__v": 0
    }
}
export type LoginType = {
    "_id": string
    "email": string
    "rememberMe": boolean
    "isAdmin": boolean
    "name": string
    "verified": boolean
    "publicCardPacksCount": number
    "created": string
    "updated": string
    "__v": number
    "token": string
    "tokenDeathTime": number
}

export const authAPI = {
    registr(email: string, password: string) {
        return instance.post<RegistrType>(`auth/register`, {email, password})
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post<LoginType>(`auth/login`, {email, password, rememberMe})
    },
    authMe() {
        return instance.post(`auth/me`)
    },
    changeOfInformationAboutMe(name: string, avatar: string) {
        return instance.put(`auth/me`, {name, avatar})
    },
    logout() {
        return instance.delete(`auth/me`)
    }
}

