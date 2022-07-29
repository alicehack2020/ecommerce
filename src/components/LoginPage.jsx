import axios from 'axios'
import React, { useContext, useState } from 'react'
import {AuthContext} from "../context/AuthContext"
const LoginPage = () => {
    const [email,setEmail]=useState("")
    const [password,setpassword]=useState("")

    const {login}=useContext(AuthContext)
   
    const handdleLogin=()=>{
        axios.post("https://reqres.in/api/login",{
            email,password
        }).then((res)=>login()).catch((res)=>alert("invalid login detais"))
    }

  return (
    <div>
        <input type="text" name="" id=""  value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="text" name="" id="" value={password} onChange={(e)=>setpassword(e.target.value)}/>
        <button onClick={handdleLogin}>login</button>
    </div>
  )
}

export default LoginPage