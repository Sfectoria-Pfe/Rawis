import React from 'react'
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export default function HeaderPage({parent,firstChild}) {
  return (

    <div className="">

      <div className=" d-flex align-items-center  pt-3 px-2 ">
        <p className='fs-5'>{parent}</p> <p> <ArrowRightIcon /> {firstChild}  </p></div>
    </div>

  
  )
}
