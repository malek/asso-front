// Card.jsx
import React from 'react';

const Card = ({ description, titre, date, adresse, localisation }) => {
  return (
    <div style={cardStyle}>
      <h3>{titre}</h3>
      <p>{description}</p>
      <p>Date: {date}</p>
      <p>Adresse: {adresse}</p>
      <p>Localisation: {localisation}</p>
    </div>
  );
};

const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '4px',
  padding: '10px',
  margin: '10px 0',
  backgroundColor: '#f9f9f9',
};

export default Card;
