import React, { useState,useRef  } from 'react';
import BeautifulCards from '../../components/card/BeautifulCards';
import CardForm from '../../components/cardForm/cardForm';
import { Form, FormControl, Button } from 'react-bootstrap';
import HEADER from '../../assets/cardsImages/HEADER1.png'
import '../../assets/cardsImages/HomePageStyles.css' ; // Assurez-vous que le chemin est correct
import SEARCH_ICON from '../../assets/cardsImages/Vector.svg'; // Importez votre icône SVG ici

const homePage = () => {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);  // Ajoutez une référence ici

  const handleAddClick = () => {
    setShowForm(true); // Afficher le formulaire
    setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
  };

  

  return (
    <div>
      <div className='headerContainer'>
      <h1 className='titleStyle'>MES ANNONCES</h1>
      <FormControl
                    type="text"
                    placeholder="Recherche"
                    className="searchBarStyle"
                  />
      <img src={HEADER} className='headerImageStyle' alt="Header"  />
      
      </div>
          {/* <div className='headerContainerStyle'>
            <img src={HEADER} className='headerImageStyle' alt="Header"  />
            <div className="titleAndSearchContainer">
              <h1 className='titleStyle'>MES ANNONCES</h1>
              <div className="searchInputGroup">
                <img src={SEARCH_ICON} className="searchIconStyle" alt="Search Icon" />

                  <FormControl
                    type="text"
                    placeholder="Recherche"
                    className="searchBarStyle"
                    
                  />
              </div>

          </div>
   </div> */}


    <BeautifulCards /> {/* Ajout des cartes statiques */}
    <button onClick={handleAddClick}>Ajouter un événement</button>
    {showForm && <div ref={formRef}><CardForm /></div>}
  </div>
);
};
export default homePage;
