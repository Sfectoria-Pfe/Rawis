import React, { useContext, useEffect, useState } from 'react'
import { getOneWithHeader } from '../../helpers/httpReqWithHeader';
import { useNavigate, useParams } from 'react-router-dom';
import { MyContext } from '../../router/Router';

const Chapitre = () => {

  //const navigate = useNavigate()
  const { idChapitre } = useParams();
  const navigate=useNavigate();
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
  },[])

  return (
    <div>
     { (user.role === 'Enseignant') && <div className='d-flex justify-content-end py-3'>
        <button className='btn btn-primary' onClick={() => navigate('createQcm')}>Créer un QCM</button>
      </div>}
      <div>
      <p className="text-lowercase">{chapitre.title}</p>
      <p className="text-lowercase">{chapitre.description}</p>
      <iframe src={chapitre.link} height={300} className='mt-5'></iframe>
      </div>
    </div>
  )
}

export default Chapitre
