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
          <p>La fiabilité</p>
        </DropDown>

        <DropDown titre="Respect">
          <p>Le respect</p>
        </DropDown>

        <DropDown titre="Service">
          <p>Nos services</p>
        </DropDown>

        <DropDown titre="Sécurité">
          <p>La sécurité </p>
        </DropDown>
      </div>

      <FooterCom />
    </div>

  )
}

export default APropos
