import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Corn from './components/Corn'
import Pizza from './components/pizza/Pizza'
import Layout from './components/Layout/Layout'
import Goat from './components/Goat/Goat'



 let router= createBrowserRouter([{path:'',element:<Layout/>,children:[
  {path:'',element:<Pizza/>},
  {path:'corn',element:<Corn/>},
  {path:'goat',element:<Goat/>}
 ]}

])

export default function App() {
  return  <>
  <RouterProvider router={router}/>  
 
  
  </>
}
