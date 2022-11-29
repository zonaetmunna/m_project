import { Col, Row } from 'antd';
import React from 'react';
import { Layout } from 'antd';
const { Header: AntHeader } = Layout;

const Header = () => {
  return (
    <Row className="site-layout-background">
      <Col xs={12} sm={12} md={12} lg={12} xl={12}>
        <AntHeader>
          <h1>thhi</h1>
        </AntHeader>
      </Col>
    </Row>
  );
};

export default Header;