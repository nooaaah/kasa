import { useState } from 'react';
import '../styles/DropDown.scss'




const DropDown = ({ titre, children  }) => {
  const [isOpen, setIsOpen] = useState(false);

  
  return (
    <div className="dropdown">
      
      <button
        className={`dropdown-toggle ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="dropdown-title">{titre}</span>
        <i className="fa-solid fa-chevron-up dropdown-arrow"></i>
      </button>
      
      {isOpen && (
        <div className="dropdown-menu">
          {children }
        </div>)}
    </div>
  );
};


export default DropDown