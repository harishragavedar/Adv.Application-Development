import React from 'react';
import '../../assets/css/ContactUs.css'; // Ensure the correct path to your CSS file
import back from '../../assets/images/contact.jpg';
import NavBar from './Navbar';

const MyContactForm = () => {
  const handleSendClick = () => {
    alert('Thank you for the feedback');
  };

  return (
    <>
      <NavBar />
      <div
        style={{
          backgroundColor: 'palegreen',
          backgroundImage: `url(${back})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
        }}
        data-overlay="5"
      >
        <div className="my-container">
          <div className="my-wrapper">
            <div className="my-title">
              <h1>Contact Us Form</h1>
            </div>
            <div className="my-contact-form">
              <div className="my-input-fields">
                <input type="text" className="my-input" placeholder="Name" />
                <input type="text" className="my-input" placeholder="Email Address" />
                <input type="text" className="my-input" placeholder="Phone" />
                <input type="text" className="my-input" placeholder="Subject" />
              </div>
              <div className="my-msg">
                <textarea placeholder="Message"></textarea>
                <div className="my-btn" onClick={handleSendClick}>
                  Send
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyContactForm;
