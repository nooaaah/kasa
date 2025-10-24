import '../styles/APropos.scss'
import Navbar from '../components/NavBar'
import Banner2 from '../components/Banner2'
import DropDown from '../components/DropDown'
import FooterCom from '../components/FooterCom'
function APropos() {
  return (
    <div className="apropos">
      <Navbar />
      <Banner2 />

      <div className="apropos__panels">
        <DropDown titre="Fiabilité">
          <p>Les annonces postées sur Kasa garantissent uine fiabilité totale. Les photos sont conformes aux logements et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
        </DropDown>

        <DropDown titre="Respect">
          <p>La bienviellance fait partie des valeurs fondatrices de Kasa. Tout comportements discriminatoire ou de perrtubation du voisinage entraînera une exclusion de notre plateforme.</p>
        </DropDown>

        <DropDown titre="Service">
          <p>La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienviellance</p>
        </DropDown>

        <DropDown titre="Sécurité">
          <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes</p>
        </DropDown>
      </div>

      <FooterCom />
    </div>

  )
}

export default APropos
