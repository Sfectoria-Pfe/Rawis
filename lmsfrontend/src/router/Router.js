import React, { createContext, useEffect, useState } from 'react'
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
import axios from 'axios';
import PrivateRoute from './PrivateRoute';


export const MyContext = createContext ('')

const Router = () => {
    const [user, setUser] = useState();
    const [update,setUpdate]=useState(false)

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
            <MyContext.Provider value= {user} >
                <Routes>
                    {user ? (
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
                            <Route path="/listEnseignant" element={<PrivateRoute component={<ListEns/>} roles ={['Admin']}/>} />

                        </Route>
                    ) : (<Route path="/" element={<Client />} >
                        <Route Index element={<HomePage />} />
                        <Route path="/login" element={<Login setUpdate={setUpdate} update={update}/>} />
                        <Route path="/registre" element={<Registre />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path="/forgetPass" element={<ForgetPass />} />
                    </Route>)}


                </Routes>
                </MyContext.Provider>
            </BrowserRouter>
        </div>
    )
}

export default Router
