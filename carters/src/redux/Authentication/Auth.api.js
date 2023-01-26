export function getLogin(data){
    let res = JSON.parse(localStorage.getItem("loginUser")) || []

    let userData = res.filter((el)=>{
        if(data.email===el.email && data.password ===el.password){
            return el
        }
    })
    if(userData.length!==0){
        return userData
    }else{
        return null
    }
}

export function signup(data){
    let res = JSON.parse(localStorage.getItem("loginUser")) || []
    res.push(data)
    localStorage.setItem("loginUser",JSON.stringify(res))

}