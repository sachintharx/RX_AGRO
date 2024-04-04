import React from 'react';
import styles from './AboutPage.css';

function AboutPage() {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.highlighted}>About Us</h1>
      <p>Welcome to RX AGRO, your trusted partner in agricultural solutions. We are passionate about agriculture and committed to helping farmers, agricultural businesses, and organizations thrive in a rapidly changing industry.</p>

      <h2 className={styles.highlighted}>Our Mission</h2>
      <p>At RX AGRO, our mission is to provide comprehensive, data-driven, and sustainable agricultural solutions that enhance crop yields, soil health, and overall farm productivity. We believe that a thriving agricultural sector is essential for a sustainable and food-secure future.</p>

      <h2 className={styles.highlighted}>Our Expertise</h2>
      <div className={styles.expertise}>
        <div className={styles.expertiseItem}>
          <h3>Crop Management</h3>
          <p>Our team of experienced consultants specializes in optimizing crop management practices. We provide tailored recommendations to help you maximize yields while minimizing input costs.</p>
        </div>
        <div className={styles.expertiseItem}>
          <h3>Soil Health</h3>
          <p>Healthy soil is the foundation of successful farming. We offer soil testing and analysis services to ensure your soil is in its best condition for optimal plant growth.</p>
        </div>
        <div className={styles.expertiseItem}>
          <h3>Sustainable Practices</h3>
          <p>We are committed to promoting sustainable farming practices that benefit both your business and the environment. Our experts can guide you in implementing eco-friendly solutions.</p>
        </div>
        <div className={styles.expertiseItem}>
          <h3>Technology Integration</h3>
          <p>Embracing modern technology is crucial in today's agriculture. We assist in integrating the latest advancements in farming technology to improve efficiency and productivity.</p>
        </div>
      </div>

      <h2 className={styles.highlighted}>Our Approach</h2>
      <p>We understand that every farm and agricultural business is unique. Our approach involves working closely with you to understand your specific challenges and goals. We believe in a partnership that enables us to develop customized solutions that fit your needs perfectly.</p>

      <h2 className={styles.highlighted}>Our Team</h2>
      <p>Our consultants are highly skilled and experienced in various aspects of agriculture. With a deep knowledge of crop management, soil health, sustainable practices, and cutting-edge technology, we are well-equipped to support your agricultural needs.</p>

      <h2 className={styles.highlighted}>Contact Us</h2>
      <p>Ready to take your agriculture business to the next level? We'd love to hear from you. Feel free to get in touch with our team to discuss how we can help you achieve your agricultural goals.</p>

      <div className={styles.rectangles}></div>
    </div>
  );
}

export default AboutPage;
