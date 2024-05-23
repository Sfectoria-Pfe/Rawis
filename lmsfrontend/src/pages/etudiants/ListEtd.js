import React, { useContext, useEffect, useState } from 'react'
import Liste from '../../components/Liste';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { GridActionsCellItem } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Delete from '../../components/Delete';
import { getWithHeader } from '../../helpers/httpReqWithHeader';
import { MyContext } from '../../router/Router';
import styled from 'styled-components';
import FullButton from "../../component/Buttons/FullButton";



const ListEtd = () => {

  const [selectId, setSelectId] = useState('');
  const [update, setUpdate] = useState(false);
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState([])
  const navigate = useNavigate()
  const user = useContext(MyContext)

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:4000/users/${selectId}`)
      setUpdate(!update)
      handleClose()
    } catch (error) {
      console.log(error)
    }
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'nom',
      headerName: 'Nom',
      width: 150,
      editable: true,
    },
    {
      field: 'prenom',
      headerName: 'Prénom',
      width: 150,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 150,
      editable: true,
    },
    {
      field: 'phone',
      headerName: 'Téléphone',
      width: 150,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Nom complet',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
    {
      field: 'Action',
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
    }
  ];

  const fetchEtd = async () => {
    try {
      const resp = await getWithHeader('users/etudiant')
      setRows(resp.data)

    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchEtd()
  }
    , [update])

  return (
    <div>
      <Delete open={open} handleClose={handleClose} handleDelete={handleDelete} />
      {(user.role == "Admin") && <div className='d-flex justify-content-end py-3'>
        <BtnWrapper onClick={() => navigate("addEtudiant")}>
          <FullButton title="Ajouter etudiant" />
        </BtnWrapper>
      </div>}
      <Liste rows={rows} columns={columns} />
    </div>
  )
}

export default ListEtd


const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
