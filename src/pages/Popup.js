import React, { useEffect, useRef, useState } from 'react';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { db } from '../firebase';

const Popup = () => {
  const [isPopupVisible, setPopupVisible] = useState(true);
  const [isAlertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const popupRef = useRef(null);

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const showErrorAlert = (error) => {
    console.error('Error adding document: ', error);
    setAlertMessage('An error occurred. Please try again later.');
    setAlertVisible(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email } = formData;

    try {
      const timestamp = Timestamp.fromDate(new Date());
      await addDoc(collection(db, 'joinForms'), {
        name,
        email,
        timestamp,
      });
      console.log('popup submitted successfully!');
      setAlertMessage('Thanks for joining');
      setAlertVisible(true);

      setTimeout(() => {
        setFormData({ name: '', email: '' });
        handleClose();
      }, 2000);
    } catch (error) {
      showErrorAlert(error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setPopupVisible(false);
    }
  };

  const handleClose = () => {
    setPopupVisible(false);
  };

  return (
    <div className={isPopupVisible ? 'popup-overlay' : 'popup-overlay hidden'}>
      <div ref={popupRef} className="popup-content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <h2>Welcome to LxRose</h2>
        <p>We make your health our priority.</p>
        <h4>Join Us Now</h4>
        <form id="joinForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              id="joinName"
              name="name"
              required
              onChange={handleInputChange}
              value={formData.name}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              id="joinEmail"
              name="email"
              required
              onChange={handleInputChange}
              value={formData.email}
            />
          </div>
          <button id="color-changing-button" type="submit">
            Sign Up
          </button>
        </form>
        {isAlertVisible && (
          <div id="customAlertJoin">
            <p id="alertMessageJoin">{alertMessage}</p>
            <button id="closeAlertJoin" onClick={() => setAlertVisible(false)}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Popup;