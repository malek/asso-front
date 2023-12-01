import React, { useState } from 'react';
import axios from 'axios';
// import Card from './Card'; // Assurez-vous que le chemin est correct


const CardForm = () => {
  const [description, setDescription] = useState('');
  const [titre, setTitre] = useState('');
  const [date, setDate] = useState('');
  const [adresse, setAdresse] = useState('');
  const [localisation, setLocalisation] = useState('');
  const [submittedData, setSubmittedData] = useState(null);
  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '400px', 
    margin: '0 auto',
    padding: '10px',
  };
  
  const formGroupStyle = {
    marginBottom: '15px',
  };
  
  const inputStyle = {
    width: '100%', 
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };
  
  const buttonStyle = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#7C048E',
    color: 'white',
    cursor: 'pointer',
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const annonceData = { 
      description, 
      titre, 
      date, 
      adresse, 
      localisation 
    };
    
    try {
      const response = await axios.post('http://localhost:8000/api/annonces', annonceData);
      console.log('Annonce enregistrée:', response.data);
      // Ajoutez ici le traitement après la soumission
    } catch (error) {
      console.error('Erreur lors de l’envoi du formulaire :', error);
      // Gestion des erreurs ici
    }

    
  

 

if (submittedData) {
    return <Card {...submittedData} />;
  }
  }
  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <div style={formGroupStyle}>
        <label>Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required style={inputStyle}></textarea>
      </div>
      <div style={formGroupStyle}>
        <label>Titre</label>
        <input type="text" value={titre} onChange={(e) => setTitre(e.target.value)} required style={inputStyle} />
      </div>
      <div style={formGroupStyle}>
        <label>Date</label>
        <input type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} required style={inputStyle} />
      </div>
      <div style={formGroupStyle}>
        <label>Adresse</label>
        <input type="text" value={adresse} onChange={(e) => setAdresse(e.target.value)} required style={inputStyle} />
      </div>
      <div style={formGroupStyle}>
        <label>Localisation</label>
        <input type="text" value={localisation} onChange={(e) => setLocalisation(e.target.value)} required style={inputStyle} />
      </div>
      <button type="submit" style={buttonStyle}>Finaliser</button>
    </form>
  );
};


export default CardForm;
