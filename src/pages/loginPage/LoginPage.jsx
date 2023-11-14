import React from "react";
import { Link } from "react-router-dom";
const LoginPage = () => {
  const lienStyle = {
    color: "#7C048E", // Remplacez cette valeur par la couleur désirée
    // Vous pouvez également ajouter d'autres styles ici, si nécessaire
  };
  return (
    <div className="container p-4">
      <div className="d-flex flex-column align-items-center mb-5 mt-5">
        <h1 className="fs-1">connectez-vous</h1>
      </div>
      <div>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Adresse Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Mot de passe
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-dark bg-dark">
            Submit
          </button>
        </form>
      </div>
      <div className="d-flex flex-column align-items-center mb-5 mt-5">
      <h1 className="fs-4">
      Vous n'avez pas de compte ?{" "}
        <Link to="/" style={lienStyle}> Inscrivez-vous sur AssoShare.</Link>
      </h1>
    </div>
    </div>
  );
};

export default LoginPage;
