import { useState, useEffect } from "react";
import "../styles/Logement.scss";
import Navbar from "../components/NavBar";
import DropDown from "../components/DropDown";
import SlidesHow from "../components/Slideshow";
import { useParams } from "react-router";
import { Navigate } from "react-router";
import logements from "../data/logements.json";

function Logement() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    // const foundLogement = logements.find((item) => item.id === id);

    // const foundLogement = logements.find(function (item) {
    //   return item.id === id;
    // });

    const foundLogement = logements.find(function (logement, index) {
      if (logement.id === id) {
        return true;
      }
    });

    setLogement(foundLogement);
    setIsLoading(false);
  }, [id]);

  return (
    <div className="logement-container">
      <Navbar />

      {isLoading ? (
        <div className="loading-main">
          <p>Chargement...</p>
        </div>
      ) : !logement ? (
        <Navigate to="/404" replace />
      ) : (
        <>
          <SlidesHow pictures={logement.pictures} title={logement.title} />
          <div className="logement-header">
            <div className="logement-left">
              <h2>{logement.title}</h2>
              <h3>{logement.location}</h3>
              <ul className="tags-list">
                {logement.tags.map((tag, id) => (

                  <li key={id} className="tag-item">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <div className="host-info">
              <div className="host">
                <h3 className="host-name">{logement.host.name}</h3>
                <img src={logement.host.picture} alt={logement.host.name} className="host-picture" />
              </div>
              <div className="rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <i
                    key={star}
                    className={
                      star <= logement.rating
                        ? "fa-solid fa-star star filled"
                        : "fa-solid fa-star star empty"
                    }
                  ></i>
                ))}
              </div>
            </div>
          </div>
          <div className="logement-dropdowns">


            <DropDown titre="Description">{logement.description}</DropDown>
            <DropDown titre="Équipements">
              <ul>
                {logement.equipments.map((equip, index) => (
                  <li key={index}>{equip}</li>
                ))}
              </ul>
            </DropDown>
          </div>
        </>
      )}
    </div>
  );
}

export default Logement;
