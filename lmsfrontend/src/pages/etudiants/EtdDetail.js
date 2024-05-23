import React, { useEffect, useState } from 'react'
import { MDBCol,MDBRow, MDBCard,MDBCardText,MDBCardBody} from 'mdb-react-ui-kit';
import { getOneWithHeader } from '../../helpers/httpReqWithHeader';
import { useParams } from 'react-router-dom';

const EtdDetail = () => {
  const { id } = useParams()

  const [user, setUser] = useState([]);


  const fetchOne = async () => {
    try {
      const resp = await getOneWithHeader(`users/etudiant/${id}`)
      setUser(resp.data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchOne()
  },[])

  return (
    <MDBCard className="mb-4">
    <MDBCardBody>
      <MDBRow>
        <MDBCol sm="3">
          <MDBCardText>Nom</MDBCardText>
        </MDBCol>
        <MDBCol sm="9">
          <MDBCardText className="text-muted">{user.nom}</MDBCardText>
        </MDBCol>
      </MDBRow>
      <hr />
      <MDBRow>
        <MDBCol sm="3">
          <MDBCardText>Prénom</MDBCardText>
        </MDBCol>
        <MDBCol sm="9">
          <MDBCardText className="text-muted">{user.prenom}</MDBCardText>
        </MDBCol>
      </MDBRow>
      <hr />
      <MDBRow>
        <MDBCol sm="3">
          <MDBCardText>Email</MDBCardText>
        </MDBCol>
        <MDBCol sm="9">
          <MDBCardText className="text-muted">{user.email}</MDBCardText>
        </MDBCol>
      </MDBRow>
      <hr />
      <MDBRow>
        <MDBCol sm="3">
          <MDBCardText>Téléphone</MDBCardText>
        </MDBCol>
        <MDBCol sm="9">
          <MDBCardText className="text-muted"> {user.phone} </MDBCardText>
        </MDBCol>
      </MDBRow>
      <hr />
      <MDBRow>
        <MDBCol sm="3">
          <MDBCardText>Role</MDBCardText>
        </MDBCol>
        <MDBCol sm="9">
          <MDBCardText className="text-muted">{user.role}</MDBCardText>
        </MDBCol>
      </MDBRow>
    </MDBCardBody>
  </MDBCard>
)
}

export default EtdDetail
