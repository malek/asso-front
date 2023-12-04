import React from 'react';
import img1 from '../../assets/StaticCrads/img1.jpg';

import img2 from '../../assets/StaticCrads/img2.jpg';
import img3 from '../../assets/StaticCrads/img3.jpeg';

import img4 from '../../assets/StaticCrads/img4.png';



const BeautifulCards = () => {
  return (
    <div style={cardsContainerStyle}>
      {cardData.map((card, index) => (
        <div key={index} style={cardStyle}>
          <img src={card.image} alt={card.title} style={imageStyle} />
          <div style={cardContentStyle}>
            <h3 style={cardTitleStyle}>{card.title}</h3>
            <p style={cardDescriptionStyle}>{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const cardsContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
  padding: '10px',
  maxWidth: '400px',
  margin: 'auto',
};

const cardStyle = {
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  margin: '10px',
  overflow: 'hidden',
  width: '348px',
  height: '327px',
  borderRadius: '20px',
  background: '#FCFCFC'
};

const imageStyle = {
  width: '100%',
  height: '200px',
  objectFit: 'cover',
};

const cardContentStyle = {
  padding: '15px',
};

const cardTitleStyle = {
  margin: '0 0 10px 0',
  color: '#333',
};

const cardDescriptionStyle = {
  margin: 0,
  color: '#666',
};

const cardData = [
  {
    title: 'Carte 1',
    description: 'Description de la carte 1',
    image: img1,
  },
  {
    title: 'Carte 2',
    description: 'Description de la carte 2',
    image: img2,
  },
  {
    title: 'Carte 3',
    description: 'Description de la carte 3',
    image: img3,
  },
  {
    title: 'Carte 4',
    description: 'Description de la carte 4',
    image: img4,
  },
];

export default BeautifulCards;
