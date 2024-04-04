import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.footer}>
      <img className={styles.footerChild} alt="" src="Rectangle 12.png" />
      <div className={styles.footerItem} />
      <div className={styles.home}>Home</div>
      <div className={styles.service}>Service</div>
      <div className={styles.about}>About</div>
      <div className={styles.account}>Account</div>
      <b className={styles.professionalAgricultureConsu1}>Professional Agriculture Consulter</b>
      <b className={styles.rxAgro}>RX AGRO</b>
      <img className={styles.footerInner} alt="" src="Ellipse 1.png" />
    </div>
  );
}

export default Footer;
