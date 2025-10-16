import { useState } from 'react'
import '../styles/Apropos.scss'
import Navbar from '../components/NavBar'
import { Link } from 'react-router';
import logo from '../assets/logo.png'
import Banner2 from '../components/Banner2';
import DropDown from '../components/DropDown';

function APropos() {
  

  return (
     <div>
			<Navbar/>
			<Banner2/>

      <DropDown titre="Fiabilité">
       <p>test</p>  
      </DropDown>

      <DropDown titre="Respect">
      <p>test</p>
      </DropDown>
      
      <DropDown titre="Service">
      <p>test</p>
      </DropDown>

      <DropDown titre="Sécurité">
      <p>test</p>
      </DropDown>



        
      </div>
  )
}

export default APropos
