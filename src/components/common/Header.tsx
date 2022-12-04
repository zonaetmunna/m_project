import { Col, Row } from 'antd';
import React from 'react';
import { Layout } from 'antd';
const { Header: AntHeader } = Layout;

const Header = () => {
  return (
    <Row>
      <Col xs={12} sm={12} md={12} lg={12} xl={12}>
        <AntHeader className="site-layout-sub-header-background" style={{ padding: 0 ,backgroundColor:"#873800"}} >
          <h1>launch</h1>
        </AntHeader>
      </Col>
    </Row>
  );
};

export default Header;