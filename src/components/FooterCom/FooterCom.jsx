import '../../styles/FooterCom.scss'
import logoBlanc from '../../assets/LOGO-BLANC.png'

function FooterCom () {

    return(
        <footer className='FooterDiv'>
            <img src={logoBlanc} alt='logo-kasa' className='kasa-logo' />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default FooterCom