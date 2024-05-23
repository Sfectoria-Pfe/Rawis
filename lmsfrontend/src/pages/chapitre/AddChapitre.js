import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate, useParams } from 'react-router-dom';


const AddChapitre = () => {
  const [validated, setValidated] = useState(false);
  const [pdf, setPdf] = useState("")
  const [previewPdf, setPreviewPdf] = useState("")
  const { id } = useParams()
  const [chapitre, SetChapitre] = useState({
    title: '',
    description :'', 
    link: '',
    coursId: id
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    SetChapitre({
      ...chapitre,
      [name]: value
    })
  }

  console.log(chapitre, "chapitre");
  const navigate = useNavigate()

  const handleFileChange = (e) => {
    setPdf(e.target.files[0])
    const preview = URL.createObjectURL(e.target.files[0])
    setPreviewPdf(preview)

  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget;//bech tepionti ala ll form 
    console.log(form);
    if (form.checkValidity() === false) {
      event.preventDefault();//bech mayrefrechich ll page
      event.stopPropagation();// bech may2atherch aala les balises lokhrin 
      setValidated(true) // ydhahharli les feedback
    } else {


      var formData = new FormData();

      formData.append('file', pdf)
      const response = await axios.post("http://localhost:4000/upload", formData)
      const chapitrewithPdf = { ...chapitre, link: response.data.path }
      console.log(chapitrewithPdf, "chapitrewithPdf ");
      await axios.post("http://localhost:4000/chapitres", chapitrewithPdf)
      navigate(`/cours/${id}`)
    }


    setValidated(true);
  };

  return (
    <div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3 d-flex">
          <Form.Group md="4" controlId="validationCustom01">
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
            <Form.Label>Lien</Form.Label>
            <Form.Control
              required
              type="file"
              placeholder="lien"
              onChange={handleFileChange}
              name='link'
            />
            <Form.Control.Feedback>Trés bien</Form.Control.Feedback>
          </Form.Group>

          {previewPdf && <iframe src={previewPdf} height={300} className='mt-5'></iframe>}
        </Row>

        <Button type="submit">Ajouter</Button>
      </Form>
    </div>

  )
}

export default AddChapitre