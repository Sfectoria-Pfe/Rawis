import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'

const Login = () => {
  return (
   
      <Container>  
       <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Adresse e-mail</Form.Label>
        <Form.Control type="email" placeholder="Entrer votre adresse mail" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Mot de passe</Form.Label>
        <Form.Control type="password" placeholder="Mot de passe" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Mémoriser le mot de passe" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Se connecter
      </Button>
    </Form>
  </Container>
  )
}

export default Login
