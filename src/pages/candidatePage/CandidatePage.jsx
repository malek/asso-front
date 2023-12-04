import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import purpleButtomFlowers from "../../assets/inscription/purpleButtomFlowers.svg";
const CandidatePage = () => {
  // const history = useHistory();
  const navigate = useNavigate();

  //style de button + l'image en bas
  const buttonStyle = {
    backgroundColor: "#8675AA",
    padding: "10px 20px",
    textDecoration: "none",
    color: "white",
    display: "inline-block",
    cursor: "pointer",
    marginTop: "10%", // Change "margin-top" to marginTop
    // marginLeft: "25%", // Change "margin-left" to marginLeft
    fontFamily: "SuperTea", // Change "font-family" to fontFamily
    borderRadius: "15px",
  };

  //style de button + l'image en bas
  const annulerButtonStyle = {
    backgroundColor: "#8675AA",
    padding: "10px 20px",
    textDecoration: "none",
    color: "white",
    cursor: "pointer",
    fontFamily: "SuperTea",
    borderRadius: "15px",
  };

  const imageStyle = {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    zIndex: -1,
  };

  const [formIsValid, setFormIsValid] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dateNaissance, setDateNaissance] = useState("");
  const [ville, setVille] = useState("");
  const [numTel, setNumTel] = useState("");
  const [isBenevole, setIsBenevole] = useState(false);

  useEffect(() => {
    // Disable scrolling on mount
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";

    // Re-enable scrolling on unmount or component update
    return () => {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    const isValid = email && password && dateNaissance && ville && numTel;
    setFormIsValid(isValid);
  }, [email, password, dateNaissance, ville, numTel]);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Empêcher le rechargement de la page

    if (!formIsValid) return;

    const userData = {
      email: email,
      password: password,
      nom: "nom",
      prenom: "prenom",
      dateNaissance: dateNaissance,
      ville: ville,
      numTel: numTel,
      description: "description",
      isBenevole: isBenevole, // Assurez-vous que cette logique correspond à votre besoin
    };
    try {
      //  await axios.post('http://localhost:8000/api/users', userData);
      console.log(userData);
      sessionStorage.setItem("userData", JSON.stringify(userData));
      navigate("/candidat2"); // Redirection vers la page des bénévoles

      // Gérer la réponse, par exemple en redirigeant l'utilisateur ou en affichant un message de succès
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire :", error);
      // Gérer l'erreur, par exemple en affichant un message d'erreur
    }
  };

  const handleInputChange = (e) => {
    // Perform validation or checks based on your requirements
    // For simplicity, this example checks if all required fields have a value
    const inputs = document.querySelectorAll(
      "input[required], select[required]"
    );
    if (e.target.id === "benevole") {
      setIsBenevole(true);
    } else if (e.target.id === "participant") {
      setIsBenevole(false);
    }

    // const isValid = Array.from(inputs).every((input) => input.checkValidity());

    // setFormIsValid(isValid);

    switch (e.target.id) {
      case "inputEmail":
        setEmail(e.target.value);
        break;
      case "inputmdp":
        setPassword(e.target.value);
        break;
      case "dob":
        setDateNaissance(e.target.value);
        break;
      case "ville":
        setVille(e.target.value);
        break;
      case "numTel":
        setNumTel(e.target.value);
        break;
    }

    // Vérifier si le formulaire est valide
    const isValid = Array.from(
      document.querySelectorAll("input[required], select[required]")
    ).every((input) => input.checkValidity());
    setFormIsValid(isValid);
  };

  const purpleDivStyle = {
    background: "#8675AA",
    color: "white",
    borderRadius: "0 0 18% 18%",
    letterSpacing: "2px",
    fontFamily: "'SuperTea', sans-serif",
    marginTop: "-10%",
  };
  return (
    <div className="mb-5">
      <Row>
        <div style={purpleDivStyle}>
          <div className="d-flex flex-column align-items-center mb-5 mt-5">
            <p className="fs-3" style={{ marginTop: "5%" }}>
              JE SUIS PARTICIPANT!
            </p>
            <p className="fs-3" style={{ marginBottom: "-5%" }}>
              ÉTAPE 1
            </p>
          </div>
        </div>
        <div className="container p-4">
          <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-12">
              <Row>
                <Col xs={4} md={4} style={{ marginLeft: "10px" }}>
                  <label className="form-label">Je veux :</label>
                </Col>
                <Col style={{ marginLeft: "-30px" }}>
                  <Row>
                    <div className="form-check">
                      <input
                        type="radio"
                        className="form-check-input"
                        id="participant"
                        name="role"
                        value="participant"
                        checked={isBenevole === false}
                        onChange={handleInputChange}
                      />
                      <label className="form-check-label" htmlFor="participant">
                        Simplement participer
                      </label>
                    </div>
                  </Row>
                  <Row>
                    <div className="form-check">
                      <input
                        type="radio"
                        className="form-check-input"
                        id="benevole"
                        name="role"
                        value="benevole"
                        checked={isBenevole === true}
                        onChange={handleInputChange}
                      />
                      <label className="form-check-label" htmlFor="benevole">
                        Faire du bénévolat
                      </label>
                    </div>
                  </Row>
                </Col>
              </Row>
            </div>
            <Row>
              <label
                htmlFor="dob"
                className="form-label"
                style={{ marginTop: "5%" }}
              >
                Date de naissance :
              </label>
            </Row>
            <Row>
              <input
                type="date"
                id="dob"
                className="form-control"
                required
                value={dateNaissance}
                onChange={handleInputChange}
                style={{
                  borderRadius: "15px",
                }}
              />
            </Row>
            <Row>
              <label
                htmlFor="ville"
                className="form-label"
                style={{ marginTop: "5%" }}
              >
                Ville :
              </label>
            </Row>
            <Row>
              <input
                type="text"
                id="ville"
                className="form-control"
                placeholder="Entrez votre ville"
                required
                value={ville}
                onChange={handleInputChange}
                style={{
                  borderRadius: "15px",
                }}
              />
            </Row>
            <Row>
              <label
                htmlFor="inputEmail"
                className="form-label"
                style={{ marginTop: "5%" }}
              >
                Email :
              </label>
            </Row>
            <Row>
              <input
                type="Email"
                className="form-control"
                id="inputEmail"
                placeholder=".....@...."
                value={email}
                onChange={handleInputChange}
                style={{
                  borderRadius: "15px",
                }}
              />
            </Row>
            <Row>
              <label
                htmlFor="inputmdp"
                className="form-label"
                style={{ marginTop: "5%" }}
              >
                Mot de Passe :
              </label>
            </Row>
            <Row>
              <input
                type="password"
                className="form-control"
                id="inputmdp"
                value={password}
                onChange={handleInputChange}
                style={{
                  borderRadius: "15px",
                }}
              />
            </Row>

            <Row
              style={{
                display: "flex",
                justifyContent: "end",
              }}
            >
              {" "}
              <label
                htmlFor="numTel"
                className="form-label"
                style={{ marginTop: "5%" }}
              >
                Téléphone :
              </label>
            </Row>
            <Row>
              <input
                type="text"
                id="numTel"
                className="form-control"
                placeholder="Entrez votre numéro de téléphone"
                required
                value={numTel}
                onChange={handleInputChange}
                style={{
                  borderRadius: "15px",
                }}
              />
            </Row>
          </form>
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
            marginBottom: "-5%",
          }}
        >
          <button style={annulerButtonStyle}>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              RETOUR
            </Link>
          </button>
        </div>
        <div
          className="col-12"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {formIsValid ? (
            <button
              type="submit"
              style={buttonStyle}
              disabled={!formIsValid}
              onClick={handleSubmit}
            >
              ÉTAPE SUIVANTE -&gt;
            </button>
          ) : (
            <span
              style={{ ...buttonStyle, pointerEvents: "none", opacity: 0.5 }}
            >
              ÉTAPE SUIVANTE -&gt;
            </span>
          )}
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

export default CandidatePage;
