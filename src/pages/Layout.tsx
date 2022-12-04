import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import Home from './home/Home';
import SingleLaunche from './SingleLaunche/SingleLaunche';
import { Layout as Antlayout} from 'antd';
import Sidebar from '../components/common/Sidebar';
const { Content } = Antlayout;

const Layout = () => {
  return (
    <Antlayout>
      <Header />
      <Antlayout>
        <Sidebar />
        <Antlayout style={{ padding: '0 24px 24px' }}>
          <Content style={{ margin: '24px 16px 0' }}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/launche/:id' element={<SingleLaunche />} />
            </Routes>
          </Content>
        </Antlayout>
      </Antlayout>
      <Footer />
    </Antlayout>
  );
};

export default Layout;

