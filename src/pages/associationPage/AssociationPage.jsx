import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import purpleButtomFlowers from "../../assets/inscription/purpleButtomFlowers.svg";

const AssociationPage = () => {
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
  const purpleDivStyle = {
    background: "#8675AA",
    color: "white",
    borderRadius: "0 0 18% 18%",
    letterSpacing: "2px",
    fontFamily: "'SuperTea', sans-serif",
    marginTop: "-10%",
  };
  const navigate = useNavigate();

  const [formIsValid, setFormIsValid] = useState(false);
  const [email, setEmail] = useState("");
  const [rxNational, setRxNational] = useState("");
  const [rna, setRna] = useState("");
  const [ville, setVille] = useState("");
  const [numTel, setNumTel] = useState("");
  const [password, setPassword] = useState("");

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
    const isValid = email && rxNational && rna && ville && numTel && password;
    setFormIsValid(isValid);

    // Cleanup function for form validation useEffect
  }, [email, password, rxNational, rna, ville, numTel]);

  const handleInputChange = (e) => {
    const inputs = document.querySelectorAll(
      "input[required], select[required]"
    );

    switch (e.target.id) {
      case "email":
        setEmail(e.target.value);
        break;
      case "reseau": // Assurez-vous que l'ID est correct dans le JSX
        setRxNational(e.target.value);
        break;
      case "rna":
        setRna(e.target.value);
        break;
      case "ville":
        setVille(e.target.value);
        break;
      case "telephone": // Assurez-vous que l'ID est correct dans le JSX
        setNumTel(e.target.value);
        break;
      case "inputmdp": // Assurez-vous que l'ID est correct dans le JSX
        setPassword(e.target.value);
        break;
    }

    const isValid = Array.from(
      document.querySelectorAll("input[required], select[required]")
    ).every((input) => input.checkValidity());

    setFormIsValid(isValid);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formIsValid) return;

    const userDataAsso = {
      email: email,

      description: "description",
      rxNational: rxNational,
      rna: rna,
      ville: ville,
      numTel: numTel,
      password: password,
      isAsso: true,
    };

    try {
      console.log(userDataAsso);
      sessionStorage.setItem("userDataAsso", JSON.stringify(userDataAsso));
      navigate("/association2");
      // Gérer la réponse, par exemple en redirigeant l'utilisateur ou en affichant un message de succès
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire :", error);
      // Gérer l'erreur, par exemple en affichant un message d'erreur
    }
  };

  return (
    <div className="mb-5">
      <Row>
        <div style={purpleDivStyle}>
          <div className="d-flex flex-column align-items-center mb-5 mt-5">
            <p className="fs-3" style={{ marginTop: "5%" }}>
              JE SUIS UNE ASSO !
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
                <label htmlFor="inputState" className="form-label">
                  Type de structure*
                </label>
              </Row>
              <Row>
                <select
                  id="inputState"
                  className="form-select"
                  required
                  style={{
                    borderRadius: "15px",
                  }}
                >
                  <option value="" disabled>
                    Choisissez votre structure...
                  </option>
                  <option value={"Association"}>Association</option>
                  <option value={"autreStructure"}>
                    Autre structure à impact positif
                  </option>
                </select>
              </Row>
            </div>

            <Row>
              <Col>
                <label
                  htmlFor="reseau"
                  className="form-label"
                  style={{ marginTop: "5%" }}
                >
                  Réseau national*
                </label>
              </Col>
              <Col>
                <input
                  type="text"
                  className="form-control"
                  id="reseau"
                  required
                  onChange={handleInputChange}
                  style={{
                    borderRadius: "15px",
                    marginTop: "5%",
                  }}
                />
              </Col>
            </Row>

            <Row>
              <label htmlFor="rna" className="form-label">
                Numéro RNA*
              </label>
              <Row>
                {" "}
                <input
                  type="text"
                  id="rna"
                  className="form-control"
                  placeholder="xx xxxxx"
                  required
                  onChange={handleInputChange}
                  style={{
                    borderRadius: "15px",
                  }}
                />
              </Row>
            </Row>

            <Row>
              <label
                htmlFor="email"
                className="form-label"
                style={{ marginTop: "5%" }}
              >
                Email
              </label>
            </Row>
            <Row>
              {" "}
              <input
                type="text"
                className="form-control"
                id="email"
                required
                onChange={handleInputChange}
                placeholder="...@..."
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
                required
                value={password}
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
                Ville*
              </label>
            </Row>
            <Row>
              <input
                type="text"
                id="ville"
                className="form-control"
                placeholder="Entrez votre ville"
                required
                onChange={handleInputChange}
                style={{
                  borderRadius: "15px",
                }}
              />
            </Row>
            <Row>
              {" "}
              <label
                htmlFor="telephone"
                className="form-label"
                style={{ marginTop: "5%" }}
              >
                Téléphone*
              </label>
            </Row>
            <Row>
              <input
                type="tel"
                id="telephone"
                className="form-control"
                placeholder="Entrez votre numéro de téléphone valide"
                title="Veuillez entrer un numéro de téléphone valide"
                required
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
            marginTop: "3%",
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

export default AssociationPage;
