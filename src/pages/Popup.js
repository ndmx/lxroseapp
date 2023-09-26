import React, { useEffect, useRef, useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
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
      await addDoc(collection(db, 'joinForms'), { name, email });
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
    <div ref={popupRef} id="popupForm" className={isPopupVisible ? 'popup' : 'popup hidden'}>
      <div className="blur">
        <div className="popup-content">
          <span className="close" onClick={() => setPopupVisible(false)}>
            &times;
          </span>
          <h2>Welcome to LxRose</h2>
          <p>We make your health our priority.</p>
          <h4>Join Us Now</h4>
          <form id="joinForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="joinName">Name:</label>
              <input
                type="text"
                id="joinName"
                name="name"
                required
                onChange={handleInputChange}
                value={formData.name}
              />
            </div>
            <div className="form-group">
              <label htmlFor="joinEmail">Email:</label>
              <input
                type="email"
                id="joinEmail"
                name="email"
                required
                onChange={handleInputChange}
                value={formData.email}
              />
            </div>
            <button id="joinbtn" type="submit">
              Join
            </button>
          </form>
          {isAlertVisible && (
            <div id="customAlertJoin">
              <p id="alertMessageJoin">{alertMessage}</p>
              <button id="closeAlertJoin" onClick={() => setAlertVisible(false)}>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Popup;