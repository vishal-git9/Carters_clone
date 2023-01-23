import axios from "axios"

export const getOrders = async ()=> {
    let res = await axios.get(`https://diapers-backend.onrender.com/orders`)
    let data = res.data
    return data
}

export const addtoOrders = async (data)=>{
    let res = await axios.post(`https://diapers-backend.onrender.com/orders`,data)
}