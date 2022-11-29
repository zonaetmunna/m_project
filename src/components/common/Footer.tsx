import React from 'react';
import { Col, Row } from 'antd';
import { Layout } from 'antd';

const { Footer: AntFooter } = Layout;

const Footer = () => {

  return (
    <Row className="site-layout-background">
      <Col xs={12} sm={12} md={12} lg={12} xl={12}>
        <AntFooter>Footer</AntFooter>
      </Col>
    </Row>
  );
};

export default Footer;