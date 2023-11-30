// Home.jsx
import React, { useState,useRef  } from 'react';
// import Card from './Card'; // Assurez-vous que le chemin est correct
import { useNavigate } from 'react-router-dom';
import BeautifulCards from '../../components/card/BeautifulCards';
import CardForm from '../../components/cardForm/cardForm';


const homePage = () => {
  const [annonces, setAnnonces] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const navigate = useNavigate();
  const formRef = useRef(null);  // Ajoutez une référence ici

  
 

//   useEffect(() => {
//     const fetchAnnonces = async () => {
//       try {
//         const response = await axios.get('http://localhost:8000/api/Annonces');
//         setAnnonces(response.data);
//       } catch (error) {
//         console.error('Erreur lors de la récupération des annonces:', error);
//       }
//     };

//     fetchAnnonces();
//   }, []);
const handleAddClick = () => {
    setShowForm(true); // Afficher le formulaire
    setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
  };

  return (
    <div>
    <h1>Accueil</h1>
    <BeautifulCards /> {/* Ajout des cartes statiques */}
    <button onClick={handleAddClick}>Ajouter un événement</button>
    {showForm && <div ref={formRef}><CardForm /></div>}
    {/* Décommentez la ligne suivante si vous affichez des annonces dynamiques */}
    {/* {annonces.map((annonce, index) => (<Card key={index} {...annonce} />))} */}
  </div>
);
};
export default homePage;
