import { getLogin } from "./Auth.api";
import { GET_LOGIN_DATA_SUCCESS,GET_LOGIN_DATA_LOADING,GET_LOGIN_DATA_ERROR,POST_SIGNUP_DATA_SUCCESS,POST_SIGNUP_DATA_LOADING,POST_SIGNUP_DATA_ERROR } from "./Auth.types";

export const getLoginData = (data)=> (dispatch)=>{
    let res =  getLogin(data)
    dispatch({type:GET_LOGIN_DATA_SUCCESS,payload:res})
}