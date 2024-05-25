import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import FullButton from '../../component/Buttons/FullButton';
import { Card } from 'react-bootstrap';



const AddCours = () => {
  const [validated, setValidated] = useState(false);
  const [image, setImage] = useState();
  const [preview, setPreview] = useState("");


  const [cours, setCours] = useState({
    title: '',
    description: '',
    imgUrl: ''
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setCours({
      ...cours,
      [name]: value
    })
  }
  const navigate = useNavigate()


  const handleSubmit = async (event) => {
    const formDta = new FormData()
    formDta.append('file', image)


    const responseImage = await axios.post("http://localhost:4000/upload", formDta)
    const courss = { ...cours, imgUrl: responseImage.data.path }

    event.preventDefault()
    const form = event.currentTarget;//bech tepionti ala ll form 
    console.log(form);
    if (form.checkValidity() === false) {
      event.preventDefault();//bech mayrefrechich ll page
      event.stopPropagation();// bech may2atherch aala les balises lokhrin 
      setValidated(true) // ydhahharli les feedback
    } else {
      await axios.post("http://localhost:4000/cours", courss)
      navigate(-1)
    }
    setValidated(true);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const preview = URL.createObjectURL(e.target.files[0])
    setPreview(preview)
    setImage(file)
  };

  return (
    <div className='d-flex justify-content-center align-items-center' style={{ height: '80vh' }}>
    <Card style={{ width: '30rem' }}>
      <Form className='justify-content-center m-5' noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group >
            <Form.Label>Titre</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Titre"
              onChange={handleChange}
              name='title'
            />
            <Form.Label>Description</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Description"
              onChange={handleChange}
              name='description'
              />
            <Form.Label>Image</Form.Label>
            <Form.Control
              required
              type="file"
              placeholder="Image"
              onChange={handleFileChange}
              name='imgUrl'
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

        </Row>
        <BtnWrapper type="submit">
          <FullButton title="Ajouter" />
        </BtnWrapper>


        {/* <Button type="submit">Ajouter</Button> */}
      </Form>
    </Card>
  </div>
  )
}

export default AddCours

const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
