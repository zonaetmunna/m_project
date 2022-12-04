import React, { useState } from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, Input } from 'antd';
import { Select } from 'antd';
import { useProductsQuery } from '../../services/api';
import Launch from '../../components/page/Launch';

const { Header,Footer, Sider, Content } = Layout;
const { Search } = Input;

const Home = () => {
  // redux toolkit rtk query state
  const { data, error, isLoading, isFetching } = useProductsQuery();
  console.log(data);
  // select
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Search placeholder="input search text" style={{ width: 200 }} />
        <Select
          defaultValue="Last Week"
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            {
              value: 'Last Week',
              label: 'Last Week',
            },
            {
              value: 'Last Month',
              label: 'Last Month',
            },
            {
              value: 'Last Year',
              label: 'Last Year',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {
              data?.map(product => <Launch
                key={product.flight_number}
                product={product}
              />
              )
            }
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default Home;