import { useEffect } from "react";
import { Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import doneIcone from "../../assets/inscription/doneInscription.svg";
import purpleButtomFlowers from "../../assets/inscription/purpleButtomFlowers.svg";

const FinalisationInscription = () => {
  const navigate = useNavigate();
  // Use useEffect to change the body background color when the component mounts
  useEffect(() => {
    // Save the current body background color
    const originalBodyBackgroundColor = document.body.style.backgroundColor;

    // Change the body background color to 8675AA
    document.body.style.backgroundColor = "#8675AA";

    // Cleanup function to reset the body background color when the component unmounts
    return () => {
      document.body.style.backgroundColor = originalBodyBackgroundColor;
    };
  }, []); // The empty dependency array ensures this effect runs only once on mount

  const buttonStyle = {
    backgroundColor: "#E5D2EC",
    color: "black", // Utilisez "color" au lieu de "textColor" pour définir la couleur du texte
    padding: "10px 20px",
    textDecoration: "none",
    display: "inline-block",
    cursor: "pointer",
    //marginTop: "50%", // Change "margin-top" to marginTop
    //marginLeft: "35%", // Change "margin-left" to marginLeft
    fontFamily: "SuperTea",
    position: "relative",
    // zIndex: 1,
    borderRadius: "15px",
  };

  const imageStyle = {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Empêcher le rechargement de la page

    try {
      //  await axios.post('http://localhost:8000/api/users', userData);
      navigate("/home"); // Redirection vers la page des bénévoles
      // history.push("/candidat2");

      // Gérer la réponse, par exemple en redirigeant l'utilisateur ou en affichant un message de succès
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire :", error);
      // Gérer l'erreur, par exemple en affichant un message d'erreur
    }
  };

  return (
    <div className="container p-4">
      <Row>
        <div className="d-flex flex-column align-items-center mb-5 mt-5">
          <h1
            style={{
              color: "white",
              letterSpacing: "3px",
              transform: "rotate(-7.56deg)",
              fontSize: "3em",
            }}
          >
            FÉLICITATION !
          </h1>
        </div>
      </Row>
      <Row>
        <img src={doneIcone} alt="doneIcone" />
      </Row>
      <Row>
        <div className="d-flex flex-column align-items-center mb-5 mt-5">
          <p
            className="fs-3"
            style={{
              color: "white",
              fontFamily: "SuperTea",
              letterSpacing: "2px",
            }}
          >
            INSCRIPTION TERMINÉE !
          </p>
        </div>
      </Row>
      <Row>
        <div
          className="col-12"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10%",
          }}
        >
          <button style={buttonStyle} onClick={handleSubmit}>
            JE PARCOURS LES EVENTS !
          </button>
        </div>
      </Row>

      <img
        src={purpleButtomFlowers}
        alt="purpleButtomFlowers"
        style={imageStyle}
      />
    </div>
  );
};

export default FinalisationInscription;
