import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features'
import Trusted from './components/Trusted'
import Register from './components/Register'
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features/>
      <Trusted/>
      <Register/>
      <Footer/>
    </>
  );
};

export default App;
