import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProductQuery } from '../../services/api';
import { Card,Button } from 'antd';
import { Col, Row } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;

const SingleLaunche = () => {
  const { id = '' } = useParams();
  const navigate = useNavigate();
  console.log(id);
  const { data} = useProductQuery(id);
  return (
      <Card
        hoverable
        style={{ display:'flex',justifyContent:'center',alignItems:'center' }}
      >
        <Title level={4}>{data?.flight_number}</Title>
        <Title level={5}>{data?.mission_name}</Title>
        <Title level={5}>{data?.launch_date_local}</Title>
        <Button type="primary" onClick={()=>navigate('/')}>Go Back</Button>
      </Card>
  );
};

export default SingleLaunche;