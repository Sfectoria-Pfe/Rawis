import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  MDBCol, MDBRow, MDBInput, MDBContainer, MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
} from 'mdb-react-ui-kit';
import img from '../../img/fp.avif'
import styled from 'styled-components';
import FullButton from "../../component/Buttons/FullButton";
import LogoIcon from "../../assets/svg/Logo";
import nsit2 from "../../img/nsit2.png";
import nsit3 from "../../img/nsit3.png";

import './forgetPass.css';


const ForgetPass = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate()
  return (
    <div className="forget-pass-container">
      <div className='image-wrapper' >
        <img src={nsit3} alt="phone" className="side-image" />
      </div>

      <MDBContainer className='my-5 justify-content-center'>

        <MDBCard className='text-black m-5 card-custom' style={{ width: '40rem' }}>

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
                <div className='text-center text-md-start mt-4 pt-2'>
                  <BtnWrapper onClick={async() => (
                   await axios.post("http://localhost:4000/auth/forgetPassword", { email }).then((res)=>navigate("/code",{state:{email}})).catch((err)=>console.log(err))
                  )}>
                    <FullButton title="Confirmer" />
                  </BtnWrapper>
                  {/* <MDBBtn className="mb-0 px-5" size='lg' onClick={() => login({ email, password })}>Login</MDBBtn> */}
                </div>

              </MDBCardBody>

            </MDBCol>

          </MDBRow>

        </MDBCard>

      </MDBContainer>
      <div className='image-wrapper'>
        <img src={nsit2} alt="phone" className="side-image" />
      </div>
    </div>
  )
}

export default ForgetPass

const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;