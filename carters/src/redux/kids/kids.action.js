import { GET_KIDS_PRODUCTS_SUCCESS,GET_KIDS_PRODUCTS_ERROR,GET_KIDS_PRODUCTS_LOADING} from "./kids.types";
import { getkidsApi, getFilteredApi, getPriceApi, getRatedApi,getLatestArrival } from "./kids.api";

export const getProducts = ()=> async (dispatch)=>{
    dispatch({type:GET_KIDS_PRODUCTS_LOADING})
    try {
        let data = await getkidsApi()
        dispatch({type:GET_KIDS_PRODUCTS_SUCCESS,payload:data})
    } catch {
        dispatch({type:GET_KIDS_PRODUCTS_ERROR})
    }
}
export const getFilteredProducts = (query)=> async (dispatch)=>{
    dispatch({type:GET_KIDS_PRODUCTS_LOADING})
    try {
        let data = await getFilteredApi(query)
        dispatch({type:GET_KIDS_PRODUCTS_SUCCESS,payload:data})
    } catch {
        dispatch({type:GET_KIDS_PRODUCTS_ERROR})
    }
}
export const getPricedProducts = (query)=> async (dispatch)=>{
    dispatch({type:GET_KIDS_PRODUCTS_LOADING})
    try {
        let data = await getPriceApi(query)
        dispatch({type:GET_KIDS_PRODUCTS_SUCCESS,payload:data})
    } catch {
        dispatch({type:GET_KIDS_PRODUCTS_ERROR})
    }
}
export const getRatedProducts = ()=> async (dispatch)=>{
    dispatch({type:GET_KIDS_PRODUCTS_LOADING})
    try {
        let data = await getRatedApi()
        dispatch({type:GET_KIDS_PRODUCTS_SUCCESS,payload:data})
    } catch {
        dispatch({type:GET_KIDS_PRODUCTS_ERROR})
    }
}

export const getLatestProducts = ()=> async (dispatch)=>{
    dispatch({type:GET_KIDS_PRODUCTS_LOADING})
    try {
        let data = await getLatestArrival()
        dispatch({type:GET_KIDS_PRODUCTS_SUCCESS,payload:data})
    } catch {
        dispatch({type:GET_KIDS_PRODUCTS_ERROR})
    }
}