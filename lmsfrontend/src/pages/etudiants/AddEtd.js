import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import FullButton from "../../component/Buttons/FullButton";
import styled from 'styled-components';
import { Card } from 'react-bootstrap';


const AddEtd = () => {

  const [userEtd, setUserEtd] = useState({
    email: '',
    nom: "",
    prenom: ""
  });

  const [successSB, setSuccessSB] = useState(false);
  const [errorSB, setErrorSB] = useState(false);

  const openSuccessSB = () => setSuccessSB(true);
  const closeSuccessSB = () => setSuccessSB(false);
  const openErrorSB = () => setErrorSB(true);
  const closeErrorSB = () => setErrorSB(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserEtd({ ...userEtd, [name]: value });
  };

  const handleCreate = async () => {
    try {
      const response = await axios.post('http://localhost:4000/users/etudiant', userEtd);
      console.log('Utilisateur ajouté avec succès:', response.data);
      //open alert
      openSuccessSB();
      setTimeout(() => {
        closeSuccessSB()
        console.log("Retardée d'une seconde.");
      }, 3000);
      // Réinitialiser les champs après la création réussie
      setUserEtd({
        email: '',
        nom: "",
        prenom: ""
      });
    } catch (error) {
      //alert
      openErrorSB()

      console.error('Erreur lors de la création de l\'utilisateur:', error);

      setTimeout(() => {
        closeErrorSB()
        console.log("Retardée d'une seconde.");
      }, 3000);
    }
    //alert
  };
  console.log(userEtd, "userEtd");

  return (
    <Card style={{ width : "30rem"}}>
    <Form className='justify-content-center m-5'>
      <Form.Group className="mb-3">
        <Form.Label>Nom</Form.Label>
        <Form.Control
          type="text"
          name='nom'
          placeholder="Nom"
          onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Prénom</Form.Label>
        <Form.Control
          type="text"
          placeholder="Prénom"
          name='prenom'
          onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Email"
          name='email'
          onChange={handleChange} />
      </Form.Group>
      <BtnWrapper onClick={() => handleCreate()}>
        <FullButton title="Ajouter" />
      </BtnWrapper>
    </Form>
    </Card>
  )
}

export default AddEtd

const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
