import React from 'react'
import SignupCard from '@/components/SignupPage'
import { useState } from 'react'
import { useEffect } from 'react'
import { signup } from '@/redux/Authentication/Auth.api'
import { useRouter } from 'next/router'
 const Signup = () => {
    const router = useRouter()
    const [formData,setFormData] = useState({})
    const [submitData,setSubmitData] = useState(null)
    const SubmitForm = ()=>{
        setSubmitData(formData)
        router.push("/Login")
    }
    const getData = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    useEffect(()=>{
        if(submitData!=null){
            signup(submitData)
        }
    },[submitData])
    console.log(formData)
  return (
    <div>
        <SignupCard getData={getData} SubmitForm = {SubmitForm}/>
    </div>
  )
}

export default Signup