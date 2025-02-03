/* eslint-disable no-unused-vars */
import React from 'react';
import '../Styles/Body.css';  // Make sure to add the corresponding CSS file

const Body = () => {
  return (
    <div className="body-container">
      <section className="body-intro">
        <h2>Welcome to Our Website</h2>
        <p>
          This is a place where you can learn more about our services, browse our products, and get in touch with us.
        </p>
      </section>

      <section className="body-services">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <h3>Service 1</h3>
            <p>Description of service 1.</p>
          </div>
          <div className="service-card">
            <h3>Service 2</h3>
            <p>Description of service 2.</p>
          </div>
          <div className="service-card">
            <h3>Service 3</h3>
            <p>Description of service 3.</p>
          </div>
        </div>
      </section>

      <section className="body-testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>This is the best service I have ever used!</p>
            <span>- John Doe</span>
          </div>
          <div className="testimonial-card">
            <p>A fantastic experience, highly recommend!</p>
            <span>- Jane Smith</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Body;
