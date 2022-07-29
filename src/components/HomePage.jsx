import React,{useContext} from 'react'
import {AuthContext} from "../context/AuthContext"

const HomePage = () => {
const {logout}=useContext(AuthContext)

  return (
    <div onClick={()=>logout()}>
     logout
    </div>
  )
}

export default HomePage