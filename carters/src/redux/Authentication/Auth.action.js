import { getLogin } from "./Auth.api";
import { GET_LOGIN_DATA_SUCCESS,GET_LOGIN_DATA_LOADING,GET_LOGIN_DATA_ERROR,POST_SIGNUP_DATA_SUCCESS,POST_SIGNUP_DATA_LOADING,POST_SIGNUP_DATA_ERROR } from "./Auth.types";

export function getLoginData = (data)=> (dispatch)=>{
    let data = getLogin(data)
    dispatch({type:GET_LOGIN_DATA_SUCCESS,payload:data})
}
export function postSignupData = (data)=> (dispatch)=>{
    let data = postSignupData(data)
    dispatch({type:POST_SIGNUP_DATA_SUCCESS,payload:data})
}