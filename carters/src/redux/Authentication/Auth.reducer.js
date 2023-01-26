import { GET_LOGIN_DATA_SUCCESS,GET_LOGIN_DATA_LOADING,GET_LOGIN_DATA_ERROR,POST_SIGNUP_DATA_SUCCESS,POST_SIGNUP_DATA_LOADING,POST_SIGNUP_DATA_ERROR, GET_LIVE_USER_STATE, LOGOUT_USER_DATA } from "./Auth.types";

const intialState = {
    loginData:null,
    isAuth:false
}

export const AuthReducer = (state=intialState,{type,payload})=>{
    switch(type){
        case GET_LOGIN_DATA_SUCCESS:{
            return {
                ...state,
                loginData:payload,
                isAuth:true
            }
        }
        case GET_LIVE_USER_STATE:{
            return {
                ...state,
                loginData:payload,
                isAuth:payload!==null?true:false
            }
        }
        case LOGOUT_USER_DATA:{
            return {
                ...state,
                loginData:null,
                isAuth:false
            }
        }
        default:{
            return state
        }
    }
}