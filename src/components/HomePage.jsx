import React from 'react'
import { useEffect, useState } from 'react'
import "./HomePage.css"
const HomePage = () => {
const [data,setData]=useState([])
const [order,setOrder]=useState("asc")
 
useEffect(()=>{
 // loadData()
 fetch(`https://ecommercjson.herokuapp.com/products?_order=${order}`)
 .then(response => response.json())
 .then(data => setData(data)); 
}) 
 
// const loadData=()=>{
 
// }

 
 

const ascHanddle=()=>{
  setOrder("asc")
}

const decHanddle=()=>{
  setOrder("dec")

}

 return (
    <>
    {/* <div onClick={()=>logout()}>
     logout
    </div> */}
    <div>
    <div>log-Out</div>
    <button onClick={ascHanddle}>asc</button>
    <button onClick={decHanddle}>dec</button>
     

    {
      data.map((ele)=>{
        return(<div>
          <h1>{ele.title}</h1>
          <p>{ele.rating}</p>
          <img src={ele.imageLink} className="product_image" alt='hello'></img>
        </div>)
      })
    }
    </div>
   

    </>


  )
}

export default HomePage