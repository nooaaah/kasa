import { useState } from 'react';
import '../styles/DropDown.scss'; 

const DropDown = ({ titre, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="dropdown-title">{titre}</h3>
        <i
          className={`fa-solid fa-chevron-up dropdown-arrow ${isOpen ? 'rotated' : ''}`}
        ></i>
      </div>

      <div className={`dropdown-content ${isOpen ? 'show' : ''}`}>
        {children} 
        <a href=""></a>
      </div>
    </div>
  );
};

export default DropDown;
