import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import { validateEmail } from './utils/helpers';

function ContactForm() {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      alert(`You gotta use an actual email!`);
      return;
    }
    if (name === '') {
      alert(`I'm pretty sure you have a name, type it in!`);

      return;
    }
    if (message === '') {
      alert(`You don't wanna type in a message?`);

      return;
    }
    if (message || name || message) {
      alert(`Cool thanks for that!`);
      alert(`Not sure what to do after this but I'll figure it out, hopefully....`);
   
      
    }
    
    setName('');
    setMessage('');
    setEmail('');

    
  };

  return (
    <div className='has-background-link container mt-6 mb-6 p-5'>


      <p className='is-size-2 has-text-white mb-6'>Fill Out this Contact Form</p>

      <form className="form">
        <div class='field'>
          <input
          class="input is-info"
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="name"
          />
        </div>

        <div class='field'>
          <input
          class="input is-info"
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
          />
        </div>

        <div class='field'>
          <textarea
          class="input is-info textarea"
            value={message}
            name="message"
            onChange={handleInputChange}
            type="message"
            placeholder="message"
          />
        </div>

        <button class="button is-white mt-6"  onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
