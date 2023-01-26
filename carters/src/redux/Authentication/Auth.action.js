import { getLogin } from "./Auth.api";
import { GET_LOGIN_DATA_SUCCESS,GET_LOGIN_DATA_LOADING,GET_LOGIN_DATA_ERROR,POST_SIGNUP_DATA_SUCCESS,POST_SIGNUP_DATA_LOADING,POST_SIGNUP_DATA_ERROR,GET_LIVE_USER_STATE,LOGOUT_USER_DATA } from "./Auth.types";

export const getLoginData = (data)=> (dispatch)=>{
    let res =  getLogin(data)
    dispatch({type:GET_LOGIN_DATA_SUCCESS,payload:res})
}

export const getLiveUser = ()=>(dispatch)=>{
    let loginData = JSON.parse(localStorage.getItem("liveUser")) || {}
    let res = getLogin(loginData)
    dispatch({type:GET_LIVE_USER_STATE,payload:res})
}

export const logoutUser = ()=>(dispatch)=>{
    localStorage.removeItem("liveUser")
    dispatch({type:LOGOUT_USER_DATA})
}