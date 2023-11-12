import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from 'axios';
const CandidatePage = () => {
  const buttonStyle = {
    backgroundColor: "#7C048E", // Définissez la couleur personnalisée
    padding: "10px 20px", // Add padding for a button-like appearance
    textDecoration: "none", // Remove default link underline
    color: "white", // Set text color
    display: "inline-block", // Make it inline-block to set a specific width
  };

  const [formIsValid, setFormIsValid] = useState(false);
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [dateNaissance, setDateNaissance] = useState("");
  const [ville, setVille] = useState("");
  const [numTel, setNumTel] = useState("");
  const [description, setDescription] = useState("");
  const [isBenevole, setIsBenevole] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault(); // Empêcher le rechargement de la page

    const userData = {
      email: email,
      password: password,
      nom: nom,
      prenom: prenom,
      dateNaissance: dateNaissance,
      ville: ville,
      numTel: numTel,
      description: description,
      isBenevole: isBenevole === 'Bénévole' // Assurez-vous que cette logique correspond à votre besoin
    };
    try {
      // Remplacez 'URL_API' par l'URL réelle de votre API
      console.log(userData);
      const response = await axios.post('http://localhost:8000/api/users', userData);
      console.log(response.data);
      // Gérer la réponse, par exemple en redirigeant l'utilisateur ou en affichant un message de succès
    } catch (error) {
      console.error('Erreur lors de l\'envoi du formulaire :', error);
      // Gérer l'erreur, par exemple en affichant un message d'erreur
    }
  };


  const handleInputChange = (e) => {
    // Perform validation or checks based on your requirements
    // For simplicity, this example checks if all required fields have a value
    const inputs = document.querySelectorAll(
      "input[required], select[required]"
    );
    const isValid = Array.from(inputs).every((input) => input.checkValidity());

    setFormIsValid(isValid);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };
  const handleNomChange = (e) => {
    setNom(e.target.value);
  };
  const handlePrenomChange = (e) => {
    setPrenom(e.target.value);
  };
  const handleDateNaissanceChange = (e) => {
    setDateNaissance(e.target.value);
  };
  const handleVilleChange = (e) => {
    setVille(e.target.value);
  };
  const handleNumTelChange = (e) => {
    setNumTel(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleIsBenevoleChange = (e) => {
    setIsBenevole(e.target.value === 'benevole'); // Mettre à jour isBenevole
  }

  return (
    <div className="container p-4">
      <div className="d-flex flex-column align-items-center mb-5 mt-5">
        <h1 className="fs-1">Viens rejoignez-nous!</h1>
      </div>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">
            Je suis?*
          </label>
          <select id="inputState" className="form-select" required>
            <option value="" disabled>
              Choisissez votre statut...
            </option>
            <option value={"Etudiant"}>Étudiant</option>
            <option value={"Actif"}>Actif</option>
            <option value={"En recherche d'emploi"}>
              En recherche d'emploi
            </option>
          </select>
        </div>

        <div className="col-12">
          <label htmlFor="inputState" className="form-label">
            Je veux devenir un/e?*
          </label>
          <Row>
            <Col>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="benevole"
                  name="role"
                  value="benevole"
                  checked={role === "benevole"}
                  onChange={handleRoleChange}
                />
                <label className="form-check-label" htmlFor="benevole">
                  Bénévole
                </label>
              </div>
            </Col>
            <Col>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="participant"
                  name="role"
                  value="participant"
                  checked={role === "participant"}
                  onChange={handleRoleChange}
                />
                <label className="form-check-label" htmlFor="participant">
                  Participant
                </label>
              </div>
            </Col>
          </Row>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputNom" className="form-label">
            Nom
          </label>
          <input
            type="text"
            className="form-control"
            id="inputNom"
            value={nom}
            onChange={handleNomChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPrenom" className="form-label">
            Prénom
          </label>
          <input
            type="text"
            className="form-control"
            id="inputPrenom"
            value={prenom}
            onChange={handlePrenomChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputDescription" className="form-label">
            description
          </label>
          <textarea
            type="text"
            className="form-control"
            id="inputDescription"
            value={description}
            onChange={handleDescriptionChange}
            rows={4}
          ></textarea>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail" className="form-label">
            Email
          </label>
          <input
            type="Email"
            className="form-control"
            id="inputEmail"
            placeholder=".....@...."
            value={email}
            onChange={handleEmailChange}
          />
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
          <label htmlFor="dob" className="form-label">
            Date de naissance*
          </label>
          <input type="date" id="dob" className="form-control" required
          value = {dateNaissance}
          onChange= {handleDateNaissanceChange}
           />
        </div>
        <div className="col-md-4">
          <label htmlFor="ville" className="form-label">
            Ville*
          </label>
          <input
            type="text"
            id="ville"
            className="form-control"
            placeholder="Entrez votre ville"
            required
            value={ville}
            onChange={handleVilleChange}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="numTel" className="form-label">
            numéro de Téléphone*
          </label>
          <input
            type="text"
            id="numTel"
            className="form-control"
            placeholder="Entrez votre numéro de téléphone"
            required
            value={numTel}
            onChange={handleNumTelChange}
          />
        </div>
        <div className="col-12">
         
                        <button type="submit" style={buttonStyle} >Envoyer</button>

        </div>
      </form>
    </div>
  );
};

export default CandidatePage;
