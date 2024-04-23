import React, { useEffect, useState } from 'react'
import Liste from '../../components/Liste';
import axios from 'axios';


const columns = [
  {
    field: 'title',
    headerName: 'Matière',
    width: 150,
    editable: true,
  },
  {
    field: 'Action',
    
  }
];

const ListCours = () => {

  const [rows,setRows]= useState([])

  const fetchCours = async () =>{
  try{
    const resp = await axios.get('http://localhost:4000/cours')
    setRows(resp.data)
    
  } catch (error) {
    console.log(error)
  }
  }
      console.log(rows)
   useEffect (()=>{
    fetchCours()
   }
   ,[] )
  return (
    <div>
      <Liste columns ={columns} rows={rows}/>
    </div>
  )
}

export default ListCours
