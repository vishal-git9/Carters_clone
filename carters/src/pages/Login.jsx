import React from 'react'
import LoginCard from '@/components/LoginPage'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { getLoginData } from '@/redux/Authentication/Auth.action'
 const Login = () => {
    const [formData,setFormData] = useState({})
    const [loginData,setLoginData] = useState(null)
    const dispatch = useDispatch()
    const router = useRouter()
    const getData = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const submitForm = ()=>{
        setLoginData(formData)
        router.push("/")
    }
    useEffect(()=>{
        if(loginData!=null){
            dispatch(getLoginData(loginData))
            localStorage.setItem("liveUser",JSON.stringify(loginData))
        }
    },[loginData])
  return (
    <div>
        <LoginCard getData = {getData} submitForm = {submitForm}/>
    </div>
  )
}

export default Login
