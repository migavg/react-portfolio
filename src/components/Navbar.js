import React from 'react';
import 'bulma/css/bulma.min.css';
const Navbar = ({ currentPage, handlePageChange }) => {
    return (
        <header>
            <nav classname="" >
                <div id="navbarBasicExample" className="navbar-menu has-background-link">


                    <div className="navbar-item is-size-5">
                        <a href="#aboutme"
                        onClick={() => handlePageChange('Aboutme')}
                         class="px-2 has-text-white">Miguel Villagomez Portfolio Test
                        </a>
                    </div>



                    <div className="navbar-menu navbar-item is-size-5 navbar-end ">
                        
                            
                        <a href="#aboutme"
                        onClick={() => handlePageChange('Aboutme')}
                         class="px-2 has-text-white">About Me</a>

                        <a href="#portfolio"
                        onClick={() => handlePageChange('Portfolio')}
                       class="px-2 has-text-white" >Portfolio</a>

                        <a href="#contactme"
                        onClick={() => handlePageChange('ContactMe')}
                        class="px-2 has-text-white" >Contact Me</a>

                        <a href="#resume"
                        onClick={() => handlePageChange('Resume')}
                       class="px-2 has-text-white" >Resume</a>  
                        
                        
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;

