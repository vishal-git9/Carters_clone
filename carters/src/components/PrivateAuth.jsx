import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
export const PrivateAuthProvider = ({children}) => {
    const isAuth = useSelector((store) => store.AuthUser.isAuth);
    const router = useRouter()
    const checkAuth = ()=>{
        if(!isAuth){
            return router.push("/Signup")
        }

        return children
    }
    useEffect(()=>{
       checkAuth()
    },[])

}
