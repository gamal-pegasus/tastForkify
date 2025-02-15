import React, { useEffect, useState } from 'react'
import getdata from '../GetData/GetData'

export default function Goat() {
    const [data,setData]= useState(null)
    useEffect(()=>{
        async function fetchGoat() {
            let response =await getdata('goat')
            setData(response)
            
        }
        fetchGoat()


    },[])

    if (!data) {
        return <div>Loading...</div>; 
      }
  return <>
  <div className=" container mt-4">
       <div className="row">
        {data.map((item,index)=>(
       <div key={index} className="  text-center  col-md-3 ">
        <img src={item.image_url} className=' w-100' alt="" />
        <h1>{item.title}</h1>

      </div>
        ))}
       </div>
   </div>
  </>
}
