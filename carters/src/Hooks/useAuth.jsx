import { getLiveUser } from '@/redux/Authentication/Auth.action';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
export const useAuth = () => {
    const isAuth = useSelector((store) => store.AuthUser.isAuth);
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getLiveUser())
    },[])

    return isAuth
}
