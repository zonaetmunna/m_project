import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../../types/types';

const Launch = ({ product }: { product: Product }) => {
  const { flight_number, mission_name, launch_date_local } = product;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/launche/${flight_number}`);
    console.log(flight_number);
  }
  return (
    <div>
      <h1>{flight_number}</h1>
      <p>{mission_name}</p>
      <p>{launch_date_local}</p>
      <button onClick={handleClick}></button>
      
    </div>
  );
};

export default Launch;