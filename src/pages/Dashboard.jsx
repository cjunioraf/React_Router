import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const Dashboard = () => {
  return (
    <div>
        <h2>Página Dashboard</h2>
        <nav>
            <ul>
                <li><Link to="profile" >Perfil</Link></li>
                <li><Link to="settings" >Configuração</Link></li>
            </ul>
        </nav>
        <div><Outlet /></div>
    </div>
  )
}

export default Dashboard