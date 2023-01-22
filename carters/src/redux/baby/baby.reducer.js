import { GET_BABY_PRODUCTS_SUCCESS,GET_BABY_PRODUCTS_ERROR,GET_BABY_PRODUCTS_LOADING } from "./baby.types";

const intialState = {
    data:[],
    error:false,
    loading:false
}

export const Babyreducer = (state=intialState,{type,payload})=>{
    switch(type){
        case GET_BABY_PRODUCTS_SUCCESS:{
            return{
                ...state,
                data:payload,
                loading:false,
                error:false
            }
        }
        case GET_BABY_PRODUCTS_ERROR:{
            return{
                ...state,
                error:true
            }
        }
        case GET_BABY_PRODUCTS_LOADING:{
            return{
                ...state,
                loading:true
            }
        }

        default:{
            return state
        }
    }
}