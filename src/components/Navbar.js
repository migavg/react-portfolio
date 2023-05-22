import React from 'react';
import 'bulma/css/bulma.min.css';
const Navbar = ({ currentPage, handlePageChange }) => {
    return (
        <header>
            <nav classname="" >
                <div id="navbarBasicExample" className="navbar-menu has-background-primary">


                    <div className="navbar-brand">
                        <a className="navbar-item is-size-5 has-text-weight-semibold" href="https://bulma.io">
                            <h1>Miguel Villagomez</h1>
                        </a>
                    </div>



                    <div className="navbar-menu navbar-item is-size-5 navbar-end ">
                        
                            
                        <a href="#aboutme"
                        onClick={() => handlePageChange('Aboutme')}
                        className= {currentPage === 'Aboutme' ? 'nav-link active' : 'nav-link'} class="">About Me</a>

                        <a href="#portfolio"
                        onClick={() => handlePageChange('Portfolio')}
                        className= {currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'} class="" > Portfolio</a>

                        <a href="#contactme"
                        onClick={() => handlePageChange('ContactMe')}
                        className= {currentPage === 'ContactMe' ? 'nav-link active' : 'nav-link'} class="" > Contact Me</a>

                        <a href="#resume"
                        onClick={() => handlePageChange('Resume')}
                        className= {currentPage === 'Resume' ? 'nav-link active' : 'nav-link'} class="" >Resume</a>  
                        
                        
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;

