import { useState } from "react";
import "../../styles/Slideshow.scss";

function SlidesHow({ pictures, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="SlidesHow">
      
      {pictures.length > 1 && (
        <button className="arrow left" onClick={prevImage}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
      )}

     <div className="SlidesHow-wrapper">
    {pictures.map((src, index) => (
      <img
        key={index}
        src={src}
        alt={`${title} - image ${index + 1}`}
        className={`SlidesHow-image ${index === currentIndex ? "active" : ""}`}
      />
    ))}
    </div>

      
      {pictures.length > 1 && (
        <button className="arrow right" onClick={nextImage}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      )}

      
      {pictures.length > 1 && (
        <div className="counter">
          {currentIndex + 1} / {pictures.length}
        </div>
      )}
    </div>
  );
}

export default SlidesHow
