import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import addAvatar from "../../assets/add.png";
const AssociationPage2 = () => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [bio, setBio] = useState("");
  const [subscribe, setSubscribe] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

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
  const handleInputChange = (e) => {
    // Perform validation or checks based on your requirements
    // For simplicity, this example checks if all required fields have a value
    const inputs = document.querySelectorAll(
      "input[required], select[required]"
    );
    const isValid = Array.from(inputs).every((input) => input.checkValidity());

    setFormIsValid(isValid);
  };

  const handleBioChange = (e) => {
    const inputBio = e.target.value;
    // Implement logic to limit the bio to 50 words
    const words = inputBio.trim().split(/\s+/);
    if (words.length <= 100) {
      setBio(inputBio);
    }
  };

  const handleSubscribeChange = () => {
    setSubscribe(!subscribe);
  };

  const handleAgreeTermsChange = () => {
    setAgreeTerms(!agreeTerms);
  };

  

  return (
    <div className="container p-4">
      <form className="row g-3" onChange={handleInputChange}>
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
            //style={buttonStyle}
          />
          <label>Ajouter une photo</label>
        </div>
        <div className="col-12">
          <label htmlFor="bio" className="form-label">
            Bio (max 100 words)*
          </label>
          <textarea
            id="bio"
            className="form-control"
            value={bio}
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
              checked={subscribe}
              onChange={handleSubscribeChange}
            />
            <label className="form-check-label" htmlFor="subscribe">
              Je souhaite recevoir des actualités d'AssoShare et du monde
              associatif.
            </label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="agreeTerms"
              checked={agreeTerms}
              onChange={handleAgreeTermsChange}
            />
            <label className="form-check-label" htmlFor="agreeTerms">
              J'ai lu et accepté les conditions d'utilisation de la plateforme
              Assoshare ainsi que le traitement du dossier.
            </label>
          </div>
        </div>
        <div className="col-12">
          {formIsValid ? (
            <Link to="/" style={buttonStyle}>
              Finaliser
            </Link>
          ) : (
            <span
              style={{ ...buttonStyle, pointerEvents: "none", opacity: 0.5 }}
            >
              Finaliser
            </span>
          )}
        </div>
      </form>
    </div>
  );
};

export default AssociationPage2;