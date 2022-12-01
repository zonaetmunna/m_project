import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import Home from './home/Home';
import SingleLaunche from './SingleLaunche/SingleLaunche';

const Layout = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/launche/:id' element={<SingleLaunche />} />
        </Routes>
      <Footer/>
    </>
  );
};

export default Layout;