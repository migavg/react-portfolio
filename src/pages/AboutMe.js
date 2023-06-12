import React from 'react';
import 'bulma/css/bulma.min.css';
import squid from '../images/squid.png'

const AboutMe = () => {
  return (
    <div className='column'>
    <div class="content is-large container mt-6 mb-6">
      <h1>About Me</h1>
      <img src={squid} alt='squid avatar' />
      <p>Hello my name is Miguel Villagomez. I am currently enrolled in a an edX fullstack coding bootcamp. Currently I am trying to learn to become
        a bit more proficient in coding. But there is still a looooong way to go. Anyways I like pineapple on pizza and have a small white dog that is an
         Italian greyhound chihuaha mix. I suppose that's it for now until I come up with more stuff to make myself more hirable. 
      </p>
      <h2>Coding Languages "eXpeRiEnce"</h2>
      <p>Still learning all these things so don't expect much.</p>
      <ul>
        <li>HTML and CSS</li>
        <li>JavaScript</li>
        <li>REACT</li>
        <li>Node</li>
        <li>Bulma Framework</li>

      </ul>
    </div>
    </div>
  )
}

export default AboutMe;




