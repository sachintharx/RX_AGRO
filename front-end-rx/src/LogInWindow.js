import React, { useState } from 'react';
import styles from './LogInWindow.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SuccessModal from './SuccessModal'; // Import the SuccessModal component
import ErrorModal from './ErrorModal'; // Import the ErrorModal component

function LogInWindow() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false); // State for the success modal
  const [showErrorModal, setShowErrorModal] = useState(false); // State for the error modal

  const handleRememberMeClick = () => {
    setRememberMe(!rememberMe);
  };

  

  const handleLogin = async () => {
    try {
      // Make an API request to your backend for user authentication

      console.log('Before login request');
      const response = await axios.post('http://localhost:8080/farmer/login', {
        email,
        password,
      });

      console.log('After login request', response.data);

      // Check the response for authentication success or failure
      if (response.data.authenticated) {
        // Handle successful login (e.g., show the success modal)
        setShowSuccessModal(true);
      } else {

        // Handle login failure (e.g., show the error modal)
        setShowErrorModal(true);
      }
    } catch (error) {
      // Handle any API request error (e.g., network issue)
      console.error('Error:', error);
    }
  };

  return (
    <div className={styles.logInWindow1}>
      <div className={styles.logInWindowBack1} />
      <div className={styles.lgwl}>
        <img className={styles.lgwlChild} alt="" src="Ellipse 1.png" />
        <b className={styles.rxAgro}>RX AGRO</b>
      </div>
      <div className={styles.loginForm}>
        <b className={styles.logIn}>Log in</b>
        <img className={styles.mailIcon1} alt="" src="mail.png" />

        <input
          type="string"
          id="email"
          className={styles.userEmailInput}
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <img className={styles.loginFormChild} alt="" src="Line 3.png" />
        <img className={styles.passIcon1} alt="" src="Pass.png" />

        <input
          type="password"
          id="password"
          className={styles.userDataInput}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <img className={styles.loginFormItem} alt="" src="Line 3.png" />

        <div
          className={styles.rememberMe}
          onClick={handleRememberMeClick}
          style={{ cursor: 'pointer' }}
        >
          {rememberMe ? '✓ Remembered' : 'Click for Remember'}
        </div>

        <div className={styles.forgotPassword}>{`Forgot password `}</div>
        <div className={styles.rectangleDiv} />

        <Link to="/" className={`${styles.logIn1} ${styles.noUnderline}`}>
          Log in
        </Link>
      </div>
      <img className={styles.logInWindowChild} alt="" src="Vector 3.png" />
      <img className={styles.logInWindowItem} alt="" src="Vector 4.png" />
      <Link to="/" className={styles.closeIcon1} onClick={handleLogin}>
        <img alt="" src="Close.svg" />
      </Link>

      {showSuccessModal && (
        <SuccessModal onClose={() => setShowSuccessModal(false)} />
      )}

      {showErrorModal && (
        <ErrorModal onClose={() => setShowErrorModal(false)} />
      )}
    </div>
  );
}

export default LogInWindow;
