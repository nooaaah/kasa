import { useState } from 'react'
import '../styles/App.scss'
import Navbar from './NavBar'
import { Link } from 'react-router';
import logo from '../assets/logo.png'

function Erreur() {
  

  return (
      <div>
        <Navbar/>
        
      
     
        <p>
          Je suis sur erreur
        </p>
      </div>
  )
}


export default Erreur