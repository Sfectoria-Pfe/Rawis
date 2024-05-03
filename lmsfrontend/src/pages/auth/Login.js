import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({setUpdate,update}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const login = async (body) => {
    try {
      const res = await axios.post("http://localhost:4000/auth", body)
      localStorage.setItem("token", JSON.stringify(res.data))//bech thot objet ka string 
      setUpdate(!update)
      navigate("/")
      return res.data
    } catch (err) {
      console.log(err);
    }
  }

  return (

    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Adresse e-mail</Form.Label>
          <Form.Control type="email" placeholder="Entrer votre adresse mail" onChange={(e) => setEmail(e.target.value)} />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control type="password" placeholder="Mot de passe" onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Mémoriser le mot de passe" />
        </Form.Group>
        <Button variant="primary" onClick={() => login({ email, password })}>
          Se connecter
        </Button>
      </Form>
    </Container>
  )
}

export default Login
