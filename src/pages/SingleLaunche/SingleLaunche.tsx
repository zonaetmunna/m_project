import React from 'react';
import { useParams } from 'react-router-dom';
import { useProductQuery } from '../../services/api';

const SingleLaunche = () => {
  const { id } = useParams();
  const { data} = useProductQuery(id);
  return (
    <div>
      
    </div>
  );
};

export default SingleLaunche;