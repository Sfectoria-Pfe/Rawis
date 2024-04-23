import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Registre = () => {
  return (
    <div>
        <Form>
  <Form.Group className="mb-3" controlId="formBasicNom">
    <Form.Label>Nom</Form.Label>
    <Form.Control type="text" placeholder="Nom" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPrenom">
    <Form.Label>Prénom</Form.Label>
    <Form.Control type="text" placeholder="Prénom" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Mot de passe</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
    <Form.Label>Confirmation du mot de passe</Form.Label>
    <Form.Control type="password" placeholder="Confirm Password" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPhone">
    <Form.Label>Téléphone</Form.Label>
    <Form.Control type="text" placeholder="Phone" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicMatiere">
    <Form.Label>Matière</Form.Label>
    <Form.Control type="text" placeholder="Matière" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Sign Up
  </Button>
</Form>

    </div>
  )
}

export default Registre
