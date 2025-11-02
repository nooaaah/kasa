import '../styles/App.scss'
import Navbar from '../components/NavBar/NavBar'
import { Link } from 'react-router';
import Banner from '../components/Banner/Banner'
import Card from '../components/Card/Card'
import FooterCom from '../components/FooterCom/FooterCom'
import logements from '../data/logements.json'
import Image_banner from '../assets/Image-banner.png'


function App() {
  const displayCard = logements.map((logement) => {
    return < Card key={logement.id} data={logement} />
  })

  return (
    <div>
      <Navbar />
      <Banner 
      image={Image_banner}
      alt="Bannière d'accueil"
      text="Chez vous, partout et ailleurs"
      
      />
      <div className='CardContainer'>
        {displayCard}
      </div>
      <FooterCom />
    </div>
  )
}

export default App
