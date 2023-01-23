import axios from "axios"

export const getCart = async ()=> {
    let res = await axios.get(`https://diapers-backnd.onrender.com/Cart`)
    let data = res.data
    return data
}

export const addtoCart = async (data)=>{
    let res = await axios.post(`https://diapers-backnd.onrender.com/Cart`,data)
}

export const removeCart = async (id)=>{
    let res = await axios.delete(`https://diapers-backnd.onrender.com/Cart/${id}`)
    let data = res.data
    return data
}


export const changeQty = async (id,val)=>{
    let res = await axios.patch(`https://diapers-backnd.onrender.com/Cart/${id}`,{
        quantity: val,
    })
    return res
}