import React from 'react';
import styles from './About.module.css';
import AboutPage from './AboutMore';


function About() {
  return (
    <div>
      <div className={styles.homeSection021}>
        <div className={styles.dataDrivenInsights}>
          <img className={styles.dataDrivenInsightsChild} alt="" src="Rectangle 6_1.png" />
          <div className={styles.dataDrivenInsightsItem} />
          <div className={styles.dataDrivenInsightsInner} />
          <b className={styles.dataDrivenInsights1}>Data-Driven Insights</b>
          <div className={styles.ourConsultantsAre2}>
            Our consultants are highly skilled and experienced in various aspects of agriculture, from crop management and soil health to sustainable practices and modern technology integration.
          </div>
        </div>
        <div className={styles.tailoredSolutions}>
          <img className={styles.dataDrivenInsightsChild} alt="" src="Rectangle 6_2.png" />
          <div className={styles.dataDrivenInsightsItem} />
          <div className={styles.dataDrivenInsightsInner} />
          <b className={styles.tailoredSolutions1}>Tailored Solutions</b>
          <div className={styles.ourConsultantsAre2}>
            We understand that every farm and agricultural business is unique. Our approach involves working closely with you to understand your specific challenges and goals, enabling us to develop customized solutions that fit your needs.
          </div>
        </div>
        <div className={styles.expertise}>
          <img className={styles.dataDrivenInsightsChild} alt="" src="Rectangle 6.png" />
          <div className={styles.dataDrivenInsightsItem} />
          <div className={styles.dataDrivenInsightsInner} />
          <b className={styles.tailoredSolutions1}>Expertise</b>
          <div className={styles.ourConsultantsAre2}>
            Our consultants are highly skilled and experienced in various aspects of agriculture, from crop management and soil health to sustainable practices and modern technology integration.
          </div>
        </div>
        <div className={styles.backHs02} />
        <b className={styles.whyChooseUs1}>Why Choose Us?</b>        
          
      </div>
        <AboutPage/>
      <div>
        
      </div>
    </div>
  );
}

export default About;
