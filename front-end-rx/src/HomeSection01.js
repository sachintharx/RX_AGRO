import React from 'react';
import styles from './HomeSection01.module.css';
import HomeSection02 from './HomeSection02';
import { Link } from 'react-router-dom';

function HomeSection01() {
  return (
    <div>
        <div className={styles.homeSection011}>
            <img className={styles.imgHomeIcon} alt="" src="Img_Home.png" />
            <div className={styles.introText}>
                <b className={styles.welcomeToRx}>Welcome to RX AGRO's Agriculture Consulting Services!</b>
                <div className={styles.wereDedicatedTo1}>
                We're dedicated to revolutionizing the way you experience agriculture. 
                Our expert team of agricultural consultants is here to provide you with innovative solutions, personalized advice, 
                and data-driven strategies that will enhance your agricultural practices and boost your yields.
                </div>
            </div>
        
            <div className={styles.startButton} >
                <div className={styles.startButtonChild} />              
                    <Link to="/service" className={`${styles.getStart} ${styles.noUnderline}`}>
                    Get Started</Link>
            </div>  

        </div>

        <div>

            <HomeSection02 />

        </div>  

    </div>
  );
}

export default HomeSection01;

          					