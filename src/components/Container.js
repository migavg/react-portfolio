import React, { useState } from 'react';
import Navbar from './Navbar';
import AboutMe from '../pages/AboutMe';
import Portfolio from '../pages/Portfolio';
import ContactMe from '../pages/ContactMe';
import Resume from '../pages/Resume';
import Footer from '../components/Footer';

export default function Container() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Aboutme') {
      return <AboutMe />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'ContactMe') {
      return <ContactMe />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}

      <Footer />
    </div>



    
    

  );
}
