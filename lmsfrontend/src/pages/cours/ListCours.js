import React, { useEffect, useState } from 'react'
import Liste from '../../components/Liste';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { GridActionsCellItem } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const ListCours = () => {

  const [rows, setRows] = useState([])
  const navigate=useNavigate()
  const columns = [
    {
      field: 'title',
      headerName: 'Matière',
      width: 150,
      editable: true,
    },
    {
      
        field: 'actions',
        headerName: 'Action',
        type: 'actions',
        width: 80,
        getActions: (params) => [
          <GridActionsCellItem 
          icon={<DeleteIcon/>}
          />,
          <GridActionsCellItem 
          icon={<RemoveRedEyeIcon/>}
          onClick={()=>navigate(`coursDetail/${params.row.id}`)}
          />
        ],
      },
  
    
  ];
  
  const fetchCours = async () => {
    try {
      const resp = await axios.get('http://localhost:4000/cours')
      setRows(resp.data)

    } catch (error) {
      console.log(error)
    }
  }
  console.log(rows)
  useEffect(() => {
    fetchCours()
  }
    , [])
  return (
    <div>
      <div className='d-flex justify-content-end py-3'>
        <button className='btn btn-primary' onClick={()=>navigate("addCours")}>Add cours</button>
      </div>
      <Liste columns={columns} rows={rows} />
    </div>
  )
}

export default ListCours
