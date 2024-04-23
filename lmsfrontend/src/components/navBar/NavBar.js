import React from 'react'
import { IoMdOpen } from "react-icons/io";


const NavBar = ({setToggle, toggle}) => {

  return (
    <div className='position-fixed bg-warning w-100' style={{paddingLeft: toggle ? 240 : 0 , height:70}}>
      {!toggle && <button className='btn btn-light 'onClick={()=>{setToggle(true)}}><IoMdOpen /></button>}
    </div>  
  )
}

export default NavBar
