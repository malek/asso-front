import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Ajout pour les appels API

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const lienStyle = {
    color: "#7C048E",
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Appel de l'API pour la connexion
      const response = await axios.post("http://localhost:8080/authentication_token", {
        adresse: email,
        mdp: password,
      });

      // Gestion de la réponse de l'API
      if (response.data.token) {
        console.log("Connexion réussie, Token :", response.data.token);
        // Vous pouvez également stocker le token dans le localStorage ou le contexte
      } else {
        console.log("Connexion échouée : pas de token reçu");
      }
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
      // Gérer ici les erreurs de connexion
    }
  };

  return (
    <div className="container p-4">
      <div className="d-flex flex-column align-items-center mb-5 mt-5">
        <h1 className="fs-1">Connectez-vous</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Adresse Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Mot de passe</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-dark bg-dark">Submit</button>
      </form>
      <div className="d-flex flex-column align-items-center mb-5 mt-5">
        <h1 className="fs-4">
          Vous n'avez pas de compte ?{" "}
<<<<<<< HEAD
          <Link to="/inscription" style={lienStyle}>Inscrivez-vous sur AssoShare.</Link>
=======
          <Link to="/" style={lienStyle}>
            {" "}
            Inscrivez-vous sur AssoShare.
          </Link>
>>>>>>> 5866dd3e1c776ba90b67ecf9d5a8eaefcd4e8ca5
        </h1>
      </div>
    </div>
  );
};

export default LoginPage;
