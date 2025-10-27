import '../styles/Erreur.scss'
import Navbar from '../components/NavBar/NavBar'
import { Link } from 'react-router'
import FooterCom from '../components/FooterCom/FooterCom'

function Erreur() {
  return (
    <div className="erreur-container">
      <Navbar />

      <div className="erreur-content">
        <h2>404</h2>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="LinkNav">
          Retourner sur la page d’accueil
        </Link>
      </div>

      <FooterCom />
    </div>
  )
}

export default Erreur
