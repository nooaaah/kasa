import '../styles/Navbar.scss'
import logo from '../assets/logo.png'
import { Link } from 'react-router';
function Navbar() {
	return (
		<nav className='NavBar'>
            <div className='DivLogo'>
            <img src={logo} alt='logo-kasa' className='kasa-logo' />
            </div>
            <div className='DivLink'>
            <Link to="/" className='LinkNav'>Accueil</Link>
            <Link to="/a-propos" className='LinkNav'>A propos</Link>
            </div>

        </nav>
	)
}

export default Navbar