import { addtoOrders, getOrders } from "./orders.api"
import { GET_ORDERS_ERROR,GET_ORDERS_LOADING,GET_ORDERS_SUCCESS,ADD_TO_ORDERS_ERROR,ADD_TO_ORDERS_LOADING,ADD_TO_ORDERS_SUCCESS } from "./orders.types"
export const getOrderProducts = ()=>async (dispatch)=>{
    dispatch({type:GET_ORDERS_LOADING})
    try {
        let data = await getOrders()
        dispatch({type:GET_ORDERS_SUCCESS,payload:data})
    } catch {
        dispatch({type:GET_ORDERS_ERROR})
    }
}
export const addOrderProducts = (data)=>async (dispatch)=>{
    dispatch({type:ADD_TO_ORDERS_LOADING})
    try {
        let res = await addtoOrders(data)
        let orders = await getOrders()
        dispatch({type:ADD_TO_ORDERS_SUCCESS,payload:orders})
    } catch {
        dispatch({type:ADD_TO_ORDERS_ERROR})
    }
}