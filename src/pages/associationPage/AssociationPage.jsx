import React, { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const AssociationPage = () => {
  const navigate = useNavigate();

  const buttonStyle = {
    backgroundColor: "#7C048E", // Définissez la couleur personnalisée
    padding: "10px 20px", // Add padding for a button-like appearance
    textDecoration: "none", // Remove default link underline
    color: "white", // Set text color
    display: "inline-block", // Make it inline-block to set a specific width
  };

  const [email, setEmail] = useState("");
  const [nom, setNom] = useState("");
  const [rxNational, setRxNational] = useState("");
  const [rna, setRna] = useState("");
  const [ville, setVille] = useState("");
  const [numTel, setNumTel] = useState("");
  const [password, setPassword] = useState("");
  // const handleInputChange = (e) => {
  //   const inputs = document.querySelectorAll(
  //     "input[required], select[required]"
  //   );
  //   const isValid = Array.from(inputs).every((input) => input.checkValidity());

  //   setFormIsValid(isValid);
  // };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  const handleNomChange = (e) => {
    setNom(e.target.value);
  }

  const handleRxNationalChange = (e) => {
    setRxNational(e.target.value);
  }
  
  const handleRnaChange = (e) => {
    setRna(e.target.value);
  }
  const handleVilleChange = (e) => {
    setVille(e.target.value);
  }
  const handleTelephoneChange = (e) => {
    setNumTel(e.target.value);
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
 
  const handleSubmit =async (e)=> {
    e.preventDefault();
    const userDataAsso = {
      email : email,
      nom: nom,
      description: "description" ,
      rxNational:rxNational ,
      rna: rna,
      ville: ville,
      numTel: numTel,
      password: password,
      isAsso: true
  }

  try {
      console.log(userDataAsso);
      sessionStorage.setItem('userDataAsso', JSON.stringify(userDataAsso));
      navigate('/association2'); 
    // Gérer la réponse, par exemple en redirigeant l'utilisateur ou en affichant un message de succès
  } catch (error) {
    console.error('Erreur lors de l\'envoi du formulaire :', error);
    // Gérer l'erreur, par exemple en affichant un message d'erreur
  }
    
  };

  return (
    <div className="container p-4">
      <div className="d-flex flex-column align-items-center mb-5 mt-5">
        <h1 className="fs-2">Je suis une association:</h1>
      </div>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">
            Type de structure*
          </label>
          <select id="inputState" className="form-select" required>
            <option value="" disabled>
              Choisissez votre structure...
            </option>
            <option value={"Association"}>Association</option>
            <option value={"autreStructure"}>
              Autre structure à impact positif
            </option>
          </select>
        </div>

        <div className="col-md-6">
          <label htmlFor="nomStructure" className="form-label">
            Nom de la structure*
          </label>
          <input
            type="text"
            className="form-control"
            id="nomStructure"
            required
            onChange={handleNomChange}
          />
        </div>

        <div className="col-md-6">
          <Row>
            <Col>
              <label htmlFor="reseau" className="form-label">
                Réseau national*
              </label>
            </Col>
            <Col>
              <input
                type="text"
                className="form-control"
                id="reseau"
                required
                onChange={handleRxNationalChange}

              />
            </Col>
          </Row>
        </div>
        <div className="col-md-4">
          <label htmlFor="rna" className="form-label">
            Numéro RNA*
          </label>
          <input
            type="text"
            id="rna"
            className="form-control"
            placeholder="xx xxxxx"
            required
            onChange={handleRnaChange}
          />
        </div>

        <div className="col-md-6">
          <Row>
            <Col>
              <label htmlFor="postalCode" className="form-label">
                Email              
              </label>
            </Col>
            <Col>
              <input
                type="text"
                className="form-control"
                id="postalCode"
                required
                onChange={handleEmailChange}

              />
            </Col>
          </Row>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputmdp" className="form-label">
            Mot de Passe
          </label>
          <input type="password" className="form-control" id="inputmdp" 
          value={password}
          onChange={handlePasswordChange} 
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="adressse" className="form-label">
            Ville*
          </label>
          <input
            type="text"
            id="adresse"
            className="form-control"
            placeholder="Entrez votre ville"
            required
            onChange={handleVilleChange}

          />
        </div>
        <div className="col-md-4">
          <label htmlFor="telephone" className="form-label">
            Téléphone*
          </label>
          <input
            type="tel"
            id="telephone"
            className="form-control"
            placeholder="Entrez votre numéro de téléphone valide"
            title="Veuillez entrer un numéro de téléphone valide"
            required
            onChange={handleTelephoneChange}

          />
        </div>
        <div className="col-12">
          
        <button 
            type="submit" 
            style={buttonStyle} 
            > 
            Next
          </button> 
        </div>
      </form>
    </div>
  );
};

export default AssociationPage;
