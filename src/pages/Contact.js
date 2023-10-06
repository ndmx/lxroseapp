import React, { useRef, useState } from 'react';
import { addDoc, collection, Timestamp } from 'firebase/firestore'; // Import Timestamp
import { db } from '../firebase';

const handleContactForm = async (name, email, message) => {
  try {
    const timestamp = Timestamp.fromDate(new Date()); // Firestore's built-in Timestamp
    const docRef = await addDoc(collection(db, 'contactForms'), {
      name,
      email,
      message,
      timestamp, // Add the timestamp here
    });
    return docRef.id;
  } catch (error) {
    console.error('Error adding document: ', error);
    return null;
  }
};

const Contact = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [isFormDisabled, setFormDisabled] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormDisabled(true);
  
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;
  
    try {
      await handleContactForm(name, email, message);
      setAlertMessage('Thank You. We will contact you shortly!');
      setShowAlert(true);
  
      setTimeout(() => {
        setShowAlert(false);
        setFormDisabled(false);
        nameRef.current.value = '';
        emailRef.current.value = '';
        messageRef.current.value = '';
        document.getElementById('contactForm').reset();
      }, 2000);
    } catch (error) {
      console.error('An error occurred in handleContactForm:', error);
      setAlertMessage('An error occurred. Please try again later.');
      setShowAlert(true);
      setFormDisabled(false);
    }
  };

  return (
    <div>
      <div id="home-banner" className="banner">
        <div className="container">
          <div className="header-text">
            <h1>Contact Us</h1>
          </div>
        </div>
      </div>

      <div id="mainContent" className="contact">
        <section id="contact">
          <h2>Let's Get in Touch and Transform Your Health Journey</h2>
          <p>
            We're excited to hear from you! Whether you have a question, want to
            sign up for our services, or are simply curious about how technology
            and healthcare can come together to create magic, don't hesitate to
            reach out.
          </p>
        </section>
        <section id="contact-form">
          <form id="contactForm" onSubmit={handleSubmit} disabled={isFormDisabled}>
            <div className="form-group">
              <input type="text" placeholder='Name:' id="name" name="name" ref={nameRef} required disabled={isFormDisabled} />
            </div>
            <div className="form-group">
              <input type="email" placeholder='Email:' id="email" name="email" ref={emailRef} required disabled={isFormDisabled} />
            </div>
            <div className="form-group">
              <textarea id="message" placeholder='Message:' name="message" ref={messageRef} required disabled={isFormDisabled}></textarea>
            </div>
            <button id="contact-form-btn" type="submit" disabled={isFormDisabled}>
              {isFormDisabled ? 'Submitting...' : 'Submit'}
            </button>

            {showAlert && (
              <div id="customAlertContact" className='form-group'>
                <p id="alertMessageContact">{alertMessage}</p>
                <button id="closeAlertContact" onClick={() => setShowAlert(false)}>
                </button>
              </div>
            )}
          </form>
        </section>
      </div>

      <div id="home-banner5" className="banner">
        <div className="container">
          <div className="header-text"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;