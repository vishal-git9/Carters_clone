import { GET_KIDS_PRODUCTS_SUCCESS,GET_KIDS_PRODUCTS_ERROR,GET_KIDS_PRODUCTS_LOADING } from "./kids.types";

const intialState = {
    data:[],
    error:false,
    loading:true
}

export const Kidsreducer = (state=intialState,{type,payload})=>{
    switch(type){
        case GET_KIDS_PRODUCTS_SUCCESS:{
            return{
                ...state,
                data:payload,
                loading:false,
                error:false
            }
        }
        case GET_KIDS_PRODUCTS_ERROR:{
            return{
                ...state,
                error:true
            }
        }
        case GET_KIDS_PRODUCTS_LOADING:{
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