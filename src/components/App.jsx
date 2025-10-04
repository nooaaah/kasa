import { useState } from 'react'
import '../styles/App.scss'
import APropos from './APropos'
import Location from './Location'
import Erreur from './Erreur'
import logo from '../assets/logo.png'
import Navbar from './NavBar'
import { Link } from 'react-router';
import Banner from './Banner'
import Image_banner from '../assets/Image-banner.png'
import Card from './Card'
import FooterCom from './FooterCom'




function App() {
  

  return (
    <div>
			<Navbar/>
			<Banner/>
      <div className='CardContainer'>
			<Card/>
      </div>
      <FooterCom/>
    </div>
  )
}

export default App
