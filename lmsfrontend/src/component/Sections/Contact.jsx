import React, { useState } from "react";
import styled from "styled-components";
// Assets
import ContactImg1 from "../../assets/img/contact-1.png";
import ContactImg2 from "../../assets/img/contact-2.png";
import ContactImg3 from "../../assets/img/contact-3.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Contact = () => {

  const [validated, setValidated] = useState(false);
  const navigate = useNavigate()
  const [contact, setContact] = useState({
    name: '',
    email: '',
    sujet: '',
    description: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setContact({
      ...contact,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget;//bech tepionti ala ll form 
    if (form.checkValidity() === false) {
      event.preventDefault();//bech mayrefrechich ll page
      event.stopPropagation();// bech may2atherch aala les balises lokhrin 
      setValidated(true) // ydhahharli les feedback
    } else {
      await axios.post("http://localhost:4000/contacts", contact)
    }
    setValidated(true);
    navigate('/')
  }


  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Contactez nous</h1>
            <p className="font15">
              Si vous souhaitez nous contacter, veuillez remplir le formulaire ci-dessous. Nous serons ravis de répondre à vos questions et de vous aider dans les meilleurs délais.
            </p>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Form noValidate validated={validated} >
                <label className="font13">Nom:</label>
                <input type="text" id="fname" name="name" className="font20 extraBold" onChange={handleChange} />
                <label className="font13">Email:</label>
                <input type="text" id="email" name="email" className="font20 extraBold" onChange={handleChange} />
                <label className="font13">Sujet:</label>
                <input type="text" id="subject" name="sujet" className="font20 extraBold" onChange={handleChange} />
                <textarea rows="4" cols="50" type="text" id="message" name="description" className="font20 extraBold" onChange={handleChange} />
              </Form>
              <SumbitWrapper className="flex">
                <ButtonInput type="submit" value="Envoyer" className="pointer animate radius8" style={{ maxWidth: "220px" }} onClick={handleSubmit} />
              </SumbitWrapper>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
              <div style={{ width: "50%" }} className="flexNullCenter flexColumn">
                <ContactImgBox>
                  <img src={ContactImg1} alt="office" className="radius6" />
                </ContactImgBox>
                <ContactImgBox>
                  <img src={ContactImg2} alt="office" className="radius6" />
                </ContactImgBox>
              </div>
              <div style={{ width: "50%" }}>
                <div style={{ marginTop: "100px" }}>
                  <img src={ContactImg3} alt="office" className="radius6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Contact
const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #7620ff;
  background-color: #7620ff;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const ContactImgBox = styled.div`
  max-width: 180px; 
  align-self: flex-end; 
  margin: 10px 30px 10px 0;
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;