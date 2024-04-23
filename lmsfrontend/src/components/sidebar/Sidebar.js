import React from 'react'
import { Link } from 'react-router-dom'
import { MdDashboard, MdViewModule } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi2";
import { FaUserGroup } from "react-icons/fa6";


const data = [
    { name: 'Dashboard', path: '/', icon: <MdDashboard /> },
    { name: 'Enseignants', path: '/listEnseignant', icon: <FaUserGroup /> },
    { name: 'Etudiants', path: '/listEtudiant', icon: <HiUserGroup /> },
    { name: 'Cours', path: '/listCours', icon: <MdViewModule />}]

const Sidebar = ({ setToggle }) => {
    return (
        <div className='position-fixed h-100 bg-danger' style={{ width: 240, zIndex: 4 }}>
            <div className='d-flex justify-content-around'>
                <span>LMS</span>
                <button className='btn btn-light' onClick={() => { setToggle(false) }}>x</button>
            </div>


            {data.map((e) =>
                <div>
                    <Link to={e.path} className='nav-link p-3 d-flex gap-2 align-items-center'>
                        {e.icon}
                        <span>{e.name}</span>
                    </Link>
                </div>)}

        </div>

    )
}

export default Sidebar
