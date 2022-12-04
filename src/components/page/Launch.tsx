import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../../types/types';
import { Card,Button } from 'antd';
import { Col} from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;




const Launch = ({ product }: { product: Product }) => {
  const { flight_number, mission_name, launch_date_local } = product;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/launche/${flight_number}`);
    console.log(flight_number);
  }


  return (
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 4, offset: 3 }} style={{ marginBottom: "15px" }}>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <Title level={4}>{flight_number}</Title>
        <Title level={5}>{mission_name}</Title>
        <Title level={5}>{launch_date_local}</Title>
        <Button type="primary" onClick={handleClick}>Learn more</Button>
      </Card>
    </Col>
      
   
  );
};

export default Launch;