import React, { useState } from 'react';
import Skills from "./Skills";
import Certification from "./Certification";
import airbus from "./../Assets/airbus.png";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [inquiryType, setInquiryType] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can access the form input values from the state variables (name, email, inquiryType, message)
    // Perform your desired actions (e.g., send the data to a server)
  };

  return (
    <div className="contact-container">
            <Certification/>
        <Skills/>
      <h2 className="contact-header">Contact Me</h2>
      <div className="contact-form-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="inquiry">Type of Inquiry:</label>
          <select
            id="inquiry"
            value={inquiryType}
            onChange={(e) => setInquiryType(e.target.value)}
            required
          >
            <option value="">Select an option</option>
            <option value="General">General</option>
            <option value="Technical">Technical</option>
            <option value="Job">Job Related</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="message">Your Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
      </div>
            <img src={airbus} alt="Airbus" height="50px"/>
    </div>
  );
};

export default Contact;
