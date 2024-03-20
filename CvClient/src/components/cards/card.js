import React from 'react';
import './card.css';

const Card = ({ card }) => {
  
  return (
    <div className='cardsContainer'>
      <div className='card'>
         <h2 className='card-title'>{card.attributes.aboutme}</h2>
        <p className='card-text'>{card.attributes.description}</p> 
      </div>
    </div>
  );                                                              
};

export default Card;