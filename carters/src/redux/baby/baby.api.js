import axios from "axios";
// http://localhost:8080/babyGirl?rating_like=5 for rating
// http://localhost:8080/babyGirl?q=Easter for categories
export async function getBabyApi(){
    const res = await axios.get(`http://localhost:8080/babyGirl`)
    const data = res.data

    return data
}

export async function getFilteredApi(query){
    const res  = await axios.get(`http://localhost:8080/babyGirl?q=${query}`)
    const data = res.data

    return data
}
export async function getRatedApi(){
    const res  = await axios.get(`http://localhost:8080/babyGirl?rating_like=5`)
    const data = res.data
    return data
}
export async function getLatestArrival(){
    const res  = await axios.get(`http://localhost:8080/babyGirl?new_like=true`)
    const data = res.data
    return data
}
export async function getPriceApi(price){
    const res  = await axios.get(`http://localhost:8080/babyGirl?_sort=price&_order=${price}`)
    const data = res.data
    return data
}