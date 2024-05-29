import React, { useEffect, useState } from 'react'
import Liste from '../components/Liste';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { GridActionsCellItem } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Delete from '../components/Delete';
import { getWithHeader } from '../helpers/httpReqWithHeader';
import { toast } from 'react-toastify';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
const Transition =React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
const Contact = () => {
    const [selectId, setSelectId] = useState('');
    const [update, setUpdate] = useState(false);
    const [open, setOpen] = useState(false);
    const [openDetail, setOpenDetail] = useState(false);
    const [rows, setRows] = useState([])
    const [selectedContact, setSelectedContact] = useState({})
    const navigate = useNavigate()
  
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleOpenDetail = () => {
      setOpenDetail(true);
    };
    const handleCloseDetail = () => {
      setOpenDetail(false);
    };
    const handleClose = () => {
      setOpen(false);
    };
    const handleDelete = async () => {
      try {
        await axios.delete(`http://localhost:4000/contacts/${selectId}`)
        setUpdate(!update)
        handleClose()
        toast.success("votre profil a été modifie!");
      } catch (error) {
        console.log(error)
        toast.error("Error")
      }
    };
  
    const columns = [
      {
        field: 'name',
        headerName: 'Nom',
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
        field: 'sujet',
        headerName: 'Sujet',
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
            onClick={() =>{ 
            setSelectedContact(params.row)
                handleOpenDetail()}}
          />
        ],
      }
    ];
  
    const contacts = async () => {
      try {
        const resp = await getWithHeader('contacts')
        setRows(resp.data)
  
      } catch (error) {
        console.log(error)
      }
    }
    useEffect(() => {
      contacts()
    }
      , [update])
  
    return (
      <div>
        <Delete open={open} handleClose={handleClose} handleDelete={handleDelete} />
        <Liste rows={rows} columns={columns} />
        <Dialog
        open={openDetail}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseDetail}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{selectedContact?.sujet}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
         detail
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDetail}>Fermer</Button>
         
        </DialogActions>
      </Dialog>
      </div>
    )
  }
  

export default Contact
