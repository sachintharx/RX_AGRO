import React from 'react';
import styles from './HomeSection03.module.css';

function HomeSection03() {
  return (

    <div className={styles.homeSection031}>
      
      <div className={styles.homeSection03Child} />

      

      <a href="/HomeSection03" className={styles.contactCounselor1}>
        <img className={styles.contactCounselorChild} alt="" src="Rectangle 10_1.png" />
        <div className={styles.contactCounselorItem} />
        <div className={styles.contactCounselor2}>Contact Counselor</div>
      </a>


            <a href="/HomeSection03" className={styles.maintenance}>
        <img className={styles.contactCounselorChild} alt="" src="Rectangle 10_2.png" />
        <div className={styles.contactCounselorItem} />
        <div className={styles.contactCounselor2}>Maintenance</div>
      </a>


            <a href="/account" className={styles.findSolutions}>
        <img className={styles.contactCounselorChild} alt="" src="Rectangle 10_3.png" />
        <div className={styles.contactCounselorItem} />
        <div className={styles.contactCounselor2}>Find Solutions</div>
      </a>



      <a href="/startGrowing" className={styles.startGrowing}>
        <img className={styles.contactCounselorChild} alt="" src="Rectangle 10_4.png" />
        <div className={styles.contactCounselorItem} />
        <div className={styles.contactCounselor2}>Start Growing</div>
      </a>


      <div className={styles.selectYourRequirement1}>Select your requirement</div>
    </div>
  );
}

export default HomeSection03;
