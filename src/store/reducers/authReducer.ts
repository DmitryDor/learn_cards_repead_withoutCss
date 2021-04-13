import {Dispatch} from "redux"
import {authAPI} from "../../api/instance";


type InitialStateType = {
    isLogin: boolean
    "_id": string | null
    "email": string | null
    // "rememberMe": boolean
    // "name": string  | null
    // "publicCardPacksCount": number
    token?: string
}

const initialState = {
    isLogin: false,
    _id: null ,
    email: null,
}

export enum ACTIONS_TYPE {
    IS_REGISTR_TYPE = 'AuthReducer/IS-REGISTR',

}

type ActionsType = ReturnType<typeof isRegistrAC>

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.IS_REGISTR_TYPE:
            return {...state, isLogin: action.isLogin}
        default:
            return {...state}
    }
}

//AC

export const isRegistrAC = (isLogin: boolean) => ({type: ACTIONS_TYPE.IS_REGISTR_TYPE, isLogin} as const)


//TC

export const registrTC = (email: string, password: string) => (dispatch: Dispatch) => {
    return authAPI.registr(email, password)
        .then(res => dispatch(isRegistrAC(true)))
        .catch(e => {
            alert(e.response.data.error)
            alert(e.response.data.passwordRegExp)
            throw  new Error('DIMKA, ERROR IN REGISTRATION')
        })
}

