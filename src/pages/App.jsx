import { useState } from 'react'
import '../styles/App.scss'
import APropos from './APropos'
import Erreur from './Erreur'
import Navbar from '../components/NavBar/NavBar'
import { Link } from 'react-router';
import Banner from '../components/Banner/Banner'
import Image_banner from '../assets/Image-banner.png'
import Card from '../components/Card/Card'
import FooterCom from '../components/FooterCom/FooterCom'
import logements from '../data/logements.json'



function App() {
  const displayCard = logements.map((logement) => {
    return  < Card key={logement.id} data = { logement } />
        })

  return (
    <div>
      <Navbar />
      <Banner />
      <div className='CardContainer'>
        {displayCard}
      </div>
      <FooterCom />
    </div>
  )
}

export default App
