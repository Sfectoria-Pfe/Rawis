import React, { createContext, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login"; 
import HomePage from "../pages/HomePage";
import Contact from "../component/Sections/Contact"
import Main from '../apps/Main';
import Client from '../apps/Client';
import ForgetPass from '../pages/auth/ForgetPass';
import AddCours from '../pages/cours/AddCours';
import ListEtd from '../pages/etudiants/ListEtd';
import Cours from '../pages/cours/Cours';
import ListCours from '../pages/cours/ListCours';
import AddEtd from '../pages/etudiants/AddEtd';
import AddEns from '../pages/enseignants/AddEns';
import Enseignant from '../pages/enseignants/Enseignant';
import Etudiant from '../pages/etudiants/Etudiant';
import Dashboard from '../pages/dashboard/index';
import ListEns from '../pages/enseignants/ListEns';
import CoursDetail from '../pages/cours/CoursDetail';
import axios from 'axios';
import PrivateRoute from './PrivateRoute';
import EnsDetail from '../pages/enseignants/EnsDetail';
import EtdDetail from '../pages/etudiants/EtdDetail';
import AddChapitre from '../pages/chapitre/AddChapitre';
import ListeChap from '../pages/chapitre/ListeChap';
import Chapitre from '../pages/chapitre/chapitre';
import CreateQcm from '../pages/test/CreateQcm';
import Profil from '../pages/profil/Profil';
import Reponse from '../pages/test/Reponse';
import EditProfil from '../pages/profil/EditProfil';
import Code from '../pages/auth/Code';
import Feild from '../pages/Feild';
import Semester from '../pages/Semester';
import Services from '../component/Sections/Services';


export const MyContext = createContext('')

const Router = () => {
    const [user, setUser] = useState();
    const [update, setUpdate] = useState(false)

    const getMe = async () => {
        try {
            const token = await JSON.parse(localStorage.getItem("token"));
            const config = {
                headers: {
                    authorization: 'Bearer ' + token
                }
            }
            const resp = await axios.get('http://localhost:4000/auth/me', config)
            setUser(resp.data);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getMe();
    }, [update])



    return (
        <div>
            <BrowserRouter>
                <MyContext.Provider value={user} >
                    <Routes>
                        {user ? (
                            <Route path="/" element={<Main />} >
                                <Route index element={<Feild />} />
                                    <Route path="dashboard" element={<PrivateRoute component={<Dashboard />} roles={['Admin', 'Enseignant', 'Etudiant']} />} />
                                    <Route path="semester" element={<Semester/>}/>
                                <Route path="/Cours" element={<Cours />} >
                                    <Route index element={<ListCours />} />
                                    <Route path="addCours" element={<PrivateRoute component={<AddCours />} roles={['Enseignant']} />} />
                                    <Route path=":id" element={<CoursDetail />} />
                                    <Route path=':id/addChapitre' element={<PrivateRoute component={<AddChapitre />} roles={['Enseignant']} />} />
                                    <Route path=':id/listChap' element={<ListeChap />} />
                                    <Route path=':id/:idChapitre' element={<Chapitre />} />
                                    <Route path=':id/:idChapitre/createQcm' element={<PrivateRoute component={<CreateQcm />} roles={['Enseignant']} />} />
                                    <Route path=':id/:idChapitre/reponse' element={<Reponse />} />
                                </Route>

                                <Route path="/etudiant" element={<PrivateRoute component={<Etudiant />} roles={['Admin', 'Enseignant']} />} >
                                    <Route index element={<ListEtd />} />
                                    <Route path="addEtudiant" element={<AddEtd />} />
                                    <Route path=":id" element={<EtdDetail />} />
                                </Route>


                                <Route path="/enseignant" element={<Enseignant />} >
                                    <Route index element={<PrivateRoute component={<ListEns />} roles={['Admin']} />} />
                                    <Route path="addEnseignant" element={<AddEns />} />
                                    <Route path=":id" element={<EnsDetail />} />
                                </Route>
                                <Route path='/profil' element={<Profil />} />
                                <Route path='/editProfil' element={<EditProfil setUpdate={setUpdate} update={update} />} />


                            </Route>
                        ) : (<Route path="/" element={<Client />} >
                            <Route index element={<HomePage />} />
                            <Route path="/login" element={<Login setUpdate={setUpdate} update={update} />} />
                            <Route path='/contact' element={<Contact />} />
                            <Route path="/forgetPass" element={<ForgetPass />} />
                            <Route path="services" element={<Services />} />
                            <Route path="/code" element={<Code  setUpdate={setUpdate} update={update}/>}/>
                        </Route>)}


                    </Routes>
                </MyContext.Provider>
            </BrowserRouter>
        </div>
    )
}

export default Router
