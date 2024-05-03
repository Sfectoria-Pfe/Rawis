import React, { useContext } from 'react'
import { MyContext } from './Router'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({component, roles}) => {
    const user = useContext(MyContext)
    if (roles.includes(user.role)) 
    {
        return component         
    } 
    else 
    {
        return <Navigate to='/' />
    }
}

export default PrivateRoute
