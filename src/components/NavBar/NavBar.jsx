import '../../styles/Navbar.scss'
import logo from '../../assets/logo.png'
import { NavLink, useLocation } from 'react-router';
function Navbar() {

    const location = useLocation();
    const isLogementPage = location.pathname.startsWith("/Logement");

    return (
        <nav className='NavBar'>
            <div className='DivLogo'>
                <img src={logo} alt='logo-kasa' className='kasa-logo' />
            </div>
            <div className='DivLink'>
                <NavLink to="/" className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}${isLogementPage ? "shadow-active" : ""}`
                }>Accueil</NavLink>
                <NavLink to="/a-propos" className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                }>A Propos</NavLink>
            </div>

        </nav>
    )
}

export default Navbar