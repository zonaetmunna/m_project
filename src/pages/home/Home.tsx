import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'
import { Col, Row } from 'antd';
import { Layout, Menu } from 'antd';
import Header from '../../components/common/Header';
import { useProductsQuery } from '../../services/api';

const {  Footer, Sider, Content } = Layout;

const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  // redux
  const { data, error, isLoading, isFetching } = useProductsQuery();
  
  console.log(data);

  return (
    <Layout>
      <Row>
      

      {/* <Header className="site-layout-background" style={{ padding: 0 }}>
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'trigger',
          onClick: () => setCollapsed(!collapsed),
        })}
        <h3>this</h3>
      </Header> */}

        <Col xs={2} sm={4} md={6} lg={8} xl={10}>
          <Layout className="site-layout">

            <Sider trigger={null} collapsible collapsed={collapsed}>

              <div className="logo" />
          
              <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={[
                  {
                    key: '1',
                    icon: <UserOutlined />,
                    label: 'nav 1',
                  },
                  {
                    key: '2',
                    icon: <VideoCameraOutlined />,
                    label: 'nav 2',
                  },
                  {
                    key: '3',
                    icon: <UploadOutlined />,
                    label: 'nav 3',
                  },
                ]}
              />
            </Sider>
          </Layout>
        </Col>
        <Col xs={2} sm={4} md={6} lg={8} xl={10}>
          <Layout>
            <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
                height:"100%"
                
              }}
            >
              <div>
                {
                  data?.map(product => {
                    return (
                      <div>
                        <h1>{product?.flight_number}</h1>
                        <p>{product?.mission_name}</p>
                        <p>{product.launch_date_local}</p>
                      </div>
                    )
                  })
                }
              </div>
            </Content>
          </Layout>
        </Col>
      </Row>
    </Layout>
  );
};

export default Home;