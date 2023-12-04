import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import { Row, Container } from "react-bootstrap";
import {  Link } from "react-router-dom";

import nuageAsso from "../../assets/landingImages/LOGO-ASSOHARE.svg";
import illusHome from "../../assets/landingImages/illus_homepage.svg";
import purpleButtomFlowers from "../../assets/inscription/purpleButtomFlowers.svg";

const Landing = () => {
  

  const navigate = useNavigate();
  const imageStyleLogo = {
    width: "45%", // Set the desired width
    height: "8%", // Set the desired height
    marginTop: "10%",
  };
  const imageStyleIllu = {
    width: "95%", // Set the desired width
    height: "100%", // Set the desired height
    marginTop: "-5%",
  };

  const buttonStyle = {
    backgroundColor: "#8675AA", // Définissez la couleur personnalisée
    padding: "2% 3%", // Add padding for a button-like appearance
    textDecoration: "none", // Remove default link underline
    color: "white", // Set text color
    display: "inline-block", // Make it inline-block to set a specific width
    borderRadius: "20px", // Add rounded corners
    marginTop: "3%",
  };

  const whiteDivStyle = {
    background: "white",
    borderRadius: "18% 18% 0 0",
    marginTop: "-5%",
    //marginBottom: "100%",
    //flex: 1, // Take remaining height
  };

  const purpleButtomFlowersStyle = {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    zIndex: 1,
  };

  useEffect(() => {
    // Disable scrolling on mount
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    // Re-enable scrolling on unmount or component update
    return () => {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    };
  }, []);

  const [formIsValid, setFormIsValid] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const isValid = email && password;
    setFormIsValid(isValid);

    // Cleanup function for form validation useEffect
  }, [email, password]);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Empêcher le rechargement de la page

    if (!formIsValid) return;

    const userData = {
      email: "saif5@gmail.com",
      password: "123456",
    };
    const AssoData = {
      email: "asso5@gmail.com",
      password: "123456",
    };
    if (email === userData.email && password === userData.password) {
      navigate('/events');
    } else if (email === AssoData.email && password === AssoData.password) {
      navigate('/events');
    } else {
      alert('Incorrect username or password');
    }
  };

  const handleInputChange = (e) => {
    // Perform validation or checks based on your requirements
    // For simplicity, this example checks if all required fields have a value
    const inputs = document.querySelectorAll(
      "input[required], select[required]"
    );
    switch (e.target.id) {
      case "inputEmail":
        setEmail(e.target.value);
        break;
      case "inputmdp":
        setPassword(e.target.value);
        break;
    }

    // Vérifier si le formulaire est valide
    const isValid = Array.from(
      document.querySelectorAll("input[required], select[required]")
    ).every((input) => input.checkValidity());
    setFormIsValid(isValid);
  };

  return (
    <div>
      <Row>
        <div
          className="container-fluid text-center"
          style={{ background: "#E5D2EC" }}
        >
          <Row className="justify-content-around">
            <img src={nuageAsso} alt="nuage logo" style={imageStyleLogo} />
          </Row>
          <Row
            style={{
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <img
              src={illusHome}
              alt="illustration home"
              style={imageStyleIllu}
            />
            <div className="container-fluid" style={whiteDivStyle}>
              <Row>
                <div className="d-flex flex-column align-items-center mb-5 mt-5">
                  <h1
                    style={{
                      marginTop: "-7%",
                      //marginBottom: "3%",
                      fontSize: "1.5em",
                    }}
                  >
                    JE M'INSCRIS ! JE SUIS :
                  </h1>

                  <div
                    className="col-12 d-flex flex-column align-items-center btnText"
                    style={{ marginBottom: "3%" }}
                  >
                    <Link to="/candidat" style={buttonStyle}>
                      UN PARTICULIER
                    </Link>
                  </div>
                  <div className="col-12 d-flex flex-column align-items-center btnText">
                    <Link to="/association" style={buttonStyle}>
                      UNE ASSOCIATION
                    </Link>
                  </div>
                </div>
              </Row>
              <Row>
                <h1
                  style={{
                    fontSize: "1.5em",
                    marginBottom: "5%",
                    marginTop: "-5%",
                  }}
                >
                  J'AI DÉJÀ UN COMPTE :
                </h1>
              </Row>
              <Container>
                <form>
                  {/* onSubmit={handleSubmit} */}
                  <div className="row g-1">
                    <Row>
                      {" "}
                      <label
                        htmlFor="inputEmail"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        {/* style={{ margin: 0, marginTop: "15px" }} */}
                        Mail :
                      </label>
                    </Row>
                    <Row
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                      }}
                    >
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmail"
                        placeholder=".....@...."
                        onChange={handleInputChange}
                        style={{
                          borderRadius: "15px",
                          backgroundColor: "#E6E6E6",
                          marginTop: "3%",
                          width: "80%",
                        }}
                      />
                    </Row>
                    <Row>
                      <label
                        htmlFor="inputmdp"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginTop: "3%",
                        }}
                      >
                        Mot de passe :
                      </label>
                    </Row>
                    <Row
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                      }}
                    >
                      <input
                        type="password"
                        className="form-control"
                        id="inputmdp"
                        placeholder="********"
                        onChange={handleInputChange}
                        style={{
                          //display: "flex",
                          justifyContent: "center",
                          borderRadius: "15px",
                          backgroundColor: "#E6E6E6",
                          marginTop: "3%",
                          width: "80%",
                        }}
                      />
                    </Row>
                  </div>
                </form>
                <Row>
                  <div className="col-12">
                    {formIsValid ? (
                      <button
                        type="submit"
                        style={buttonStyle}
                        disabled={!formIsValid}
                        onClick={handleSubmit}
                      >
                        CONNEXION
                      </button>
                    ) : (
                      <span
                        style={{
                          ...buttonStyle,
                          pointerEvents: "none",
                          opacity: 0.5,
                        }}
                      >
                        CONNEXION
                      </span>
                    )}
                  </div>
                </Row>
              </Container>
            </div>
          </Row>
        </div>
      </Row>
      <img
        src={purpleButtomFlowers}
        alt="purpleButtomFlowers"
        style={purpleButtomFlowersStyle}
      />
    </div>
  );
};

export default Landing;
