import React from 'react';
import { useParams } from 'react-router-dom';
import { useProductQuery } from '../../services/api';

const SingleLaunche = () => {
  const { id='' } = useParams();
  console.log(id);
  const { data} = useProductQuery(id);
  return (
    <div>
      <h5>{data?.flight_number}</h5>
      <p>{data?.mission_name}</p>
    </div>
  );
};

export default SingleLaunche;