import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import Registre from "../pages/auth/Registre";
import HomePage from "../pages/HomePage";
import Contact from "../pages/Contact";
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
import Dashboard from '../pages/Dashboard';
import ListEns from '../pages/enseignants/ListEns';
import CoursDetail from '../pages/cours/CoursDetail';

const Router = () => {

    

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} >
                        <Route Index element={<Dashboard />} />
                        <Route path="/Cours" element={<Cours />} >

                        <Route index element={<ListCours />} />
                        <Route path="addCours" element={<AddCours />} />
                        <Route path="coursDetail/:id" element={<CoursDetail />} />
                                
                        </Route>
                       
                        <Route path="addEtusiant" element={<AddEtd />} />
                        <Route path="/etudiant" element={<Etudiant />} />
                        <Route path="/listEtudiant" element={<ListEtd />} />
                        <Route path="/addEnseignant" element={<AddEns />} />
                        <Route path="/enseignant" element={<Enseignant />} />
                        <Route path="/listEnseignant" element={<ListEns />} />

                    </Route>
                    <Route path="/" element={<Client />} >
                        <Route Index element={<HomePage />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/registre" element={<Registre />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path="/forgetPass" element={<ForgetPass />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router
