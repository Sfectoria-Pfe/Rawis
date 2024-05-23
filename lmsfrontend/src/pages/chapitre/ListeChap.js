import React, { useEffect, useState } from 'react'
import { GridActionsCellItem } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Liste from '../../components/Liste';
import Delete from '../../components/Delete';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { MyContext } from '../../router/Router';
import styled from 'styled-components';



const ListeChap = () => {

  const [open, setOpen] = useState(false);
  const [selectId, setSelectId] = useState('');
  const [update, setUpdate] = useState(false);
  const [rows, setRows] = useState([]);
  const navigate=useNavigate()
  const user =useContext(MyContext)
  const {id}= useParams()
  

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = async () => {
    try {
      console.log(selectId)
      await axios.delete(`http://localhost:4000/chapitres/${selectId}`)
      setUpdate(!update)
      handleClose()
    } catch (error) {
      console.log(error)
    }
  };

  const fetchChapitre = async () => {
    try {
      const resp = await axios.get(`http://localhost:4000/chapitres/allChapitres/${id}`)
      setRows(resp.data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchChapitre()
  },[update])

  const columns = [
    {
      field: 'title',
      headerName: 'Titre',
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
          icon={<DeleteIcon />}
          onClick={() => {
            setSelectId(params.row.id)
            handleClickOpen()
          }}
        />,
        <GridActionsCellItem
          icon={<RemoveRedEyeIcon />}
          onClick={() => navigate(`${params.row.id}`)}
        />
      ],
    },
  ];


  return (

    <div>
      <Liste columns={columns} rows={rows} />
      <Delete open={open} handleClose={handleClose} handleDelete={handleDelete} />

    </div>
  )
}

export default ListeChap

const DotsWrapper = styled.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;