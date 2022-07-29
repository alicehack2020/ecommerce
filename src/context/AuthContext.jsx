import React, { createContext, useState } from 'react'
export const AuthContext=createContext()
const AuthContextProvider = ({children}) => {
 const [auth,setAuth]=useState(false)

 const login=()=>{
    setAuth(true)
    alert("login Sucessfully")
 }

 const logout=()=>{
    setAuth(false)
    alert("logout Sucessfully")

 }

  return (
     <AuthContext.Provider value={{auth,login,logout}}>
        {children}
     </AuthContext.Provider>
  )
} 

export default AuthContextProvider