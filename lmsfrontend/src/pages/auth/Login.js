import React, { useState } from 'react'
// import image from '../../assets/img/elarning.png'
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/orm';
// import Container from 'react-bootstrap/Container'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  MDBCol, MDBRow, MDBInput, MDBCheckbox, MDBContainer, MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
} from 'mdb-react-ui-kit';
import img from '../../img/login.avif'
import styled from 'styled-components';
import FullButton from "../../component/Buttons/FullButton";
import LogoIcon from "../../assets/svg/Logo";

const Login = ({ setUpdate, update }) => {
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


    <MDBContainer className='d-flex justify-content-center align-items-center ' style={{ height: '100vh' }}>
      <MDBCard className='text-black m-5' style={{ width: '50rem' }}>

        <MDBRow className='g-0 d-flex align-items-center'>

          <MDBCol md='4'>
            <MDBCardImage src={img} alt='phone' className='rounded-t-5 rounded-tr-lg-0' fluid />
          </MDBCol>

          <MDBCol md='8'>

            <MDBCardBody>
              <div className='d-flex flex-row mt-2 fw-normal my-4 pb-3"' style={{ fontSizez: "40px" }}>
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} />
                <LogoIcon />
                <h1 style={{ marginLeft: "15px" }} className="font20 extraBold">
                  Elite
                </h1>
              </div>


              {/* <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5> */}
              <MDBInput wrapperClass='mb-4' label='Address e-mail' id='form1' type='email' onChange={(e) => setEmail(e.target.value)} />
              <MDBInput wrapperClass='mb-4' label='Mot de passe' id='form2' type='password' onChange={(e) => setPassword(e.target.value)} />

              <div className="d-flex justify-content-between mx-4 mb-4" >
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                <a href="forgetPass">Mot de passe oublié ?</a>
              </div>

              <div className='text-center text-md-start mt-4 pt-2'>
                <BtnWrapper onClick={() => login({ email, password })}>
                  <FullButton title="Se connecter" />
                </BtnWrapper>
                {/* <MDBBtn className="mb-0 px-5" size='lg' onClick={() => login({ email, password })}>Login</MDBBtn> */}
              </div>

            </MDBCardBody>

          </MDBCol>

        </MDBRow>

      </MDBCard>
    </MDBContainer>


    // <MDBContainer fluid className="p-3 my-5 h-custom" style={{ height:(100% - 73)}}>

    //   <MDBRow>

    //     <MDBCol col='10' md='6'>
    //       <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
    //     </MDBCol>

    //     <MDBCol col='4' md='6'>

    //       <MDBInput wrapperClass='mb-4' label='Adresse e-mail' id='formControlLg' type='email' size="lg" onChange={(e) => setEmail(e.target.value)}/>
    //       <MDBInput wrapperClass='mb-4' label='Mot de passe' id='formControlLg' type='password' size="lg"onChange={(e) => setPassword(e.target.value)}/>

    //       <div className="d-flex justify-content-between mb-4">
    //         <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Mémoriser le mot de passe' />
    //         <a href="!#">Forgot password?</a>
    //       </div>

    //       <div className='text-center text-md-start mt-4 pt-2'>
    //         <MDBBtn className="mb-0 px-5" size='lg'  onClick={() => login({ email, password })}>Login</MDBBtn>
    //       </div>

    //     </MDBCol>

    //   </MDBRow>

    // </MDBContainer>
  )
}

export default Login

const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
