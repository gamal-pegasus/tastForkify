// import React, { useEffect } from 'react'
//   async function getdata(){
//     let response=await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza')
//     let data= await response.json()
//     console.log(data.recipes);
    
import React, { useEffect, useState } from 'react'
import getdata from '../GetData/GetData'; 

export default function Pizza(){
    const [data, setData] = useState(null);
     useEffect(()=>{
        async function fetchData () {

            let response=await getdata('pizza')
            setData(response);
            // console.log(response);
        }
        fetchData()
    },[]);
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
   
  
