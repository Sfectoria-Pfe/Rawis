import React, { useContext, useEffect, useState } from 'react'
import { getOneWithHeader } from '../../helpers/httpReqWithHeader';
import { useNavigate, useParams } from 'react-router-dom';
import { MyContext } from '../../router/Router';
import FullButton from '../../component/Buttons/FullButton';
import styled from 'styled-components';

const Chapitre = () => {

  //const navigate = useNavigate()
  const { idChapitre } = useParams();
  const navigate = useNavigate();
  const [chapitre, setChapitre] = useState([]);
  const user = useContext(MyContext)


  const fetchOne = async () => {
    try {
      const resp = await getOneWithHeader(`chapitres/${idChapitre}`)
      setChapitre(resp.data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchOne()
  }, [])

  return (
    <div>
      {(user.role === 'Enseignant') && <div className='d-flex justify-content-end py-3'>
        <BtnWrapper onClick={() => navigate('createQcm')}>
          <FullButton title="Créer un QCM" />
        </BtnWrapper>
      </div>}
      <div>
        <p className="text-uppercase" style={{ paddingBottom: "20px", textAlign: "center", fontWeight: "bold", fontSize: "30px" }}>{chapitre.title}</p>
        <p className="d-flex justify-content-center">{chapitre.description}</p>
        <div >
          <iframe src={chapitre.link} height={"1000px"} width={"100%"} className='mt-5'></iframe>
        </div>
      </div>
    </div>
  )
}

export default Chapitre

const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
