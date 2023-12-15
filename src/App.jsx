import './App.css'

import { Route, Routes, Link, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Contato from './pages/Contato'
import About from './pages/About'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import TaskDetails from './pages/TaskDetails'
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
      {/* 1 - setup e configuração inicial */}
      <nav>                
        <ul>
          <li><Link to="/">Home</Link></li>            
          <li><Link to="/about">Sobre</Link></li>
          <li><Link to="/contato">Contato</Link></li>
          {/* 2 - NavLink */}
          <li><NavLink 
            className={({isActive}) => (isActive ? "active-link" : "")} 
            to="/contato">Contato Nav</NavLink>
          </li>          
          {/* 3 - useNavigate */}
          <li><NavLink 
            className={({isActive}) => (isActive ? "active-link" : "")} 
            to="/login">Login</NavLink>
          </li>
          {/* 5 - Rotas alinhadas */}
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
        {/* 4 - Rotas dinâmicas */}
        <div>
            <h2>Tarefas</h2>
            <Link to="/tasks/1" >Tarefa 1</Link>
            <Link to="/tasks/2" >Tarefa 2</Link>
            <Link to="/tasks/3" >Tarefa 3</Link>
        </div>
        {/* 6 - Rota 404 */}
        <div>
          <h2>Itens</h2>
          <Link to="/item/1">Item 1</Link>
        </div>  
      </nav>        

      <Routes>
        {/* HOME / */}        
        <Route path='/' element={<Home/>}/>  
        <Route path='/contato' element={<Contato/>} />      
        <Route path='/about' element={<About />} />    
        {/* 3 - useNavigate */}
        <Route path='/login' element={<Login/>} />    
        {/* 4 - Rotas dinâmicas */}
        <Route path='/tasks/:taskId' element={<TaskDetails />} />      
        {/* 5 - Rotas alinhadas */}            
        <Route path='/dashboard' element={<Dashboard />} >
          <Route path='profile' element={<Profile />} /> 
          <Route path='settings' element={<Settings />} />                    
        </Route>
        {/* 6 - Rota 404 */}        
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
