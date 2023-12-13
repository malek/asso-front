import { useEffect } from "react";
import { Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import doneIcone from "../../assets/inscription/doneInscription.svg";

const FinalisationInscription = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const isTrue = params.get("param") === "true";

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
    padding: "10px 40px",
    textDecoration: "none",
    //display: "inline-block",
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

    // Assuming you want to pass the parameter as a query parameter
    // Set your parameter value here

    // Navigate to the "/events" page with the parameter
    window.location.href = `/events?param=${isTrue}`;

    try {
      //  await axios.post('http://localhost:8000/api/users', userData);
      //navigate("/events"); // Redirection vers la page des bénévoles
      // history.push("/candidat2");
      // Gérer la réponse, par exemple en redirigeant l'utilisateur ou en affichant un message de succès
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire :", error);
      // Gérer l'erreur, par exemple en affichant un message d'erreur
    }
  };

  return (
    <div className="container p-4 mb-5">
      <Row>
        <div className="d-flex flex-column align-items-center mb-3 mt-3">
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
        <div className="d-flex flex-column align-items-center mb-2 mt-5">
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
          <Link to="">
            <button style={buttonStyle} onClick={handleSubmit}>
              JE PARCOURS LES EVENTS !
            </button>
          </Link>
        </div>
      </Row>

     
    </div>
  );
};

export default FinalisationInscription;
