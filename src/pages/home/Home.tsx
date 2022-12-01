import React, { useState } from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import { Layout, Menu, Input } from 'antd';
import { Select } from 'antd';

import Header from '../../components/common/Header';
import { useProductsQuery } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import Launch from '../../components/page/Launch';

const { Footer, Sider, Content } = Layout;
const { Search } = Input;

const Home = () => {
  // page layout state
  const [collapsed, setCollapsed] = useState(false);
  // redux toolkit rtk query state
  const { data, error, isLoading, isFetching } = useProductsQuery();
  console.log(data);
  // select
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <Row>
      <Col xs={2} sm={4} md={4} lg={4} xl={4}>
        {/* sidebar */}
        <Layout style={{ height: "auto" }}>
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
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['4']}
              items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
                (icon, index) => ({
                  key: String(index + 1),
                  icon: React.createElement(icon),
                  label: `nav ${index + 1}`,
                }),
              )}
            /></Sider>
        </Layout>
      </Col>
      {/* content */}
      <Col xs={10} sm={8} md={8} lg={8} xl={8}>
      <Layout>
        <Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Row>
              <Col xs={10} sm={8} md={8} lg={8} xl={8}>
                {
                  data?.map(product => <Launch
                    key={product.flight_number}
                    product={product}
                  />
                  )
                }
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
      </Col>
    </Row>
  );
};

export default Home;