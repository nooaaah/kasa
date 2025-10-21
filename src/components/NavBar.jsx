import '../styles/Navbar.scss'
import logo from '../assets/logo.png'
import { Link } from 'react-router';
import { NavLink } from 'react-router';
function Navbar() {
    return (
        <nav className='NavBar'>
            <div className='DivLogo'>
                <img src={logo} alt='logo-kasa' className='kasa-logo' />
            </div>
            <div className='DivLink'>
                <NavLink to="/" className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                }>Accueil</NavLink>
                <NavLink to="/a-propos" className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                }>A propos</NavLink>
            </div>

        </nav>
    )
}

export default Navbar