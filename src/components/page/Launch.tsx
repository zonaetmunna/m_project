import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../../types/types';
import { Card } from 'antd';
const { Meta } = Card;

const Launch = ({ product }: { product: Product }) => {
  const { flight_number, mission_name, launch_date_local } = product;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/launche/${flight_number}`);
    console.log(flight_number);
  }

  const gridStyle: React.CSSProperties = {
  width: '25%',
  textAlign: 'center',
};

  return (
    <Card.Grid style={gridStyle}>
      <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
      <div>
        <h1>{flight_number}</h1>
        <p>{mission_name}</p>
        <p>{launch_date_local}</p>
        <button onClick={handleClick}></button>
      
      </div>
    </Card>
    </Card.Grid>
    
  );
};

export default Launch;