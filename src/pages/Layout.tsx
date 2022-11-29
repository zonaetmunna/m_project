import React from 'react';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import Home from './home/Home';

const Layout = () => {
  return (
    <>
      <Header />
      <Home />
      <Footer/>
    </>
  );
};

export default Layout;