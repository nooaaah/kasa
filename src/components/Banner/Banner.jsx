import '../../styles/Banner.scss'
import Image_banner from '../../assets/Image-banner.png'


function Banner () {
    return (
        <div className='Banner'>
            <img src={Image_banner} alt="Bannière " className="banner" />
            <h1 className='BannerH1'>Chez vous, partout et ailleurs</h1>
        </div>
    )
}



export default Banner