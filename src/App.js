import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';

const App = () => {
  return (
    
   <div>
    <Navbar />
    <Header />
    <AboutMe />
    <Portfolio />
    <Footer />
    
   </div>

  
  );
}

export default App;