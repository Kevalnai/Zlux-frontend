/* eslint-disable no-unused-vars */
import React from 'react';
import '../Styles/Body.css';  // Make sure to add the corresponding CSS file

const Body = () => {
  return (
    <div className="body-container">
      <section className='img_1'>
        <img src='/src/Assets/Front_Image.png'></img>
      </section>
      <section className="body-intro">
        <h1>Lighting design made easy with DIALux</h1>
        <p>
        Design, calculate and visualise light for indoor and outdoor areas. With DIALux you can create individual rooms, multi-storey buildings, paths, car parks and streets. Use real luminaires provided by DIALux Members and bring your project to life.
        </p>
        <button className='btn1'>Download for free</button>
        <button className='btn2'>Dialux pro</button>
      </section>

      <section className="body-services">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <h3>Indoor</h3>
            <p>Press for further choices</p>
          </div>
          <div className="service-card">
            <h3>Outdoor</h3>
            <p>Press for further choices | Set your preference</p>
          </div>
          <div className="service-card">
            <h3>Night Light</h3>
            <p>Blends you dreams with best light</p>
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
