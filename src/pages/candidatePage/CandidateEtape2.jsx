import React, { useRef, useState } from "react";
import Image from "react-bootstrap/Image";
import addAvatar from "../../assets/add.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const CandidatePage2 = () => {
  const navigate = useNavigate();
  const initialUserData = JSON.parse(sessionStorage.getItem('userData')) || {};
  const [description, setDescription] = useState(initialUserData.nom || "");
  const [nom, setNom] = useState(initialUserData.prenom || "");
  const [prenom, setPrenom] = useState(initialUserData.description || "");

  const buttonStyle = {
    backgroundColor: "#7C048E",
    padding: "10px 20px",
    textDecoration: "none",
    color: "white",
    display: "inline-block",
    cursor: "pointer", // Add cursor style to indicate it's clickable
  };

  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click(); // Trigger the file input click event
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    // Add logic to handle the selected file, e.g., upload it or display it
    console.log("Selected File:", selectedFile);
  };


 

  const handleBioChange = (e) => {
    const inputBio = e.target.value;
    // Implement logic to limit the bio to 50 words
    const words = inputBio.trim().split(/\s+/);
    if (words.length <= 50) {
      setDescription(inputBio);
    }
  };

  const handleNomChange = (e) => {
    setNom(e.target.value);
  };

  const handlePrenomChange = (e) => {
    setPrenom(e.target.value);
  };

  // const handleInputChange = (e) => {
  //   // Perform validation or checks based on your requirements
  //   // For simplicity, this example checks if all required fields have a value
  //   const inputs = document.querySelectorAll("input[required], select[required]");
  //   const isValid = Array.from(inputs).every((input) => input.checkValidity());

  //   setFormIsValid(isValid);
  // };
  const handleSubmit = (event) => {
    event.preventDefault();

    const finalUserData = {
      ...initialUserData,
      nom: nom,
      prenom: prenom,
      description: description
    };
    ajouterUtilisateur(finalUserData);
    console.log("Données finales soumises:", finalUserData); // Afficher dans la console
    navigate('/Welcome'); 
    
  };
  const ajouterUtilisateur = async (finalUserData) => {
    try {
      const response = await axios.post('http://localhost:8000/api/users', finalUserData);
      // Gérer la réponse, par exemple en redirigeant l'utilisateur
      // vers une autre page ou en affichant un message de succès
    } catch (error) {
      console.error('Erreur lors de l\'ajout de l\'utilisateur :', error);
      // Gérer l'erreur, par exemple en affichant un message d'erreur
    }
  };

  return (
    <div className="container p-4">
      <div className="d-flex flex-column align-items-center mb-5 mt-5">
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          ref={fileInputRef}
          onChange={handleFileChange}
        />
        <Image
          src={addAvatar}
          roundedCircle
          onClick={handleImageClick}
          style={buttonStyle}
        />
        <label>Ajouter une photo</label>
      </div>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="nom" className="form-label">
            Nom*
          </label>
          <input
            type="text"
            className="form-control"
            id="nom"
            onChange={handleNomChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="prenom" className="form-label">
            Prénom*
          </label>
          <input
            type="text"
            className="form-control"
            id="prenom"
            onChange={handlePrenomChange}
            required
          />
        </div>
        <div className="col-12">
          <label htmlFor="bio" className="form-label">
            Bio (max 50 words)*
          </label>
          <textarea
            id="bio"
            className="form-control"
            value={description}
            onChange={handleBioChange}
            required
          />
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="subscribe"
            />
            <label className="form-check-label" htmlFor="subscribe">
            Je souhaite recevoir des actualités d'AssoShare et du monde associatif.
            </label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="agreeTerms"
            />
            <label className="form-check-label" htmlFor="agreeTerms">
            J'ai lu et accepté les conditions d'utilisation de la plateforme Assoshare ainsi que le traitement du dossier.
            </label>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" style={buttonStyle} >
            Finaliser
          </button>
        </div>
      </form>
    </div>
  );
};

export default CandidatePage2;
