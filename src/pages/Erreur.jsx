import { useState } from 'react'
import '../styles/App.scss'
import Navbar from '../components/NavBar'
import { Link } from 'react-router';
import logo from '../assets/logo.png'

function Erreur() {
  

  return (
      <div>
        <Navbar/>
        
        <h2>404</h2>
     
        <p>
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link to="/" className='LinkNav'>Retourner sur la page d’accueil</Link>
      </div>
  )
}


export default Erreur