import React, { useState } from 'react';
import './Form.css';
import FormSignin from './FormSignin';
import FormSuccess from './FormSuccess';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <div className='form-content-left'>
          <img className='form-img' src='img/kahf_login.jpg' alt='kahf' />
        </div>
        {!isSubmitted ? (
          <FormSignin submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;
