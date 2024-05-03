import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';



const AddCours = () => {
  const [validated, setValidated] = useState(false);
  const [cours, setCours] = useState({
    title: ''
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setCours({
      ...cours,
      [name]: value
    })
  }
  console.log(cours, "cours");
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget;//bech tepionti ala ll form 
    console.log(form);
    if (form.checkValidity() === false) {
      event.preventDefault();//bech mayrefrechich ll page
      event.stopPropagation();// bech may2atherch aala les balises lokhrin 
      setValidated(true) // ydhahharli les feedback
    } else {
     await axios.post("http://localhost:4000/cours", cours)
      navigate(-1)
    }


    setValidated(true);
  };
  return (
    <div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
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
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

        </Row>


        <Button type="submit">Ajouter</Button>
      </Form>
    </div>
  )
}

export default AddCours
