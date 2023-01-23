import { GET_CART_LOADING,GET_CART_ERROR,GET_CART_SUCCESS,ADD_TO_CART_LOADING,ADD_TO_CART_ERROR,ADD_TO_CART_SUCCESS,DELETE_ITEM_LOADING,DELETE_ITEM_ERROR,DELETE_ITEM_SUCCESS,INC_ITEM_QUANTITY_ERROR,INC_ITEM_QUANTITY_LOADING,INC_ITEM_QUANTITY_SUCCESS,DEC_ITEM_QUANTITY_ERROR,DEC_ITEM_QUANTITY_LOADING,DEC_ITEM_QUANTITY_SUCCESS} from "./cart.types";

const intialState = {
    Cart:[],
    loading:false,
    error:false
}


export const cartReducer = (state=intialState,{type,payload})=>{
    switch(type){
        case GET_CART_LOADING:{
            return{
                ...state,
                loading:true,
                error:false
            }
        }
        case GET_CART_ERROR:{
            return{
                ...state,
                loading:true,
                error:true
            }
        }
        case GET_CART_SUCCESS:{
            return{
                ...state,
                Cart:payload,
                loading:false
            }
        }
        case ADD_TO_CART_LOADING:{
            return{
                ...state,
                loading:true,
                error:false,
            }
        }
        case ADD_TO_CART_ERROR:{
            return{
                ...state,
                loading:false,
                error:true,
            }
        }
        case ADD_TO_CART_SUCCESS:{
            return{
                ...state,
                loading:false,
                error:false,
                Cart:[...state.Cart,payload]
            }
        }
        case DELETE_ITEM_ERROR:{
            return{
                ...state,
                loading:true,
                error:true,
            }
        }
        case DELETE_ITEM_LOADING:{
            return{
                ...state,
                loading:true,
                error:false,
            }
        }
        case DELETE_ITEM_SUCCESS:{
            return{
                ...state,
                loading:false,
                error:false,
                Cart:payload
            }
        }
        case INC_ITEM_QUANTITY_ERROR:{
            return{
                ...state,
                loading:false,
                error:true,
            }
        }
        case INC_ITEM_QUANTITY_LOADING:{
            return{
                ...state,
                loading:true,
                error:false,
            }
        }
        case INC_ITEM_QUANTITY_SUCCESS:{
            return{
                ...state,
                loading:false,
                error:false,
                Cart:payload
            }
        }

        case DEC_ITEM_QUANTITY_LOADING:{
            return{
                ...state,
                loading:true,
                error:false,
            }
        }
        case DEC_ITEM_QUANTITY_ERROR:{
            return{
                ...state,
                loading:false,
                error:true,
            }
        }
        case DEC_ITEM_QUANTITY_SUCCESS:{
            return{
                ...state,
                loading:false,
                error:false,
                Cart:payload
            }
        }

        default:{
            return state
        }
    }
}