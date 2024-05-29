import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getOneWithHeader } from '../../helpers/httpReqWithHeader';
import ListeChap from '../chapitre/ListeChap';
import { MyContext } from '../../router/Router';
import FullButton from '../../component/Buttons/FullButton';
import styled from 'styled-components';
import { Card, CardContent, Typography, Button, CardMedia } from '@mui/material';
import Dots from "../../assets/svg/Dots";

import img from '../../img/pdf.png'
import axios from 'axios';

export default function CoursDetail() {
  const navigate = useNavigate()
  const { id } = useParams()
  const user = useContext(MyContext)
  const [cours, setCours] = useState([]);
  const [rows, setRows] = useState([])

  console.log(cours)
  const fetchOne = async () => {
    try {
      const resp = await getOneWithHeader(`cours/${id}`)
      setCours(resp.data)


    } catch (error) {
      console.log(error)
    }
  }

  const fetchChapitre = async () => {
    try {
      const resp = await axios.get(`http://localhost:4000/chapitres/allChapitres/${id}`)
      setRows(resp.data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchOne()
    fetchChapitre()
  }, [])

  return (
    <div>
      <div>
        <p className="text-uppercase" style={{ paddingBottom: "20px", textAlign: "center", fontWeight: "bold", fontSize: "30px" }}>{cours.title}</p>
      </div>
      <div>
        <p className="d-flex justify-content-center">{cours.description}</p>
      </div>
      {(user.role === "Enseignant") && <div className='d-flex justify-content-end py-3'>
        <BtnWrapper onClick={() => navigate("addChapitre")}>
          <FullButton title="Ajouter chapitre" />
        </BtnWrapper>
      </div>}
      {user.role === "Enseignant" ? <ListeChap /> : <div className='d-flex justify-content-center gap-3 flex-wrap'>
        {rows?.map((row, i) => {
          return (
            <Card sx={{ maxWidth: 200, margin: 2 }}>
              <CardMedia
                component="img"
                height="140"
                image={img}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {row?.title}
                </Typography>
                <Typography  variant="body2" color="text.secondary">
                  {row?.description}
                </Typography>
              </CardContent>
              <Button size="small" onClick={() => (navigate(`${row?.id}`))}>View</Button>
              <Button size="small" onClick={() => (navigate(`${row?.id}/reponse`))}>QCM</Button>
            </Card>

          )
        })}
      </div>}
    </div>
  )
}

const BtnWrapper = styled.div`
  max-width: 150px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;

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

const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;