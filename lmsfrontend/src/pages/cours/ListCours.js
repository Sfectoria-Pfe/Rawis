import React, { useContext, useEffect, useState } from 'react'
import Liste from '../../components/Liste';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { GridActionsCellItem } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Delete from '../../components/Delete';
import { MyContext } from '../../router/Router'
import CoursGrid from '../../components/CoursGrid';
import styled from 'styled-components';
import FullButton from '../../component/Buttons/FullButton';

const ListCours = () => {
  const location = useLocation();
  const { elem, field } = location.state
  console.log(elem, "elem");
  console.log(field, "fff");
  const user = useContext(MyContext)
  const [selectId, setSelectId] = useState('');
  const [update, setUpdate] = useState(false);
  const [open, setOpen] = useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = async () => {
    try {
      console.log(selectId)
      await axios.delete(`http://localhost:4000/cours/${selectId}`)
      setUpdate(!update)
      handleClose()
    } catch (error) {
      console.log(error)
    }
  };

  const [rows, setRows] = useState([])
  const navigate = useNavigate()
  const columns = [
    {
      field: 'title',
      headerName: 'Matière',
      width: 150,
      editable: true,
    },
    {
      field: 'description',
      headerName: 'Description',
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

  const fetchCours = async () => {
    try {
      const resp = await axios.get('http://localhost:4000/cours')
      console.log(resp.data, "resp.data");
      const filtredCourses = resp.data.filter((cours) => cours?.semestre === elem && cours.Field?.title === field
      )
      console.log(filtredCourses, "filtredCourses");
      setRows(filtredCourses)

    } catch (error) {
      console.log(error)
    }
  }
  console.log(rows)
  useEffect(() => {
    fetchCours()
  }
    , [update])//kol matetbadel update awed useEffect / depeendecy array
  console.log(rows, "rows");
  return (
    <div>
      <Delete open={open} handleClose={handleClose} handleDelete={handleDelete} />
      {(user.role == "Enseignant")
        &&
        <div className='d-flex justify-content-end py-3'>
        <BtnWrapper onClick={() => navigate("addCours")}>
          <FullButton title="Ajouter cours " />
        </BtnWrapper>
      </div>}
      
      {
        (user.role === 'Enseignant' || user.role === 'Admin') ? (
          <Liste columns={columns} rows={rows} />
        ) : (
          <CoursGrid rows={rows} />
        )
      }
    </div >
  )
}

export default ListCours

const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;