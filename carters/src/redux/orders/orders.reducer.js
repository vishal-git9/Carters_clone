import { GET_ORDERS_ERROR,GET_ORDERS_LOADING,GET_ORDERS_SUCCESS,ADD_TO_ORDERS_ERROR,ADD_TO_ORDERS_LOADING,ADD_TO_ORDERS_SUCCESS} from "./orders.types";

const intialState = {
    Orders:[],
    loading:false,
    error:false
}

export const orderReducer = (state=intialState,{type,payload})=>{
    switch(type){
        case GET_ORDERS_LOADING:{
            return{
                ...state,
                loading:true,
                error:false
            }
        }
        case GET_ORDERS_SUCCESS:{
            return{
                ...state,
                loading:false,
                error:false,
                Orders:payload
            }
        }
        case GET_ORDERS_ERROR:{
            return{
                ...state,
                loading:false,
                error:true
            }
        }
        case ADD_TO_ORDERS_ERROR:{
            return{
                ...state,
                loading:false,
                error:true
            }
        }
        case ADD_TO_ORDERS_LOADING:{
            return{
                ...state,
                loading:true,
                error:false
            }
        }
        case ADD_TO_ORDERS_SUCCESS:{
            return{
                ...state,
                loading:false,
                error:false,
                Orders:payload
            }
        }
        default:{
            return state
        }
    }
}