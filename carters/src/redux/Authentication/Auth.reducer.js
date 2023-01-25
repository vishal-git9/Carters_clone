import { GET_LOGIN_DATA_SUCCESS,GET_LOGIN_DATA_LOADING,GET_LOGIN_DATA_ERROR,POST_SIGNUP_DATA_SUCCESS,POST_SIGNUP_DATA_LOADING,POST_SIGNUP_DATA_ERROR } from "./Auth.types";

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
        default:{
            return state
        }
    }
}