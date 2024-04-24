
import { NavLink,Link } from 'react-router-dom';
import styles from './Header.module.css';
import React from 'react';





function Header() {

    
    

  return (
    <div className={styles.header}>
      <div className={styles.headerChild} />
      <div className={styles.headerItem} />
      <div className={styles.navigation}>
        

      <div className={styles.signup}>
          <div className={styles.signupChild} />
          <Link to="/signup" className={styles.signUp}>
            Sign Up
          </Link>
        </div>

        <div className={styles.signin}>
          <div className={styles.signinChild} />
          <Link to="/login" className={styles.signUp}>
            Sign in
            </Link>
          
        </div>

        <NavLink
          to="/"
          className={styles.home}
          activeClassName={styles.active} // Use your style class for active links
        >
          Home
        </NavLink>
        <NavLink
          to="/service"
          className={styles.service}
          activeClassName={styles.active} // Use your style class for active links
        >
          Service
        </NavLink>
        <NavLink
          to="/about"
          className={styles.about}
          activeClassName={styles.active} // Use your style class for active links
        >
          About
        </NavLink>
        <NavLink
          to="/account"
          className={styles.account}
          activeClassName={styles.active} // Use your style class for active links
        >
          Solutions
        </NavLink>
      </div>

      <img className={styles.logoIcon} alt="" src="LOGO.png" />
      <b className={styles.rxAgro}>RX AGRO</b>
      <img className={styles.headerInner} alt="" src="Line 1.svg" />
      
    </div>
  );
}

export default Header;
