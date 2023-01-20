export function getLogin(data){
    let res = JSON.parse(localStorage.getItem("loginUser")) || []

    res.map((el)=>{
        if(data.username===el.username){
            return el
        }
    })

    return null
}

export function signup(data){
    let res = localStorage.getItem("loginUser") || []
    res.push(data)
    localStorage.setItem("loginUser",JSON.stringify(res))

}