import { addtoCart, changeQty, getCart, removeCart,deleteCart } from "./cart.api";
import { GET_CART_LOADING,GET_CART_ERROR,GET_CART_SUCCESS,ADD_TO_CART_LOADING,ADD_TO_CART_ERROR,ADD_TO_CART_SUCCESS,DELETE_ITEM_LOADING,DELETE_ITEM_ERROR,DELETE_ITEM_SUCCESS,INC_ITEM_QUANTITY_ERROR,INC_ITEM_QUANTITY_LOADING,INC_ITEM_QUANTITY_SUCCESS,DEC_ITEM_QUANTITY_ERROR,DEC_ITEM_QUANTITY_LOADING,DEC_ITEM_QUANTITY_SUCCESS,DELETE_CART_ERROR,DELETE_CART_LOADING,DELETE_CART_SUCCESS } from "./cart.types";

export const getCartProducts = ()=>async (dispatch)=>{
    dispatch({type:GET_CART_LOADING})
    try {
        let data = await getCart()
        dispatch({type:GET_CART_SUCCESS,payload:data})
    } catch {
        dispatch({type:GET_CART_ERROR})
    }
}
export const addCartProducts = (data)=>async (dispatch)=>{
    dispatch({type:ADD_TO_CART_LOADING})
    try {
        let res = await addtoCart(data)
        dispatch({type:ADD_TO_CART_SUCCESS,payload:res})
    } catch {
        dispatch({type:ADD_TO_CART_ERROR})
    }
}
export const deleteCartProducts = (id)=>async (dispatch)=>{
    dispatch({type:DELETE_ITEM_LOADING})
    try {
        let data = await removeCart(id)
        let res = await getCart()
        dispatch({type:DELETE_ITEM_SUCCESS,payload:res})
    } catch {
        dispatch({type:DELETE_ITEM_ERROR})
    }
}
export const increaseQuantity = (id,data)=>async (dispatch)=>{
    dispatch({type:INC_ITEM_QUANTITY_LOADING})
    try {
        let res = await changeQty(id,data)
        let cart = await getCart()
        dispatch({type:INC_ITEM_QUANTITY_SUCCESS,payload:cart})
    } catch {
        dispatch({type:INC_ITEM_QUANTITY_ERROR})
    }
}
export const decreaseQuantity = (id,data)=>async (dispatch)=>{
    dispatch({type:DEC_ITEM_QUANTITY_LOADING})
    try {
        let res = await changeQty(id,data)
        let cart = await getCart()
        dispatch({type:DEC_ITEM_QUANTITY_SUCCESS,payload:cart})
    } catch {
        dispatch({type:DEC_ITEM_QUANTITY_ERROR})
    }
}