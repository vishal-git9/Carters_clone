import axios from "axios"

export const getCart = async ()=> {
    let res = await axios.get(`http://localhost:8080/Cart`)
    let data = res.data
}

export const addtoCart = async (data)=>{
    let res = await axios.post(`http://localhost:8080/Cart`,data)
}

export const removeCart = async (id)=>{
    let res = await axios.delete(`http://localhost:8080/Cart/${id}`)
}

export const changeQty = async (id,data)=>{
    let res = await axios.patch(`http://localhost:8080/Cart/${id}`,data)
}