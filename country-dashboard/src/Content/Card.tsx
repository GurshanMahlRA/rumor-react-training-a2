import React from 'react';

interface CardProps {
  name: string;
  population: number;
  region: string;
  capital: string;
  currency: string;
  flagUrl: string;
}

const Card: React.FC<CardProps> = ({ name, population, region, capital, currency, flagUrl }) => {
  return (
    <div className="card">
      <img src={flagUrl} className="card--image" alt={`Flag of ${name}`} />
      <div className="card--stats">
        <h4>{name}</h4>
        <p>Population: {population}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital}</p>
        <p>Currency: {currency}</p>
      </div>
    </div>
  );
};

export default Card;

