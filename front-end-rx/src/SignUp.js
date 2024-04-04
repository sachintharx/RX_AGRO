import React, { useState } from 'react';
import styles from './SignUp.module.css';
import { Link, Navigate} from 'react-router-dom';
import axios from 'axios';


function Signup() {

  const [password, setPassword] = useState('');
  const [confirm_password, setconfirm_password] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [redirect, setRedirect] = useState(false);
  

  const handleRegistration = () => {
    if (password !== confirm_password) {
      setError('Passwords do not match.');
    } else {
      setError('');
    }
  };

 

  const sendData = (e) => {
    e.preventDefault();

    const newFarmer = {
      name,
      email,
      password,
      confirm_password,
    };

    axios
      .post("http://localhost:8080/farmer/add", newFarmer)
      .then(() => {
        alert("User Added");
        setSuccessMessage('User Added');
        setName('');
        setEmail('');
        setPassword('');        
        setconfirm_password('');
        setRedirect(true); 
        
      })
      
      .catch((err) => {
        console.log(err);
      });
  };

  if (redirect) {
    return <Navigate to="/login" />;
  }

  return (
    <section className={styles.signUpWindow1}>
         {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
      <div className={styles.logInWindowBack1} />
      <div className={styles.lgwl}>
        <img className={styles.lgwlChild} alt="" src="Ellipse 1.png" />
        <b className={styles.rxAgro}>RX AGRO</b>
      </div>
      <div className={styles.signUpForm}>
        <div className={styles.detailsSignup}>

          <div className={styles.userName}>
            <img className={styles.usernameIcon1} alt="" src="Username.png" />
           

                <input
                  type="email"
                  id = "userNameInput"
                  className= {styles.userNameInputDD}
                  placeholder="User Name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />     

            <img className={styles.userNameChild} alt="" src="Line 5.svg" />
          </div>

          <div className={styles.email}>
            <img className={styles.mailIcon1} alt="" src="mail.png" />
            <input
              type="email"
              id="emailAddressInput"
              className={styles.userNameInput}
              placeholder="Email Address"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <img className={styles.emailChild} alt="" src="Line 5.svg" />
          </div>
          
          <div>
            <div className={styles.password1}>
              <img className={styles.cnpassIcon} alt="" src="Pass.png" />
              <input
                type="password"
                id="passwordInput"
                className={styles.userNameInput}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <img className={styles.passwordChild} alt="" src="Line 5.svg" />
            </div>
            <div className={styles.password2}>
              <img className={styles.cnpassIcon} alt="" src="cnPass.png" />
              <input
                type="password"
                id="confirm_passwordInput"
                className={styles.userNameInput}
                placeholder="Confirm Password"
                value={confirm_password}
                onChange={(e) => setconfirm_password(e.target.value)}
              />
              <img className={styles.passwordChild} alt="" src="Line 5.svg" />
            </div>
            {error && <p className={styles.error}>{error}</p>}
          </div>
        </div>
        <div className={styles.alreadyHaveAn1}>Already have an account</div>
        <div className={styles.signUpFormChild} />
        <b className={styles.logIn}>Log in</b>
        <div className={styles.signUpFormItem} />


                    <Link
                        
                        className={`${styles.signUp} ${styles.noUnderline}`}
                        onClick={(e) => {
                            e.preventDefault(); 
                            handleRegistration();
                            sendData(e); 
                        }}> Sign up
                    </Link>


        <b className={styles.signUp1}>Sign up</b>
      </div>
      <img className={styles.signUpWindowChild} alt="" src="Vector 3.png" />
      <img className={styles.signUpWindowItem} alt="" src="Vector 4.png" />
      <Link to="/" className={styles.closeIcon1}>
            <img alt="Close" src="Close.svg" />
      </Link>

       

    </section>
  );
}

export default Signup;
