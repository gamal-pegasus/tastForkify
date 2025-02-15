import React, { useEffect, useState } from 'react'
import getdata from './GetData/GetData'
import Nav from './Pizza/Navbar/Nav';
export default function Corn() {
  const [data,setData]= useState(null);
  useEffect(()=>{
    async function fetchCorn() {
      let response= await getdata('corn');
      setData(response);
    }
    fetchCorn()
  },[])
  if (!data) {
    return <div>Loading...</div>; 
  }
  return<>

 
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
