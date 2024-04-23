import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBarHome from '../components/navBar/NavBarHome'

const Client = () => {
  return (
    <div>
      <NavBarHome/>
      <Outlet/>
    </div>
  )
}

export default Client
