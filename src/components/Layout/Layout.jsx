import React from 'react'
import Nav from '../Pizza/Navbar/Nav'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return <>
  <Nav/>

<Outlet></Outlet>  
  
  </>
}
