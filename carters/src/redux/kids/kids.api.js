import axios from "axios";
// http://localhost:8080/babyGirl?rating_like=5 for rating
// http://localhost:8080/babyGirl?q=Easter for categories
export async function getkidsApi(){
    const res = await axios.get(`https://diapers-backnd.onrender.com/Kids`)
    const data = res.data

    return data
}
export async function getLatestArrival(){
    const res  = await axios.get(`https://diapers-backnd.onrender.com/Kids?new_like=true`)
    const data = res.data
    return data
}
export async function getFilteredApi(query){
    const res  = await axios.get(`https://diapers-backnd.onrender.com/Kids?q=${query}`)
    const data = res.data

    return data
}
export async function getRatedApi(){
    const res  = await axios.get(`https://diapers-backnd.onrender.com/Kids?rating_like=5`)
    const data = res.data
    return data
}
export async function getPriceApi(price){
    const res  = await axios.get(`https://diapers-backnd.onrender.com/Kids?_sort=price&_order=${price}`)
    const data = res.data
    return data
}

// kids product details api


export async function getProductDetails(id){
    const res  = await axios.get(`https://diapers-backnd.onrender.com/Kids/${id}`)
    const data = res.data
    return data
}