import React from 'react';
import 'bulma/css/bulma.min.css';
const Header = () => {
  return (
    <nav classname="navbar" role="navigation" aria-label="main navigation">
    <div id="navbarBasicExample" class="navbar-menu has-background-grey-lighter">


        <div class="navbar-brand">
            <a class="navbar-item is-size-5 has-text-weight-semibold" href="https://bulma.io">
                <h1>Miguel Villagomez</h1>
            </a>
        </div>

        <div class="navbar-end">
            <div class="navbar-item is-size-5">
                <a href="https://www.npmjs.com/package/bulma?activeTab=readme" class="navbar-item">About Me</a>
                <a href="https://www.npmjs.com/package/bulma?activeTab=readme" class="navbar-item">Portfolio</a>
                <a href="https://www.npmjs.com/package/bulma?activeTab=readme" class="navbar-item">Contact Me</a>
                <a href="https://www.npmjs.com/package/bulma?activeTab=readme" class="navbar-item">Resume</a>
            </div>
        </div>
    </div>
</nav>

  ) 
}

export default Header;
 
