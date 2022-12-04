import React, { useState } from 'react';
import { Layout } from 'antd';
import { Row ,Spin, Skeleton,Result,Button} from 'antd';
import { useProductsQuery } from '../../services/api';
import Launch from '../../components/page/Launch';


const { Content } = Layout;

const Home = () => {
  const { data, error, isLoading, isFetching } = useProductsQuery();
  console.log(data);

  return (
    <Content style={{ margin: '24px 16px 0' }}>
  
          {isFetching ? <Skeleton active /> : <Row >
          {
            data?.map(product => <Launch
              key={product.flight_number}
              product={product}
            />
            )
          }
        </Row>}
  
          
    </Content>
  );
};

export default Home;