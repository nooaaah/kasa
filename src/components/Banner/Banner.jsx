import '../../styles/Banner.scss'



function Banner({ image, alt, text, className = '' }) {
  return (
    <div className={`Banner ${className}`}>
      <img src={image} alt={alt} className="banner" />
      {text && <h1 className="BannerH1">{text}</h1>}
    </div>
  );
}

export default Banner;